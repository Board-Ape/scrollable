import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import CardContainer from './CardContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      previousY: 0,
      isScrolling: false
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    Axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        const posts = response.data.slice(0,10)
        this.setState({
          posts 
        })
      })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    window.clearTimeout(this._handleScroll)
    this.setState({ isScrolling: true })
    this._handleScroll = setTimeout(() => {
      this.setState({isScrolling: false})
    }, 60)
  }

  _handleScroll = null

  render() {
    console.log(this.state.isScrolling)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Scrollable</h1>
        </header>
        <CardContainer 
          posts={this.state.posts}
          isScrolling={this.state.isScrolling}
          handleScroll={this.handleScroll}
        />
      </div>
    );
  }
}

export default App;
