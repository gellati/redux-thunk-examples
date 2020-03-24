import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNewTodo } from './actions/todos.actions'
import { getAllUsers, addUser } from './actions/users.actions'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: '',
      newUser: {
        name: '',
        username: '',
      },
      users: []
    }
  }

  componentDidMount() {
    this.props.getAllUsers()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewTodo(this.state.newTodo)
  }

  handleAddUser = (event) => {
    event.preventDefault()
    this.props.addUser(this.props.users, this.state.newUser)
  }

  handleNameChange = (event) => {
    event.preventDefault
    this.setState({
      newUser: { name: event.target.value }
    })
  }

  handleUserNameChange = (event) => {
    event.preventDefault
    this.setState({
      newUser: { username: event.target.value }
    })
  }

  render() {
    let todosList = this.props.todos
      .map(( todo, i) => {
        return (
          <li key={i}>{todo}</li>
        )
      })
    let userList = this.props.users
      .map(( user, i) => {
        return (
          <li key={i}>{user.name}</li>
        )
      })
    return(
      <div className="App">
        <h2>Add todo</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={(event) => this.setState({ newTodo: event.target.value})}
          />
          <button type="submit">Submit</button>
        </form>
        <h2>List of todos</h2>
        <ul>{todosList}</ul>

        -----------------------------

        <h2>Add user</h2>
        <form onSubmit={this.handleAddUser}>
          Name
          <input
            type="text"
            value={this.state.newUser.name}
            onChange={this.handleNameChange}
          />
          <br/>
          Username
          <input
            type="text"
            value={this.state.newUser.username}
            onChange={this.handleUserNameChange}
          />
          <br/>
          <button type="submit">Submit</button>
        </form>

        <h2>List of users</h2>
        <ul>{userList}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewTodo: bindActionCreators(addNewTodo, dispatch),
    getAllUsers: bindActionCreators(getAllUsers, dispatch),
    addUser: bindActionCreators(addUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
