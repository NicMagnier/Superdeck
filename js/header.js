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
		return React.DOM.div({id:"mainHeader"},

		// Repository Menu
		React.DOM.div({className:"headerSection headerSectionRepository"},
			React.createElement(RepositoryMenu)),

		// Logo
		React.DOM.div({className:"headerSection headerSectionTitle"}),

		// Action Menu
		React.DOM.div({className:"headerSection headerSectionMenu"},
			React.DOM.a(null, 'Practice'),
			React.DOM.a(null, 'Start Presentation')
			)
		);
	}
});


