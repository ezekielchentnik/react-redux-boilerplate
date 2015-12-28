import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

function requestData() {
    return {
        type: types.REQUEST_DATA,
        payload: null
    };
}

function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        payload: data
    };
}

function receiveError(data) {
    return {
        type: types.RECEIVE_ERROR,
        payload: data
    };
}

export default function fetchData(url) {

    return function(dispatch) {

        dispatch(requestData());

        return fetch({

            url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'

        }).then(function(response) {

            dispatch(receiveData(response.data));

        }).catch(function(response) {

            dispatch(receiveError(response.data));

        });
    };
    
};
