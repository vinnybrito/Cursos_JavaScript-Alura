console.log(`Working with arrays`);
// const newYork = `New York`;
// const dallas = `Dallas`;
// const losAngeles = `Los Angeles`;

const list = new Array(
    `New York`,
    `Dallas`,
    `Los Angeles`
);

list.push(`Miami`); // Adding item to list

console.log("Possible destinations:");
// console.log(newYork, dallas, losAngeles);
console.log(list);


list.splice(1,1); // splice = Remove
console.log(list);
console.log(list[1], list[0]);