let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to','Program');
const indexOfEasily = secretMessage.indexOf('easily');
secretMessage[indexOfEasily] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
const indexOfGet = secretMessage.indexOf('get');
secretMessage.splice(indexOfGet, 6, 'know')
console.log(secretMessage.join());
