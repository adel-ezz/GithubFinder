import React, {Component} from 'react';
import UserItem from "./UserItem";
import Spenner from "../layout/Spinner";
import PropTyps from 'prop-types';

class Users extends Component {


    render() {

        if (this.props.loading) {
            return <Spenner/>
        } else {
            return (<div style={userStyle}>
                {
                    this.props.users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
            </div>);
        }
    }
}

Users.propTypes = {
    users: PropTyps.array.isRequired,
    loading: PropTyps.bool.isRequired
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}
export default Users;
