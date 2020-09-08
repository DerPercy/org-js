var assert = require("assert");
var fs = require("fs");

var chai = require('chai');
var chaiFiles = require('chai-files');
require('colors');
var jsdiff = require('diff');

chai.use(chaiFiles);

var expect = chai.expect;
var file = chaiFiles.file;
var dir = chaiFiles.dir;

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
 		var orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
   		headerOffset: 1,
   		exportFromLineNumber: false,
   		suppressSubScriptHandling: false,
   		suppressAutoLink: false
 		});
		//console.log(orgDocument);
 		//console.log(orgDocument.nodes[2]);
 		//console.log(orgHTMLDocument); // => { title, contentHTML, tocHTML, toc }
		var rendered = orgHTMLDocument.toString();
		fs.writeFileSync('./test/file_created.htm', rendered, { mode: 0o755 });

		// Check
		origContent = fs.readFileSync('./test/file_check.htm', 'utf8');
		checkContent = fs.readFileSync('./test/file_created.htm', 'utf8');
		//console.log(checkContent);
		//expect(origContent).to.equal(checkContent);
		var diff = jsdiff.diffChars(origContent, checkContent);

		diff.forEach(function(part){
		  // green for additions, red for deletions
		  // grey for common parts
		  var color = part.added ? 'green' :
		    part.removed ? 'red' : 'grey';
		  process.stderr.write(part.value[color]);
		});

		console.log();

		//expect(file('./test/file_.org')).to.equal(file('./test/file.org'));
		//expect(file('test/file_check.htm')).to.equal(rendered);

		//console.log(orgHTMLDocument.toString()) // => Rendered HTML
  });
});
