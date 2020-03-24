import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUsers } from '../actions/actions'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            data: null,
            users: []
        }
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUser({ id, name, email}) {
        return (
            <li className="list-group-item" key={id}>
                <span className="label label-default label-pill pull-xs-right">
                    <a href={email}>{email}</a>
                </span>
            </li>
        )
    }

    render() {
        return (
            <div>
                <h4>Email directory</h4>
                <ul className="list-group">
                    {
                        this.props.users.map(this.renderUser)
                    }
                </ul>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: bindActionCreators(fetchUsers, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
