import * as types from '../actions/ActionTypes'

const initialState = {
    isFetching: false,
    items: [],
    series: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.REQUEST_POSTS: 
            return Object.assign({}, state, {
                isFetching: true
            })
        case types.RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts
            })
        case types.VIEW_DETAILS: 
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts
            })
        case types.FETCH_SERIES:
            const selectedSeries = state.items.filter(item => {
                if(item.id == action.id){
                    return item.series
                }
            })
            return Object.assign({}, state, {
                series: selectedSeries
            })
        case types.FILTER_LIST:
            const filteredItems  = state.items.filter(item => {
               
                if((item.id.toString().indexOf(action.keyword) > -1) || (item.date_start.toString().indexOf(action.keyword) > -1) || (item.date_end.toString().indexOf(action.keyword) > -1)){
                    console.log(item)
                    return item
                }
            })
            return Object.assign({}, state, {
                items: filteredItems
            })
        default:
            return state
    }
}

export default reducer