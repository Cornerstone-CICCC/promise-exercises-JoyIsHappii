/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise.then((value) => {
      resolve(transformer(value));
    }).catch((error) => {
      reject(error);
    });
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise
    .then(val => {
      const num = typeof val === 'number' ? val : Number(val);
      if (typeof num !== 'number' || isNaN(num)) {
        return Promise.reject(`Cannot convert '${val}' to a number!`);
      }
      return num * num;
    });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch(() => 0);
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(
    value => Promise.reject(value),
    error => Promise.resolve(error)
  );
    
    
   
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};