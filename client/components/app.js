import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const App = (props) => {
  const { children, handleClick, isLoggedIn } = props
  return (
    <div >
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" style={{ position: 'inherit', borderBottom: 'blue' }}>
      <div className="container" style={{ borderBottom: 'blue'}}>

             <div>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>Logout</a>
            </div>

             <div id="navbarCollapse" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>

      </div>

    </nav>
    <hr/>
    {children}
    </div>
  )
  // return (
  //   <div>
  //     <h1>owl</h1>
  //     <button className="btn btn-primary">YO HIT THIS</button>
  //     <nav>
  //       {
  //         isLoggedIn
  //           ? <div>
  //             {/* The navbar will show these links after you log in */}
  //             <Link to="/home">Home</Link>
  //             <a href="#" onClick={handleClick}>Logout</a>
  //           </div>
  //           : <div>
  //             {/* The navbar will show these links before you log in */}
  //             <Link to="/login">Loginnnn</Link>
  //             <Link to="/signup">Sign Up</Link>
  //           </div>
  //       }
  //     </nav>
  //     <hr />
  //     {children}
  //   </div>
  // )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(App))

/**
 * PROP TYPES
 */
App.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
