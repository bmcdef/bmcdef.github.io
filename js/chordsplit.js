const chordSplit = (line) => {
	// let lineSplit = line;
	if (line) {
		// console.log(line);
		const addChordLine = (b,x) => {
			let cl = "";
			for ( var m=0; m<x; m++ ) {
				cl+= " ";
			}
			cl+= b;
			return cl;
		};
		let _a=0, _b=0, _c=0;
		let chordLine = "";
		line = line
		.replace(/\{\[(.*?)\]\}/g,function(a,b,c){
			var x = c-_a-_b-_c;
			chordLine+= addChordLine(b,x);
			_a = a.length;
			_b = b.length;
			_c = c;
			return "";
		});
		line = `${chordLine}\n${line}\n`;
		// console.log(line)
	}
	return line;
};

const lineSplit = (li,limit) => {
	let res = "";
	if (li.length > limit) {
		let max = li.length/2;
		let nr = [];
		let no = {};
		li.replace(/\s/g,(a,b,c)=>{
			let x = Math.abs(b-max);
			nr.push(x);
			no[x] = b;
			return a;
		});
		let min = Math.min(...nr);
		let p = no[min];
		let [li1,li2] = [ li.slice(0, p).trim(), li.slice(p).trim() ];
		res+= chordSplit(li1);
		res+= chordSplit(li2);
		// console.log(li);
	} else {
		// console.log(li);
		res+= chordSplit(li);
	}
	return res;
};