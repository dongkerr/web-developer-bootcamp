const fs = require('node:fs');
const folderName = process.argv[2] || "Project"

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("in the callback")
//   if (err) throw err;
// }); 

// fs.mkdirSync("Cats");
// console.log("i come after mkdir in the file!!!");
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, "");
    fs.writeFileSync(`${folderName}/app.js`, "");
    fs.writeFileSync(`${folderName}/style.css`, "");
} catch (e) {
    console.log("something went wrong!!!");
    console.log(e);
}