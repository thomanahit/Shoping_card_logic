import React from 'react';

const p_styling = {
  display:'inline'
};

export default
class Card extends React.Component {
  render(){
    const content = this.props.items.map((elem, index) =>{
      console.log(elem);
      console.log(index);
      return (
        <div key={index}>
                <p style = {p_styling} > {index+1},  name: {elem.name}, price: {elem.price}</p>
        <input type = "button" value="Delete" onClick={this.props.deleteHandeler} id={index}/>
        </div>
      )


    });
    return( <div>
          {content}
    </div>
    )
  }
}
