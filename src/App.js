import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      users: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((list) => {
        this.setState({
          users: list,
          loading: false,
        });
      });
  }

  searchHandler = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const filteredUsers = this.state.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div className='App'>
        <input type='text' placeholder='Search by name' onChange={this.searchHandler} />

        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          filteredUsers.map((user) => (
            <div className='name' key={user.id} >
              
              <h1>{user.name}</h1>
              <h1>{user.email}</h1>
              <h1>{user.username}</h1>
            </div>
          ))
        )}
        {/* <h1>{this.state.users}</h1> */}
      </div>
    );
  }
}

export default App;
