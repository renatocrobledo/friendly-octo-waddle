
const orderTickets = require('../order_tickets')

describe('orderTickets', () => {
    
/**
 * 
 *  Input: [["LAX", "JFK"], ["ORD", "BOM"], ["SFO", "LAX"], ["JFK", "ORD"]];
    Expected order: SFO, LAX, JFK, ORD, BOM

 */

    it('should order the received ticket', () => {

        const tickets = [["LAX", "JFK"], ["ORD", "BOM"], ["SFO", "LAX"], ["JFK", "ORD"]];

        expect(orderTickets(tickets)).toEqual('SFO, LAX, JFK, ORD, BOM');

    });

    it('should return error message if there is two starting points', () => {

        const tickets = [["JFK", "LAX",], ["JFK", "ORD"]];

        expect(orderTickets(tickets)).toEqual('ups there is more than one starting point');

    });


    it('should return empty string if the received array has no length', () => {

        const tickets = [];

        expect(orderTickets(tickets)).toEqual('');

    });
    

    it('should return starting even if is the same', () => {

        const tickets = [["JFK", "JFK",]];

        expect(orderTickets(tickets)).toEqual('JFK, JFK');

    });


    it('should return starting and end for one ticket', () => {

        const tickets = [["JFK", "LAX",]];

        expect(orderTickets(tickets)).toEqual('JFK, LAX');

    });
});