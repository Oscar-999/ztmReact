const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});
//  Reject is to unsure error handling
myPromise
  .then((value) => console.log(value))
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));
