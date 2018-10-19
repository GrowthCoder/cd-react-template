import { connect } from 'react-redux'
import Counter from '@src/components/counter'

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
// connect 从 UI 组件生成容器组件
export default connect(mapStateToProps)(Counter)