import { connect } from 'react-redux'
import Series from '../components/Series/Series'
import { push } from 'connected-react-router'
import { getDataSeries } from '../store/actions/action'

export default connect(
    (state, ownProps) => {
        return {posts: state.data}
    },
    dispatch => ({
    goToHome: (id) => {
            dispatch(push('/'))
    }
    })
)(Series)