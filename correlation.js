/* 
    Computing correlation
    So, this is the exercise listed in Eloquent_JavaScript (page 57 "The weresquirrel")
*/

/*
    Phi coeficient formula (https://www.statisticshowto.com/phi-coefficient-mean-square-contingency-coefficient/#:~:text=The%20Phi%20Coefficient%20is%20a,variable%20is%20a%20nominal%20variable.)


    Each index of the table could be expresed in binary form with two bits:

in the cases-count-table:           00  01  10  11
representation over the array:      0   1   2   3

*/

//import * as name from "module-name";

require('./squirel_journal.js')

/*
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}
*/

// better destructuring the input to make it more readable:

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
    (n01 + n11) * (n00 + n10));
}

// console.log(phi([76, 9, 4, 1])); // example

/*
    We would like to extract the received event from the JOURNAL 
    and form the count table 

    00 = no squirel, no event
    01 = no squirel, event
    10 = squirel, no event
    11 = squirel, event
*/

function tableFor(event, journal) {

    counter = [0, 0, 0, 0];

    journal.forEach((entry) => {
        let index = 0;
        const {
            events,
            squirrel
        } = entry;
        if (squirrel) index += 2
        if (events.includes(event)) index += 1
        counter[index] += 1
    });
    return counter;
}


function journalEvents(journal) {
    let dictionary = {}

    for (entry of journal) {
        const {
            events
        } = entry;
        events.forEach((e) => {
            if (!dictionary[e]) dictionary[e] = true;
        });
    }

    return Object.keys(dictionary)

}

function getCorrelation(journal) {

    const result = {};
    let max = {
        correlation: 0,
        name: 'none'
    };

    for (_event of journalEvents(journal)) {

        const table = tableFor(_event, journal);
        const correlation = phi(table);

        if (correlation > max.correlation) {
            max.name = _event
            max.correlation = correlation
        }
        result[_event] = correlation
    }
    return {
        result,
        possible: max
    }
}



/* 

    After some playing with the data, turns out that "peanuts" gets the correltaion of highest value
    and brushed teeth is the opposite correlated, it means the relation is inverted
    so this is an adaptation of the JOURNAL in pushes another "feature" when appears peanuts 
    and brushed teeth is not true (it doesn't brushed their theet)
    when int happens this new event is added and then calculated giving a perfect 1 means that 
    this match perfectly so it conlcudes that this is the "most correlated value"
*/

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}


module.exports = {
    phi,
    tableFor,
    getCorrelation
}
