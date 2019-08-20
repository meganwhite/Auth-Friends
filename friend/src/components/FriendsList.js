import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { findRepos } from 'jest-changed-files';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className="friends">
        {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {this.state.friends.length > 0 && (
          <div className="friends-wrapper">
                {this.state.friends.map((friend) => (
                  <div key={friend.id} className="friend">
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                  </div>
                ))}
            </div>
        )}
        <FriendForm onCompletion={this.getData}/>
    </div>
    );
  }
}

export default FriendsList;