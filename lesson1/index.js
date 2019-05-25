var readlineSync = require('readline-sync');

readlineSync.setDefaultOptions({limit: ['green', 'yellow', 'red']});
a1 = readlineSync.question('Which color of signal? '); // Input is limited to 3 things.
a2 = readlineSync.question('Which color of signal? '); // It's limited yet.
a3 = readlineSync.question('What is your favorite color? ', {limit: null}); // It's unlimited temporarily.
a4 = readlineSync.question('Which color of signal? '); // It's limited again.
readlineSync.setDefaultOptions({limit: ['beef', 'chicken']});
a5 = readlineSync.question('Beef or Chicken? ');        // Input is limited to new 2 things.
a6 = readlineSync.question('And you? ');  