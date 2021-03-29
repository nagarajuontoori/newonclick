import react, { Component } from 'react';


class File1 extends Component{
  render(){
    return(
      <div>
        <input type="text"  onChange={this.props.mychange1}/>
      </div>
    );
  }
}
    
export default File1;