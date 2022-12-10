let fs = require('fs');
let input = fs.readFileSync("input.txt", {encoding:'utf8', flag:'r'});


let mappings = {
	"X": "A", // Rock
	"Y": "B", // Paper
	"Z": "C"  // Scissors
}

let winners = {
	"A": "C", // Rock > Scissors
	"B": "A", // Paper > Rock
	"C": "B"  // Scissors > Paper
}

let points = {
	"A": 1,
	"B": 2,
	"C": 3
}

let all = input.split(/\n/).map(line => {
	let opMove = line[0];
	let myMove = mappings[line[2]];

	let myPoints = points[myMove];
	if (myMove === opMove) {
		// Draw
		return myPoints + 3;
	}
	if (opMove === winners[myMove]) {
		// Win
		return myPoints + 6;
	}
	// Lose
	return myPoints + 0;
});

console.log(all.reduce((acc, next) => acc + next, 0));
