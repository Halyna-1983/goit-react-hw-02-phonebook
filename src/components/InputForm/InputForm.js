import React, {Component} from 'react';
// import { v4 as uuidv4 } from 'uuid';
import shortid from 'shortid';

class InputForm extends Component {
    state = {
        contacts: [],
        name: ' ',
        tag: ' ',  
        community: 'friends',
      };
      
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

      handleChange = event => {
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.name);
        // console.log(e.currentTarget.value);
    
        const {name, value} = event.currentTarget

        this.setState({
            [name]: value,
    });
      }
    
      // handleNameChange = event => {
      //   this.setState({ name: event.currentTarget.value });
      // }
    
      // handleTagChange = event => {
      //   this.setState({ tag: event.currentTarget.value })
      // }

     handleSubmit = e => {
        e.preventDefault();
    
        this.props.onSubmit(this.state);

        this.reset();
      }

      reset = () => {
        this.setState({ name: '', tag: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name 
          <input 
          type="text" 
          name="name"
          value={this.state.value} 
          onChange={this.handleChange}
          id={this.nameInputId} />
        </label>

        <label htmlFor={this.tagInputId}>
          Tag 
          <input 
          type="text" 
          name="tag"
          value={this.state.value} 
          onChange={this.handleChange}
          id={this.tagInputId}/>
        </label>
        <br />
<label>
    <input 
    type="radio" 
    name="" 
    value="family" 
    onChange={this.handleChange}
    checked={this.state.community === 'family'} 
    />family
</label>

<label>
    <input 
    type="radio" 
    name="" value="friends" 
    onChange={this.handleChange}
    checked={this.state.community === 'friends'}
    />friends
</label>

<label>
    <input 
    type="radio" 
    name="" value="job" 
    onChange={this.handleChange}
    checked={this.state.community === 'job'}
    />job
</label>
        
    <br />

        <button type="submit">Add</button>
      </form>
        )
    }
}

export default InputForm;