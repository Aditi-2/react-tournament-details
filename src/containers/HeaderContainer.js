import { connect } from 'react-redux'
import Header from '../components/Header/Header'


export default connect(
    (state, ownProps) => {
        return {posts: state.data}
    },
    null
)(Header)

