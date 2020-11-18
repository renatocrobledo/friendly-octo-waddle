
// https://dev.to/emnudge/lazy-iterators-from-scratch-2903

// constants
const TAX_RATE = 1.08875;
const BASE_SHIPPING = 8;
const BANK_BALANCE = 40; //

// all the items we want to buy
const itemPrices = [2, 4, 5, 9, 10, 13];
let currTotal = BASE_SHIPPING;

/*

// first approach, readable but not so optimized

const newPrices = itemPrices
    .map(n => n * TAX_RATE)
    .filter(n => {
        if (currTotal + n > BANK_BALANCE) return false;
        currTotal += n;
        return true;
    });

console.log(newPrices)

*/

// second approach more ptimized but not too readable
/*
const newPrices = [];

for (const n of itemPrices) {
    const priceWithTax = n * TAX_RATE;

    if (currTotal + priceWithTax > BANK_BALANCE) break;
    currTotal += priceWithTax

    newPrices.push(priceWithTax)
}

console.log(newPrices)

*/

// lazyIterator by hand, n the first approach map is passing over the entire array then filter agin to the entire 
// this lazyITerator will go over the whole functions for every element. like a "pipe" thorugh the methods

class LazyIter {
    constructor(arr) {
        this.list = arr
        this.funcs = [];
    }

    map(func) {
        this.funcs.push({type: 'map', func});
        return this;
    }
    filter(func) {
        this.funcs.push({type: 'filter', func});
        return this;
    }
    takeWhile(func) {
        this.funcs.push({type: 'take_while', func});
        return this;
    }

    // collect is a consumer, which means it no longer returns the iterator
    // collect runs through the array and applies all the functions in order
    collect() { 
        return [...this];
    }
    // This here is a [Symbol.iterator] method. If there exists a Symbol.iterator 
    // method that returns an iterator, the class/object is known as an iterable, 
    // which lets us use it in for loops and other areas where iterables can be used.

    // We can alternatively create a generator instead of the weird mess hand-implementing 
    // the iterator-protocol would require. That's what the * means. Any expression we yield 
    // will be an item in our iterator.
    // Generator as a computed property (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
    *[Symbol.iterator]() {
        // We are labeling the outer loop with outer: in order to break 
        // out of both loops from the innermost one without making things 
        // a little too complicated.
        outer:
        for (const item of this.list) {
            let val = item;

            for (const { type, func } of this.funcs) {
                if (type === 'map') {
                    // map will apply the modifier to all the items
                    val = func(val);
                    continue;
                }
                // filter would skip the outer loop from yielding the value, essentially filtering out the item
                if (type === 'filter') {
                    // if the returned value of our filter is not true is gonna skip to the next item it will be performed to the whole items
                    if (!func(val)) continue outer;
                    continue;
                }
                // takeWhile would break the outer loop, removing all subsequent items. that means when it encounters a Non True response, it will stop the next items
                if (!func(val)) break outer;
            }

            yield val;
        }
    }
}



const arrIter = new LazyIter(itemPrices); // use lazy iter library

const newPrices = arrIter
    .map(n => n * TAX_RATE)
    /*.filter(n => {
        if (currTotal + n > BANK_BALANCE) return false;
        currTotal += n;
        return true;
    })
    .takeWhile(n => {
        if (currTotal + n > BANK_BALANCE) return false;
        currTotal += n;
        return true;
    })*/
    .collect();

console.log(newPrices)