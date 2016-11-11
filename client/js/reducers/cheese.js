import cheese from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

const reducer = (state=initialState, action={}) => {
	
	switch (action.type) {

		case cheese.FETCH_CHEESES_REQUEST:
			return Object.assign({}, state, {loading: true});

		case cheese.FETCH_CHEESES_SUCCESS:
			return Object.assign({}, state, {loading: true, error: null, cheeses: action.cheeses});

		case cheese.FETCH_CHEESES_ERROR:
			return Object.assign({}, state, {loading: false, error: action.error});

		default:
			return state;
	}
}

module.exports = reducer;