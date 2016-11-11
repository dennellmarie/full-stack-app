import fetch from 'isomorphic-fetch';

const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST'; //instruction
const fetchCheesesRequest = () => {
	return {
		type: FETCH_CHEESES_REQUEST
	}
}

const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
const fetchCheesesSuccess = (cheeses) => {
	return {
		type: FETCH_CHEESES_SUCCESS,
		cheeses: cheeses
	}
}

const FETCH_CHEESES_ERROR = 'FETCH_ERROR';
const fetchCheesesError = (error) => {
	return {
		type: FETCH_ERROR,
		error: error
	}
}

const fetchCheeses = () => {
	return (dispatch) => {
	const url = "/cheeses";
	dispatch(fetchCheesesRequest());
	return fetch(url).then((response) => {
		if (response.status < 200 || response.status >= 300) {
                const error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response.json();
		}).then((data) => { 
            return dispatch(
                fetchCheesesSuccess(data) 
            );
        }).catch((error) => {
        	return dispatch(
        		fetchCheesesError(error) 
        	);
        })
    }
}


exports.FETCH_CHEESES_REQUEST = FETCH_CHEESES_REQUEST;
exports.fetchCheesesRequest = fetchCheesesRequest;

exports.FETCH_CHEESES_SUCCESS = FETCH_CHEESES_SUCCESS;
exports.fetchCheesesSuccess - fetchCheesesSuccess;

exports.FETCH_CHEESES_ERROR = FETCH_CHEESES_ERROR;
exports.fetchCheesesError = fetchCheesesError;

exports.fetchCheeses = fetchCheeses;
