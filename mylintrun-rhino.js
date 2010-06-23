//print ( filename + ":" + (obj["line"] + 1) + ":" + (obj["character"] + 1) + ":" + obj["reason"] );
(function (a) {
 load('/home/anatoliy/.vim/fulljslint.js');
 var e, i, input;
 if (!a[0]) {
 print("Usage: jslint.js file.js");
 quit(1);
 }
 input = readFile(a[0]);
 if (!input) {
 print("jslint: Couldn't open file '" + a[0] + "'.");
 quit(1);
 }
 if (!JSLINT(input, {bitwise: true, eqeqeq: true, immed: true,
		 newcap: true, nomen: true, onevar: true, plusplus: true,
		 regexp: true, rhino: true, undef: true, white: true})) {
 for (i = 0; i < JSLINT.errors.length; i += 1) {
 e = JSLINT.errors[i];
 if (e) {
 print(a[0] + ':' + (e.line + 1) + ':' + e.character + ':' + e.reason);
 }
 }
 quit(2);
 } else {
	 print("jslint: No problems found in " + a[0]);
	 quit();
 }
}(arguments));
