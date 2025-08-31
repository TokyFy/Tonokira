/**
 * Extract dominant colors from an image using canvas
 */
export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textSecondary: string;
}

export function extractColorsFromImage(imageUrl: string): Promise<ColorPalette> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        // Set canvas size
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image
        ctx.drawImage(img, 0, 0);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Extract colors using a simplified algorithm
        const colorCounts: { [key: string]: number } = {};
        
        // Sample every 10th pixel for performance
        for (let i = 0; i < data.length; i += 40) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const alpha = data[i + 3];
          
          // Skip transparent pixels
          if (alpha < 128) continue;
          
          // Group similar colors
          const key = `${Math.floor(r / 32) * 32},${Math.floor(g / 32) * 32},${Math.floor(b / 32) * 32}`;
          colorCounts[key] = (colorCounts[key] || 0) + 1;
        }
        
        // Get most common colors
        const sortedColors = Object.entries(colorCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([color]) => color.split(',').map(Number));
        
        if (sortedColors.length === 0) {
          // Fallback colors
          resolve({
            primary: '#1f2937',
            secondary: '#374151',
            accent: '#6366f1',
            text: '#ffffff',
            textSecondary: '#d1d5db'
          });
          return;
        }
        
        // Create palette
        const [r, g, b] = sortedColors[0];
        const primary = `rgb(${r}, ${g}, ${b})`;
        
        // Generate complementary colors
        const secondary = `rgb(${Math.max(0, r - 40)}, ${Math.max(0, g - 40)}, ${Math.max(0, b - 40)})`;
        const accent = `rgb(${Math.min(255, r + 60)}, ${Math.min(255, g + 60)}, ${Math.min(255, b + 60)})`;
        
        // Determine text colors based on brightness
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        const text = brightness > 128 ? '#000000' : '#ffffff';
        const textSecondary = brightness > 128 ? '#374151' : '#d1d5db';
        
        resolve({
          primary,
          secondary,
          accent,
          text,
          textSecondary
        });
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = () => {
      // Fallback colors
      resolve({
        primary: '#1f2937',
        secondary: '#374151',
        accent: '#6366f1',
        text: '#ffffff',
        textSecondary: '#d1d5db'
      });
    };
    
    img.src = imageUrl;
  });
}

/**
 * Generate CSS custom properties from color palette
 */
export function applyColorPalette(palette: ColorPalette) {
  const root = document.documentElement;
  root.style.setProperty('--color-primary', palette.primary);
  root.style.setProperty('--color-secondary', palette.secondary);
  root.style.setProperty('--color-accent', palette.accent);
  root.style.setProperty('--color-text', palette.text);
  root.style.setProperty('--color-text-secondary', palette.textSecondary);
}