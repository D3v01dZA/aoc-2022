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

console.log(Math.max.apply(0, elves));
