import { connect } from 'react-redux'
import Counter from '@src/components/counter'

// 将数据传递给UI组件的props
const mapStateToProps = state => {
  return {
    counter: state.counter 
  }
}
// connect 从 UI 组件生成容器组件
// UI组件负责纯展示，容器组件负责逻辑，将数据传给UI组件
export default connect(mapStateToProps)(Counter)