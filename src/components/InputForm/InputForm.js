import React, {Component} from 'react';
// import { v4 as uuidv4 } from 'uuid';
import shortid from 'shortid';
import './InputForm.css';

class InputForm extends Component {
    state = {
        name: ' ',
        number: ' ',  
        community: 'friends',
      };
      
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

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
        this.setState({ name: '', number: '' })
    };

    render() {
        return (
        <form  onSubmit={this.handleSubmit}>
          <label className="input-form" htmlFor={this.nameInputId}>
          Name 
          <input 
          type="text" 
          name="name"
          className="label"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.value} 
          onChange={this.handleChange}
          id={this.nameInputId}
          placeholder="Input name" />
        </label>

        <label className="input-form" htmlFor={this.numberInputId}>
          Number 
          <input 
          type="tel"
          name="number"
          className="label"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.value} 
          onChange={this.handleChange}
          id={this.numberInputId}
          placeholder="Input number"/>
        </label>
        <br />
        
<container className="radio">
<label className="radio-form">
    <input 
    type="radio" 
    name="" 
    
    value="family" 
    onChange={this.handleChange}
    checked={this.state.community === 'family'} 
    />family
</label>

<label className="radio-form">
    <input 
    type="radio" 
    name="" 
    value="friends" 
    onChange={this.handleChange}
    checked={this.state.community === 'friends'}
    />friends
</label>

<label className="radio-form">
    <input 
    type="radio" 
    name="" 
    value="job" 
    onChange={this.handleChange}
    checked={this.state.community === 'job'}
    />job
</label>
        
    <br />

        <button type="submit" className="button">Add contact</button>
        </container>
      </form>
        )
    }
}

export default InputForm;