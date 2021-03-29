
import react,{ Component } from 'react';
import './App.css';

import File1 from './File1.jsx';
import File2 from './File2';

class  App extends Component {
constructor(){
super()
this.state = {
  name:'',
}
}
mychange =(Event)=>{
  this.setState({name: Event.target.value}); 
}
  render(){
  return (
    <div className="App">
    <File1 data={this.state.name}
    mychange1 = {this.mychange}
     />
     <File2 dst ={this.state.name}
     mydata1 = {this.mychange}
    
     />
    </div>
  );
}
}

export default App;
