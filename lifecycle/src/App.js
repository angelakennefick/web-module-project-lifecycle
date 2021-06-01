import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './UserCard.js';

class App extends React.Component {
  state = {
      users: [],
      name: "angelakennefick"
  };

  componentDidMount() {
    console.log("component did mount")
    axios.get('https://api.github.com/users/angelakennefick')
        .then(resp => {
            this.setState({
                ...this.state,
                cardData: resp.data
            });
        })
        .catch(err => {
            console.log(err);
        });
  };

  handleFormChange = (e)=>{
    this.setState({
        name: e.target.value
    });
   
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.name}`)
        .then(resp=> {
            this.setState({
              ...this.state,
               cardData: resp.data
            })
        })
        .catch(err=>{
            console.log(err);
        });
  };

  render() {
    return(<div className="App">
        <h1>Github User Cards</h1>
        <UserCard  users={this.state.users}/>
        <form onSubmit={this.handleFormSubmit}>
            <input 
            value={this.state.name} 
            onChange={this.handleFormChange}
            placeholder= "Username"
            />
            <button>Get Info</button>
        </form>
    </div>);
  }
};
export default App;
