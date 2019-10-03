const guide = require('./guide');

console.log(guide.problems[0]);

module.exports = {
	docs: {
		All: ['doc1', ...guide.problems],
	},
};
