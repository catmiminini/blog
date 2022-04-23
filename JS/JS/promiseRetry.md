# promiseRetry

```js
function promiseRetry(fn, times, delay){
  return new Promise((resolve, reject) => {
      Promise.resolve(fn())
      .then(resolve)
      .catch(err => {
        if(times <= 0) {
          reject(err)
        } else {
          times --;
          setTimeout(()=>{
            attempt();
          }, delay)
        }
      })
    }
  })
}
```
