'use strict';

var Document = React.createClass({
	// define the list of props
	propTypes: {
		deckID: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			//value: 'default value'
		};
	},

	render: function() {
		var lorem = [];
		for (var i=0; i<100; i++) {
			lorem.push(React.DOM.p({key:i},'lorem ispum '+i));
		}

		return React.DOM.div({id:"openDocument"},
			this.props.deckID,
			lorem);
	}
});


