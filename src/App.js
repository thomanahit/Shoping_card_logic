import React, { Component } from 'react';
class App extends Component {
  constructor(p) {
    super(p);
    this.state = {names: ['A']};
      }
      ComponentDidMount(){
        const choices = ['a', 'b', 'c', 'd'];
        setInterval(() => {
          const names = [... this.state.names];
          names.push(choices[Math.floor(Math.random() * 4)]);
          this.setState({names:names});
        }, 3 * 1000);
      }
 render() {
  const names = this.state.names.map(elem => {
    return (<p>{elem}</p>); });
    return (<div>{names}</div>);
  }
}
export default App;
