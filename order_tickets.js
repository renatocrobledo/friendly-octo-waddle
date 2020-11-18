 /*
 Your previous Plain Text content is preserved below:
 
 Given a set of boarding passes, print out the cities in their travel order.
 Assume that each ticket has a starting city and destination. And that there are no cyclical trips.
 
 Input: [["LAX", "JFK"], ["ORD", "BOM"], ["SFO", "LAX"], ["JFK", "ORD"]];
 Expected order: SFO, LAX, JFK, ORD, BOM
 
*/

function orderTickets(tickets){

    const ending = tickets.map(([s,e]) => e);
    let dictionary = {}

    let startingTicket = null;
    
    if(tickets.length === 0) return '';

    for (element of tickets){
        const [start, end] = element; 
        if (! ending.includes(start)){
            if (startingTicket) return 'ups there is more than one starting point';
            startingTicket = element;
        }
        dictionary[start] = end;
    }


    const starting = Object.keys(dictionary);

    if (! startingTicket) { 
        
        const [firstStart] = starting; 

        startingTicket = [firstStart,dictionary[firstStart]]
    }

    let result = [...startingTicket]

    while (result.length <= tickets.length) {
        let last = result[result.length - 1]
        result.push(dictionary[last])
    }

    return result.join(', ');
}




module.exports = orderTickets;