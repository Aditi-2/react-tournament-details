import * as types from './ActionTypes.js';

export const requestPost = () => ({
    type: types.REQUEST_POSTS
})
export const receivePosts = (json) => ({
    type: types.RECEIVE_POSTS,
    posts: json
})
export const fetchSeries = (id) => ({
    type: types.FETCH_SERIES,
    id: id
})
export const fetchData = () => {
    return dispatch => {
        dispatch(requestPost())
        return fetch(`https://gist.githubusercontent.com/idrinkritalin/fce0f5b884ffd813850ffb6919fe6bf7/raw/51007b611a52c427e34dbe9d40e91490e17c5248/tournaments.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}
export const getDataSeries = (id) => {
    return dispatch => {
        dispatch(fetchData());
        dispatch(fetchSeries(id));
    }
}
export const filterList = (keyword) => ({
    type: types.FILTER_LIST,
    keyword
})
export const viewdetails = (id) => ({
    id,
    type: types.VIEWDETAILS
});