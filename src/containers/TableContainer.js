import { connect } from 'react-redux'
import Table from '../components/Table/Table'
import { push } from 'connected-react-router'
import { fetchData, fetchSeries, filterList } from '../store/actions/action'

export default connect(
    (state, ownProps) => {
        return { posts: state.data }
    },
    dispatch => ({
        fetchData: () => {
      dispatch(fetchData())
    },
    showSeries: (id) => {
        dispatch(fetchSeries(id))
        dispatch(push(`/view-series/${id}`))
    },
    searchData: (search) => {
        dispatch(filterList(search.keyword))
    }
    })
)(Table) 