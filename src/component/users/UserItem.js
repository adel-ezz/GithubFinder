import React from 'react';
import {Link} from "react-router-dom";

const UserItem = (props) => {
    // state = {
    //     id: "id",
    //     login: "mojombo",
    //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo"
    // };


    // const {login, avatar_url, html_url} = props.user;
    return <div className="card text-center">
        <img
            src={props.user.avatar_url}
            className="rounded-circle"
            alt='text'
            target="_blank"
            style={{width: '60px', margin: "0 auto"}}
        />
        <h3>{props.user.login}</h3>
        <div>
            <Link to={`/user/${props.user.login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
    </div>;

}

export default UserItem;
