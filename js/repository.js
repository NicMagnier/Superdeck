'use strict';

var RepositoryMenu = React.createClass({
	propTypes: {
	},

	getInitialState: function() {
		return {
			currentDeckID: 'toto'
		};
	},

	render: function() {
		return React.DOM.div(null, 'repository menu');
	}
});


