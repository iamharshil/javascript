const str = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    hour12: true
});
const date = new Date();
console.log();
console.log("Current time is : " + str + " : "+ date.getMinutes() +" : " + date.getSeconds());
