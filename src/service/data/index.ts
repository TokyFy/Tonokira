const musics = [
    {
        title : "Coffee",
        id: "0",
        album : "Coffee",
        Album: { id: "0", name: "Coffee" },
        AlbumArts : "/dummy/001.jpg",
        Artists: [{ id: "0", name: "beabadoobee" }],
        lyric : "[00:09.05]Don't stay awake for too long\n" +
            "[00:13.16]Don't go to bed\n" +
            "[00:15.95]I'll make a cup of coffee for your head\n" +
            "[00:20.10]I'll get you up and going out of bed\n" +
            "[00:23.97]And I promise that one day I'll feel fine\n" +
            "[00:32.61]And I promise that one day I'll feel alright\n" +
            "[00:41.09]And I'll make a cup of coffee with the right amount of sugar\n" +
            "[00:45.65]How you like it\n" +
            "[00:49.40]And I'll make a cup of coffee with the right amount of sugar\n" +
            "[00:53.47]How you like it\n" +
            "[00:57.03]How you like it\n" +
            "[01:01.83]Don't know how long I'll stay for\n" +
            "[01:05.35]It's okay, I'll knock on your door\n" +
            "[01:09.60]Won't you come down and get me?\n" +
            "[01:13.95]I like it when you hold me tight\n" +
            "[01:19.74]You make me feel nice\n" +
            "[01:23.49]The green in your eyes\n" +
            "[01:26.72]Makes me feel warm inside\n" +
            "[01:32.50]And I'll make a cup of coffee with the right amount of sugar\n" +
            "[01:36.35]How you like it\n" +
            "[01:39.73]And I'll make a cup of coffee with the right amount of sugar\n" +
            "[01:43.76]How you like it\n" +
            "[01:46.82]How you like it\n" +
            "[01:57.44]Yeah"
    },
    {
        title : "Numb",
        id: "1",
        AlbumArts : "/dummy/002.jpg",
        album : "Numb",
        Album: { id: "1", name: "Numb" },
        Artists: [{ id: "1", name: "Men I Trust" }],
        lyric: "[00:27.00]Hon, please forgive me if I ever did you wrong\n" +
            "[00:36.63]I'll be your candle, burn me upside down\n" +
            "[00:43.99]From now on, I won't sleep on my arms\n" +
            "[00:55.03]Numb, is how I feel deep inside my soul\n" +
            "[01:04.51]Need to feel that I am on the line\n" +
            "[01:11.89]I'm sorry that I drag you down my way\n" +
            "[01:46.67]Hon, I never meant to cheat you out of time\n" +
            "[01:56.26]In cold mornings when our sheets are warm\n" +
            "[02:02.93]I see a flower with no needles on, so far\n" +
            "[02:14.26]Stung, and there's a bee that gave it all away\n" +
            "[02:24.00]Pretty eyes now filled with pain\n" +
            "[02:30.30]A young confusion, what a shame"
    } ,
    {
        title : "cliché",
        id: "2",
        AlbumArts : "/dummy/003.jpg",
        album : "plum blossom",
        Album: { id: "2", name: "plum blossom" },
        Artists: [{ id: "2", name: "mxmtoon" }],
        lyric: "[00:01.42]Mmm, woah, mm\n" +
            "[00:08.88]I walked into the room and I then I saw your face\n" +
            "[00:12.27]You looked me in the eye and I wanted to erase myself\n" +
            "[00:16.40]Erase myself\n" +
            "[00:19.47]I didn't wanna fall but then I stepped right in\n" +
            "[00:22.86]I looked down at the ground and then I felt it right within\n" +
            "[00:26.91]It was too late for me (late for her)\n" +
            "[00:30.74]You took a step forward and tilted your head\n" +
            "[00:33.54]With a curious glance you stared and I felt dead\n" +
            "[00:37.70]Oh my god, I think I'm dying!\n" +
            "[00:41.33]You said \"Hey\" and I said \"Hello\"\n" +
            "[00:44.48]\"What's your name? I'd really like to know about you\"\n" +
            "[00:49.09]Too bad I stopped at \"Hello\"\n" +
            "[00:51.82]I just stared and you grinned\n" +
            "[00:54.46]And looked right back, it felt like just one big whirlwind\n" +
            "[00:58.44]One big emotional whirlwind\n" +
            "[01:01.98]Over the next few days\n" +
            "[01:04.03]We got to talking with every single word\n" +
            "[01:06.66]I started falling farther, farther and farther for you\n" +
            "[01:12.76]You were so witty and so charming, swept me off my feet\n" +
            "[01:15.67]You made me laugh you made me blush, no one could compete\n" +
            "[01:19.14](No one could compete)\n" +
            "[01:22.12]It seemed to good to be true (it was too good to be true)\n" +
            "[01:25.78]I wanted to be with you (and only with you)\n" +
            "[01:28.77]We clicked like legos or the clacking of tap shoes\n" +
            "[01:32.91]You say \"Hey\", I said \"Hello\"\n" +
            "[01:34.95]\"How's your day?\" You said \"Better now\" with a smile\n" +
            "[01:38.62]Oh, what a cliché, but to be honest it made my day!\n" +
            "[01:43.14]I didn't wanna fall but then I stepped right in\n" +
            "[01:45.76]I looked up at your face and those eyes they drew me in\n" +
            "[01:49.52]It was too late for me\n" +
            "[01:52.27]And that's what we were, a simple cliché\n" +
            "[01:55.75]It wasn't made to work, but I wouldn't have it any other way\n" +
            "[01:59.77]Any other way\n" +
            "[02:02.80]You were so witty and so charming, swept me off my feet\n" +
            "[02:06.16]You made me laugh you made me blush, no one could compete\n" +
            "[02:08.73](No one could compete)\n" +
            "[02:12.47]It seemed to good to be true (it was too good to be true)\n" +
            "[02:15.81]I wanted to be with you (and only with you)\n" +
            "[02:18.54]We clicked like legos or the clacking of tap shoes\n" +
            "[02:22.29]You say \"Hey\", I said \"Hello\"\n" +
            "[02:24.71]\"I gotta know, do you feel this way?\"\n" +
            "[02:27.08]You said \"Yeah, I do\n" +
            "[02:29.23]But I was scared of what you might say\"\n" +
            "[02:33.13]That's all we were, a silly cliché\n" +
            "[02:37.76]I still think you're cute\n" +
            "[02:40.34]But maybe it's better this way\n" +
            "[02:42.82]Bah duh duh dum, bah duh duh dum\n" +
            "[02:46.03]Bah duh duh duh duh duh duh duh duh dum\n" +
            "[02:49.71]Bah duh duh duh dum\n" +
            "[02:52.48]That's okay, we're just a little cliché\n" +
            "[02:56.69]We're a little cliché\n" +
            "[02:59.61]But that's okay!"
    } ,
    {
        title : "Better",
        id: "3",
        AlbumArts : "/dummy/004.jpg",
        album : "Better",
        Album: { id: "3", name: "Better" },
        Artists: [{ id: "3", name: "Clairo" }],
        lyric: "[00:17.37]I know there's something right\n" +
            "[00:19.53]Right in between us\n" +
            "[00:21.76]I see you standing there\n" +
            "[00:23.94]Want you to just trust\n" +
            "[00:26.29]You make it hard for me\n" +
            "[00:28.46]So hard not to stare\n" +
            "[00:30.61]I'm moving closer baby\n" +
            "[00:32.75]Why don't you seem to care?\n" +
            "[00:34.91]All my life, thinking about all these times\n" +
            "[00:39.40]Wanted someone like you\n" +
            "[00:41.39]Hold me tight, but treat me right\n" +
            "[00:43.85]All my life, needing someone to get by\n" +
            "[00:48.23]What if I had it right from the very first time?\n" +
            "[00:51.78]I want it better\n" +
            "[00:55.69]I want it better\n" +
            "[01:00.44]I want it better\n" +
            "[01:04.69]I want it better for you\n" +
            "[01:10.10]I know it isn't right\n" +
            "[01:12.41]You creep into the night\n" +
            "[01:14.68]Maybe you want a friend\n" +
            "[01:16.89]Maybe not in this life\n" +
            "[01:18.95]Why is it so hard, hard to please you\n" +
            "[01:23.48]All I wanted was you in the room\n" +
            "[01:27.92]All my life, thinking about other guys\n" +
            "[01:32.08]Never hit me like this\n" +
            "[01:34.18]Cut me deep like a knife\n" +
            "[01:36.97]All my life, tried so hard to be alright\n" +
            "[01:41.05]What have you done to me\n" +
            "[01:43.01]Blinded, I lost my mind\n" +
            "[01:44.54]I want it better\n" +
            "[01:48.71]I want it better\n" +
            "[01:53.18]I want it better\n" +
            "[01:57.62]I want it better for you\n" +
            "[02:02.20]I want it better\n" +
            "[02:06.31]I want it better\n" +
            "[02:10.78]I want it better\n" +
            "[02:15.16]I want it better for you\n" +
            "[02:19.74]I want it better\n" +
            "[02:23.82]I want it better\n" +
            "[02:28.36]I want it better\n" +
            "[02:32.72]I want it better for you"
    }
]

export default musics;
