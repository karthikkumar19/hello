import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './header';
import Person from './Person/Person';
import Header from './header';


class App extends React.Component{
  state ={
    persons:[
      {id:'jfwufv' ,name:"karthik",age:"19"},
      {id:'jhajgs', name:"naveen",age:"15"},
      {id:'jaghsj', name:"kumar",age:"19"}
    ],
    title:""
  }

  deletepersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  
togglePersonHandler = ()=> {
  const doesShow  = this.state.showPerson;
  this.setState({showPerson: !doesShow})
}

display = () => {
  console.log("its working");
}
 Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
handleChange(event) {
  this.setState({title: event.target.value})
  console.log(this.state.title);
}

  render(){

let persons = null;

if(this.state.showPerson){
  persons=(
    <div>
    {
      this.state.persons.map((person , index)=>{
        return <Person click={() => this.deletepersonHandler(index)} name={person.name} age={person.age} key={person.id} />
      }
        )
    }
    </div>  
  )
}

    return(
      <div className="App">
        <Header click={this.display}/>
      <h1>Hi this is Hello World</h1>
      <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}></input>
    
      <button onClick={this.togglePersonHandler} >Touch this</button>
       {/* {persons} */}
       
      </div>
    );
    // return React.createElement('div',{className:'App'},"Hello world");
  }
}

export default App;
