import React from 'react';
import axios from 'axios';
import './App.css';
import Githubian from './Githubian'

class App extends React.Component {
  state = {
      cardData: [],
      username: 'angelakennefick'
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/angelakennefick')
        .then(resp => {
            this.setState({
                cardData: resp.data
            });
        })
        .catch(err => {
            console.log(err);
        });
  }

  handleFormChange = (e)=>{
    this.setState({
        username: e.target.value
    });
}

  handleFormSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
        .then(resp=> {
            this.setState({
               cardData: resp.data
            })
        })
        .catch(err=>{
            console.log(err);
        });
}

  render() {
    return(<div className="App">
        <h1>Github User Cards</h1>

        <form onSubmit={this.handleFormSubmit}>
            <input value={this.state.username} onChange={this.handleFormChange}/>
            
        </form>
        {
          (this.state.username.length === 0)?<p>Loading</p>:<Githubian username={this.state.username} />
        }
    </div>);
  }
}

export default App;
