import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
                User
                <button onClick={this.back.bind(this)}>111111</button>
            </div>
        );
    }

    back(){
        this.props.history.push('/')
    }
}


export default User;
