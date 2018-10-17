import { connect } from 'react-redux'
import Counter from '@src/components/counter'

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter)