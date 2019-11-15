import React, {Component} from 'react';

class Search extends Component {

    state = {
        text: ''
    };
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter Somthing', 'danger');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({
                text: ''
            });
        }

    };

    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <br/>
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        title="text"
                        name="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="Search Uses......."
                    />
                    <br/>
                    <input type="submit"
                           className="btn btn-dark btn-block"
                    />
                </form>
                <br/>
                {showClear ? <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> : ''}
            </div>
        );
    }
}

export default Search;
