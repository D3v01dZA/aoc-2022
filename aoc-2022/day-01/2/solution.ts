let fs = require('fs');
let input = fs.readFileSync("input.txt", {encoding:'utf8', flag:'r'});

let elves = [0];
let index = 0;
input.split(/\n/).forEach(line => {
	if (line.trim().length === 0) {
		index++;
		elves[index] = 0;
	} else {
		elves[index] = elves[index] + parseInt(line.trim());
	}
});

let most = [0, 0, 0];
elves.forEach(elf => {
	if (most[2] <= elf) {
		most[0] = most[1];
		most[1] = most[2];
		most[2] = elf;
	} else if (most[1] <= elf) {
		most[0] = most[1];
		most[1] = elf;
	} else if (most[0] <= elf) {
		most[0] = elf;
	}
});

let total = most.reduce((acc, next) => acc + next, 0);
console.log(total);
