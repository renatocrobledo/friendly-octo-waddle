
const {
    phi,
    tableFor,
    getCorrelation
} = require('../correlation.js')

describe("whole result", () => {

    test('if it work correctly for pizza event', () => {
        expect(tableFor('pizza', JOURNAL)).toEqual([76, 9, 4, 1])
    });

    it("should check for JOURNAL existence and this to be an Object", () => {
        expect(typeof (JOURNAL)).toEqual("object")
    });

    it("should return exact correlation, so equal to 1", () => {
        expect(phi(tableFor("peanut teeth", JOURNAL))).toEqual(1);
    });

    test('whole correlation ', () => {

        const expected = {
            "possible": {
                "correlation": 1,
                "name": "peanut teeth"
            },
            "result": {
                "beer": -0.05230657809659414,
                "bread": -0.07575540190785703,
                "brushed teeth": -0.3805211953235953,
                "brussel sprouts": -0.05230657809659414,
                "candy": 0.12964074471043288,
                "carrot": 0.014097096860865023,
                "cauliflower": -0.08084520834544433,
                "computer": 0.06859943405700354,
                "cycling": -0.08084520834544433,
                "dentist": -0.036563621206356534,
                "exercise": 0.06859943405700354,
                "ice cream": -0.08084520834544433,
                "lasagna": 0.08084520834544433,
                "lettuce": -0.07043451251197408,
                "nachos": -0.07043451251197408,
                "peanut teeth": 1,
                "peanuts": 0.59026798116852,
                "pizza": 0.06859943405700354,
                "potatoes": -0.08574929257125442,
                "pudding": -0.06482037235521644,
                "reading": 0.11068280537595927,
                "running": -0.09050203323329065,
                "spaghetti": 0.242535625036333,
                "television": -0.08084520834544433,
                "touched tree": -0.08084520834544433,
                "weekend": 0.13719886811400708,
                "work": -0.13719886811400708
            }
        }


        expect(getCorrelation(JOURNAL)).toEqual(expected)
    });
});
