'use strict';

var MainHeader = React.createClass({
	// define the list of props
	propTypes: {
	},

	getDefaultProps: function() {
		return {
			//value: 'default value'
		};
	},

	render: function() {
		return React.createElement('div', {id:"mainHeader"}, "the menu");
	}
});


