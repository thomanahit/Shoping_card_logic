
//NEW PROGRAM SHOPING CARD//

import React, {Component} from 'react';
import AddItem from './components/items';
import Header from './components/header';
import Card from './components/card'

class App extends Component {
  constructor(){
    super();
    this.state = {
      //text:"example"
    items:[]
    }
  }
  render() {
    console.log(this.state.items);
    return (
      <div className="App">
      <Header
      number={this.state.items.length}
       />
       <Card
       items = {this.state.items}
       deleteHandeler={(e)=> {
         let {items}= this.state;
         delete items[e.target.id];
         items=items.filter((elem)=>{
           return (elem !==undefined);
         });
         this.setState({items});
       }}
       />
      <AddItem
      addItemFunc={(data)=>{
        const {items} = this.state;
        items.push(data);
        this.setState({items});
      }}
      />
      </div>
);
    }

}
export default App;
