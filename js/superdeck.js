'use strict';

var DOM = React.DOM;

var SuperdeckApp = React.createClass({
	getInitialState: function() {
		return {
			deckID: this.getCurrentDocument()
		}
	},

	documentHasChanged: function() {
		this.setState({deckID: this.getCurrentDocument()});
	},

	getCurrentDocument: function() {
		return 'test';
	},

	render: function() {
		return React.createElement('div', {id:"coreContainer"},
				React.createElement(MainHeader),
				React.createElement(Document, {deckID:this.state.deckID})
			);
	}
});

