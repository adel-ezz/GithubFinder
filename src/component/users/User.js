import React, {Component, Fragment} from 'react';
import Spenner from "../layout/Spinner";
import {Link} from "react-router-dom";


class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        // console.log(this.props.user);
    }

    render() {
        const {name, avatar_url, location,following, bio, blog, login, company,html_url, followers, public_repos, public_gists, hireable} = this.props.user;
        console.log(this.props.user);
        const {loading} = this.props;


        if (this.props.loading) return <Spenner/>
        return <Fragment>
            <Link to="/" className='btn btn-light'>Back To Search</Link>
            Hireable:{' '}
            {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}
            <div className="card grid-2" style={{ padding:'10px 2px'}}>
                <div className="text-center">
                    <img src={avatar_url} className="rounded-circle" alt style={{width: '150px'}}/>
                    <h1>{name}</h1>
                    <p>Location:{location}</p>
                </div>

                <div>
                    {bio && <div style={{float:'left'}} className="text-center" >
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>

                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>UserName:</strong>{login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company:</strong>{company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>WebSite:</strong>{blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>}

                </div>
            </div>
            <div className="card text-center">
                <button className="badge badge-danger">Followers: {followers}</button>
                <button className="badge badge-primary">following: {following}</button>
                <button className="badge badge-success">public_repos: {public_repos}</button>
                <button className="badge badge-dark">public_gists: {public_gists}</button>
            </div>
        </Fragment>


    }
}

export default User;
