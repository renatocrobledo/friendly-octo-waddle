
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

let proxy;

{
  const favBook = Symbol('fav book');

  const obj = {
    name: 'Thomas Hunter II',
    age: 32,
    _favColor: 'blue',
    [favBook]: 'Metro 2033', // this is a private method!
    [Symbol('visible')]: 'foo'
  };

  const handler = {
    ownKeys: (target) => {
      const reportedKeys = [];
      const actualKeys = Reflect.ownKeys(target);

      for (const key of actualKeys) {
        if (key === favBook || key === '_favColor') {
          continue;
        }
        reportedKeys.push(key);
      }

      return reportedKeys;
    }
  };

  proxy = new Proxy(obj, handler);
}

//console.log(favBook)

console.log(Object.keys(proxy)); // [ 'name', 'age' ]
console.log(Reflect.ownKeys(proxy)); // [ 'name', 'age', Symbol(visible) ]
console.log(Object.getOwnPropertyNames(proxy)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertySymbols(proxy)); // [Symbol(visible)]
console.log(proxy._favColor); // 'blue'
