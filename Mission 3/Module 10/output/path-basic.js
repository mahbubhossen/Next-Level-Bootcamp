const path = require("path");
console.log("current file Info : \n ");
console.log("file name : ", __filename);
console.log("directory : ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/mahbub/doucments/nextLevel.pdf";
console.log("analyzing path : ", filePath, "\n");
console.log("Directory : ", path.dirname(filePath));
console.log("Base name : ", path.basename(filePath));
console.log("File Extension : ", path.extname(filePath));
console.log("File Name : ", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object : " , parsed)

console.log("\n" + "-".repeat(50) + "\n");

console.log("formatted path : ", path.format(parsed))