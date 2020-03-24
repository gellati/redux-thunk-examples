import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import * as actionCreator from './store/actions/actions'

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <div className="age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age up</button>
        <button onClick={this.props.onAgeDown}>Age down</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
