import React from 'react';
export default


class AddItem extends React.Component {

constructor(){
  super();
  this.state = {
    //text:"example"
    text:""
  }
}
changeHandler = (evn) => {
  this.setState({
    text: evn.target.value
  });
}

clickHandler = () => {
  console.log(this.state.text);
  const {text} = this.state;
  const name = text.split(',')[0];
  const price = text.split(',')[1];
  const data = {
    name,
    price
  }
//console.log(this.state.text);
this.setState({
  text:""
});
this.props.addItemFunc(data);
  }

  render() {
    return(
      <div>
      <input type = 'text' value={this.state.text}
      onChange={this.changeHandler}
      />
      <input type = 'button' value="Add"
      onClick={this.clickHandler}/>
      </div>
    )
    }
  }
