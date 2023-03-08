
const formatString = function (test) {
    const { result, stack } = test.myString.split('').reduce((agg, next) => {
        if (!agg.stack.length) {
            return { result: agg.result, stack: [next] };
        } else if (next !== agg.stack[0]) {
            return { result: agg.result + agg.stack.slice(0, test.maxRepeat).join(''), stack: [next] };
        } else {
            return { result: agg.result, stack: agg.stack.concat(next) };
        }
    }, { result: '', stack: [] });
    test.testCompleted = true;
    test.myResult = result + stack.slice(0, test.maxRepeat).join('');
    return test;
}

module.exports = {
    formatString
};
