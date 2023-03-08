const { formatString } = require('./test1');
const { getQuote } = require('./test2');

const tests = [
    { name: "Test 1", myString: "xxxy", maxRepeat: 2, testCompleted: false, myResult: "" },
    { name: "Test 2", myString: "xxyy", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 3", myString: "xxxxyyyyxx", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 4", myString: "aaaabbbbccccdddd", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 5", myString: "aaaabbbbccccdddd", maxRepeat: 2, testCompleted: false, myResult: "" },
    { name: "Test 6", myString: "aaaabbbbccccdddd", maxRepeat: 3, testCompleted: false, myResult: "" },
];

tests.forEach(test => console.log(formatString(test)));

console.log('3 Sprinter vans for 5 hours = $' + getQuote(3, 'Sprinter', 'Hourly', 5));
console.log('A Mini Bus for 7 days = $' + getQuote(1, 'Mini Bus', 'Daily', 7));
console.log('2 Party Buses for 500 miles = $' + getQuote(2, 'Party Bus', 'Distance', 500));
