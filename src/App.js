import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {

      monsters: [],
      searchField: ''
      
    };
  }

// if you have to make some API calls like this, 
// best to put them under a lifecycle method like componentDidMount
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(

        () => 
        {
        return {monsters: users}
        },

        () => 
        {
          console.log(this.state)
        }

      ))
  }

  render() {

    const filteredMonsters = this.state.monsters.filter(
      (monster) => {
        return monster.name.toLowerCase().includes(this.state.searchField);
      });

    return (
      <div className="App">
        
        <input 
          className='search-box'
          type='search'
          placeholder='monster name'
          onChange={(event) => {

            const searchField = event.target.value.toLowerCase()
            this.setState(() => {
              return { searchField }
            })
            }}
        />

        {
        filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })
        }
        
      </div>
    );

  }
}

//setState creates a different object for state. 
//This causes React to rerender with the new state object in place
export default App;