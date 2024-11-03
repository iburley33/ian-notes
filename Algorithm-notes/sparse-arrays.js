function matchingStrings(strings, queries) {

    var counter = new Map();
    strings.forEach(s => {
        if(!counter.has(s)) counter.set(s, 1)
        else counter.set(s, counter.get(s) +1);
    })
    return queries.map(q => counter.get(q) || 0)
    
    

}

/* There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Example
strings = ['ab,'ab','abc']
queries = ['ab', 'abc', 'bc']


There are  instances of ',  of '' and  of ''. For each query, add an element to the return array, .

Function Description

Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:

string strings[n] - an array of strings to search
string queries[q] - an array of query strings
Returns

int[q]: an array of results for each query
Input Format

The first line contains and integer , the size of .
Each of the next  lines contains a string .
The next line contains , the size of .
Each of the next  lines contains a string .





 */