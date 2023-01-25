// Syntax: /pattern/flags

const regExpStr = "Hello world! hello there";
const regExpLiteral = /Hello/gi;
console.log(regExpStr.match(regExpLiteral));

// Output: ['Hello', 'hello']
