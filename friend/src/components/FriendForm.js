import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendForm extends React.Component {
  state = {
    friendDetail: {
        name: '',
        age: '',
        email: '',
    }
  };

  handleChange = e => {
    this.setState({
      friendDetail: {
        ...this.state.friendDetail,
        [e.target.name]: e.target.value
      }
    })
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state.friendDetail);
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', this.state.friendDetail)
      .then(res => {
          this.props.onCompletion();
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            value={this.state.friendDetail.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            value={this.state.friendDetail.age}
            onChange={this.handleChange}
          />
            <input
            type="email"
            name="email"
            value={this.state.friendDetail.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;