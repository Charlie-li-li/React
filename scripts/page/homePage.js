import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Home = (props) => {
  /*
    routerDirection：是决定跳转路由的时候动画绘制的方向
    SSBack：路由回退时使用  ( history.go(-1) )
    SSForthcome：路由正常跳转时使用 browserHistory.push(url)
  */
  const { children, location, routerDirection } = props
  let routerJumpAnimation = ''
  switch (routerDirection) {
    case 'rightToLeft':
      routerJumpAnimation = 'SSForthcome'
      break
    case 'leftToRight':
      routerJumpAnimation = 'SSBack'
      break
    default:
  }

  return (
    <section className="page" >
      <ReactCSSTransitionGroup
        component="div"
        transitionName={routerJumpAnimation}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {React.cloneElement(children, {
          key: location.pathname
        })}
      </ReactCSSTransitionGroup>
    </section>
  )
}

Home.propTypes = {
  children: React.PropTypes.node,
  routerDirection: React.PropTypes.string,
  location: React.PropTypes.object
}

export default Home
