import React, {Component} from 'react';
import InputForm from './components/InputForm';

import './App.css';
// import InputForm from './components/InputForm';

class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // tag: '',  
  };

formSubmitHandler = data => {
  console.log(data);
}

  // handleChange = e => {
  //   // console.log(e.currentTarget);
  //   // console.log(e.currentTarget.name);
  //   // console.log(e.currentTarget.value);

  //   this.setState({
  //     [e.currentTarget.name]: e.currentTarget.value,
  //   })
  // }

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // }

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value })
  // }

  // handleSubmit = e => {
  //   e.preventDefault();

  //   console.log(this.state);
  // }

  render() {
    return (
      <>
      <h1> Phonebook </h1>
      < InputForm onSubmit={this.formSubmitHandler}/>
    {/* <InputForm contacts={this.state.contacts} name={this.state.name} />
    <input type="text" name={this.state.name}
    onChange={this.handleInputChange} /> */}

      {/* <form onSubmit={this.handleSubmit}>
        <label>
          Name 
          <input 
          type="text" 
          name="name"
          value={this.state.value} 
          onChange={this.handleChange}/>
        </label>

        <label>
          Tag 
          <input 
          type="text" 
          name="tag"
          value={this.state.value} 
          onChange={this.handleChange}/>
        </label>

        <button type="submit">Add</button>
      </form> */}
      </>
      
    )
  }

    
      
  
}

export default App;
