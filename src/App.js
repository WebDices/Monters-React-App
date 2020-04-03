import React, { Component }  from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';



class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monsters: [
        {
          name:'Frankestein',
          id: 'asc1'
        },
        {
          name:'Dracula',
          id: 'asr2'
        },
        {
          name:'Zombieee',
          id: 'as1w'
        }

      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => this.setState( {monsters: users }));
  }

  render(){
      return (
        <div className="App">
        <CardList name="Alex">
          <h1>Alex</h1>
        </CardList>
        { this.state.monsters.map(monster =>(
          <h1 key={monster.id}> {monster.name} </h1>
        ))}

        </div>
      );
    
  }  
}

export default App;
