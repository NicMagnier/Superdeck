'use strict';

var DOM = React.DOM;

var SuperdeckApp = React.createClass({
	// define the list of props
	propTypes: {
	},

	getDefaultProps: function() {
		return {
			//value: 'default value'
		};
	},

	render: function() {
		return React.createElement('div', {id:"coreContainer"},
				React.createElement(MainHeader),
				React.createElement(Document, {deckID:'test'})
			);
	}
});

