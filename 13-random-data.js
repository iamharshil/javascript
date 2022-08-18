const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString() {
    let length = 5;
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
}
function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
var item = {
    name: String(generateString()),
    number: Number(generateNumber()),
};

// const customer = require("./file/data.json");
// console.log(customer.address);

const fs = require("fs");

function jsonReader(filePath, cb) {
    fs.readFile(filePath, "utf-8", (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && (null, object);
        } catch (err) {
            return cb && cb(err);
        }
    });
}

//! To write data but remove older one.
// const newObject = {
//     name: "New Name",
//     order_count: 0,
//     address: "Pro box city",
// };
// fs.writeFile("./file/data.json", JSON.stringify(newObject, null, 2), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("Done");
// });

jsonReader("./file/data.json", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data.order_count += 1;
        fs.writeFile("./file/data.json", JSON.stringify(data), (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
});
