import React, {Component} from 'react';
// import logo from './logo.svg';
import Navbar from "./component/layout/Navbar";
import Users from "./component/users/Users";
import Search from "./component/users/search";
import Alert from "./component/layout/Alert";
import axios from 'axios'
import './App.css';

class App extends Component {

    state = {
        users: [],
        loading: false,
        alert: null
    };

    async componentDidMount() {
        this.setState({
            loading: true
        });

        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({
            users: res.data,
            loading: false
        });
        // console.log(this.state.users.length);
    }

    //Search Github users
    searchUsers = async (text) => {
        this.setState({
            loading: true
        });
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({
            users: res.data.items,
            loading: false
        });
    };
    //clear User From State
    clearUsers = () => this.setState({users: [], loading: false});

//  set Alert
    setAlert = (msg, type) => {
        this.setState({alert: {msg: msg, type:type}});
    }

    render() {
        const {users, loading} = this.state;
        return (

            <div className="App">
                <Navbar/>
                <div className='container'>
                    <br/>
                    <Alert alert={this.state.alert}/>
                    <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                    />
                    <br/>
                    <Users loading={loading} users={users}/>
                </div>
            </div>
        );
    }
}

export default App;
