import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import DataReducer from './DataReducer'
import { createForms } from 'react-redux-form';

const searchForm = {
  keyword: ''
}

export default (history) => combineReducers({
 ...createForms({
    search: searchForm
  }),
  router: connectRouter(history),
  data: DataReducer
})