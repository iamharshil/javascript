// concept: same as real life i promise to do something

// complete = resolve, didn't = reject

let p = new Promise((resolve, reject) => {
    // let a = 1 + 1;
    let a = 1 + 2;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

// then = resolve, catch = reject
p.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
});

// promise is to solve callback functions

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded");
});

// to call all the promise when they are completed ir etc
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
    (messages) => {
        console.log(messages);
    }
);
// return as soon as one is done
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
    (message) => {
        console.log(message);
    }
);
