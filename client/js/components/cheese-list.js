import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/cheese';

var CheeseList = React.createClass({
	componentDidMount: function() {
		this.props.dispatch(actions.fetchCheeses());
	},
	render: function() {
		let cheeses = this.props.cheeses.map((cheese, index) => {
			return (
				<li key={index}>{cheese}</li>
			)
		});

		return (
			<div>
				<ul>
					{cheeses}
				</ul>
			</div>
		)
	}
});

const mapStateToProps = (state, props) => {
	return {
		cheeses: state.cheeses
	}
}

let Container = connect(mapStateToProps)(CheeseList);

module.exports = Container;