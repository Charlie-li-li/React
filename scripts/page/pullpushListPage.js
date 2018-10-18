import React, { Component, PropTypes } from 'react'
import SSTitle from '../containers/SSTitleContainer'
import PullPushListContainer from '../containers/PullPushListContainer'
import PersonListContainer from '../containers/PersonListContainer'


const propTypes = {
  onChangeRouterName: PropTypes.func
}

const listData = []
for (let i = 1; i < 50; i++) {
  listData.push(<li><span>行{i}</span><span>行{i}</span></li>)
}

class PullPushListPage extends Component {
  render() {
    return (
      <section className="page" >
        <center>
          <SSTitle
            title="SSPullPushList"
            titleLeft={{ iconName: 'angle-left' }}
          />
        </center>
        <PullPushListContainer>
          <PersonListContainer />
        </PullPushListContainer>
      </section>
    )
  }
}

PullPushListPage.propTypes = propTypes

export default PullPushListPage
