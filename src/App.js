import React, {Component, Fragment} from 'react';
// import logo from './logo.svg';
import Navbar from "./component/layout/Navbar";
import Users from "./component/users/Users";
import User from "./component/users/User";
import Search from "./component/users/search";
import Alert from "./component/layout/Alert";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./component/pages/About";
import axios from 'axios'
import './App.css';

class App extends Component {

    state = {
        users: [],
        loading: false,
        user: {},
        repos:[],
        alert: null
    };

    async componentDidMount() {
        this.setState({
            loading: true
        });
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({
            users: res.data,
            loading: false
        });

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
    ///==== Git Single GitHub User
    getUser = async (username) => {
        this.setState({loading: true});
        const resSingle = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({
            user: resSingle.data,
            loading: false
        });
    }
    /////Get Users Repos
    // getUserRepos = async (username) => {
    //     this.setState({loading: true});
    //     const resSingleRepos = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     this.setState({
    //         repos: resSingleRepos.data,
    //         loading: false
    //     });
    // }

//  set Alert
    setAlert = (msg, type) => {
        this.setState({alert: {msg: msg, type: type}});
        setTimeout(() => this.setState({alert: null}), 3000);
    }

    render() {

        const {users, loading, user,repos} = this.state;
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <div className='container'>
                        <br/>
                        <Alert alert={this.state.alert}/>
                        <Switch>
                            <Route exact path='/' render={props => (
                                <Fragment>
                                    <Search
                                        searchUsers={this.searchUsers}
                                        clearUsers={this.clearUsers}
                                        showClear={users.length > 0 ? true : false}
                                        setAlert={this.setAlert}
                                    />
                                    <br/>
                                    <Users loading={loading} users={users}/>
                                </Fragment>
                            )}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/user/:login' render={props => (
                                <User {...props} repos={repos} getUser={this.getUser} user={user} loading={loading}/>
                            )}/>
                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
