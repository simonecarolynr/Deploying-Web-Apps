import axios from 'axios';

export const INITIAL_LOAD = 'INITIAL_LOAD';
export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAILURE = 'FETCHING_QUOTE_FAILURE';

export const initialLoad = () => dispatch => {
    axios
    .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => {  
        let randomQuote = res.data[0];

        dispatch({ type: INITIAL_LOAD, payload: randomQuote});
    })
}

export const getQuote = () => dispatch => {

    dispatch({ type: FETCHING_QUOTE_START });

    axios
    .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => {  
        let randomQuote = res.data[0];

        dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: randomQuote});
    })
    .catch(err => {
        console.log(err)
              
        dispatch({
            type: FETCHING_QUOTE_FAILURE,
            payload: `${err.statusText} with response code ${err.status}`
        })
    })
};
