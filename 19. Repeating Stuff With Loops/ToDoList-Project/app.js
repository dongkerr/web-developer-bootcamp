const things = ["Collect Chicken Eggs", "Clean Litter Box"];
let thing = prompt("What would you like to do?").toLowerCase();
while (thing != "quit" && thing != "q") {
    if (thing === "list") {
        console.log("********");
        for (let i = 0; i < things.length; i++) {
            console.log(`${i}: ${things[i]}`);
        }
        console.log("********");
    } else if (thing === "delete") {
        const del = parseInt(prompt("Enter index of todo to delete"));
        if (!Number.isNaN(del)) {
            const deleted = things.splice(del, 1);
            console.log(`ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }
    }
    else if (thing === "new") {
        const add = prompt("Enter new todo");
        things.push(add);
        console.log(`${add} added to list`)
    }
    thing = prompt("What would you like to do?").toLowerCase();
}
console.log("OK, YOU QUIT THE APP");
