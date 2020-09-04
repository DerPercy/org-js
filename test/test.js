var assert = require("assert");
var fs = require("fs");
//require.paths.push("../src/org-js/");
//var Parser            = require("../lib/org.js").Parser;
//var Node              = require("../lib/org.js").Node;
//var HtmlTextConverter = require("../lib/org.js").HtmlTextConverter;
var org = require("../lib/org.js");

describe("Parser", function() {
  describe("Parser", function() {

		orgCode = fs.readFileSync('./test/file.org', 'utf8');

 		var parser = new org.Parser();
 		var orgDocument = parser.parse(orgCode);
 		/*var orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
   		headerOffset: 1,
   		exportFromLineNumber: false,
   		suppressSubScriptHandling: false,
   		suppressAutoLink: false
 		});*/
		console.log(orgDocument);
 		//console.log(orgDocument.nodes[2]);
 		//console.log(orgHTMLDocument); // => { title, contentHTML, tocHTML, toc }
		//console.log(orgHTMLDocument.toString()) // => Rendered HTML
  });
});
