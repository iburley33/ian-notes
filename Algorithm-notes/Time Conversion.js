var s = '12:00:00AM'

function timeConversion(s) {

    let ampm = s.substring(8)
    
    let baseTime = s.substring(0, 8);
    
    let times = baseTime.split(':');
    
    if(ampm === "PM") {
        if(times[0] != '12') {
            times[0] = parseInt(times[0]) + 12;
        }
    } else {
        if(times[0] === '12'){
            times[0] = '00';
        }
    }
    
    return times.join(':');
}


/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input

07:05:45PM
Sample Output

19:05:45
*/
