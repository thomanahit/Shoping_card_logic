import React from 'react';

//export default
// class Header extends React.Component {
// render() {
//   return (
//     <p> I have {this.props.number} items </p>
//
//   );
// }
// }

 const Header = ({number}) => {
  return(
    <p> I have {number} items </p>
  );
}
export default Header;
