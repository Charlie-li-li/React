import { connect } from 'react-redux'
import { SSPullPushList } from 'ss-mobile-components'
import * as Actions from '../actions/personAction'

const mapStateToProps = () => ({
  pullText: '上拉就可以刷新',
  pushText: '拖拽就可以翻页'
})

const mapDispatchProps = dispatch => ({
  onPush: () => {
    return new Promise((resolve, reject) =>
      dispatch(Actions.mockPush(resolve, reject)))
  },
  onPull: () => {
    return new Promise((resolve, reject) =>
      dispatch(Actions.mockPull(resolve, reject)))
  }
})

export default connect(mapStateToProps, mapDispatchProps)(SSPullPushList)
