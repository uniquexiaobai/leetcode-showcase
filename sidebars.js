const guide = require('./guide');

console.log(guide.problems[0]);

module.exports = {
	docs: {
		Docusaurus: ['doc1', ...guide.problems],
	},
};
