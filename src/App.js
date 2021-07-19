import React, {Component} from 'react';
import InputForm from './components/InputForm';
import ContactList from './components/ContactsList';
import Filter from './components/Filter';
import shortid from 'shortid';
import './App.css';


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  };


  deleteContact = (contactId) => {
    this.setState(
      prevState => ({contacts: prevState.contacts.filter(contact => contactId !== contact.id)})
    )
  }

  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = { id: shortid.generate(), name, number };
    this.setState(
      prevState => ({ contacts: [contact, ...prevState.contacts] })
    );
  };

  filter = (event) => {
    this.setState(
      { filter: event.currentTarget.value
      }
    )
  }

  render() {
    const normalizedThisFilterState = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedThisFilterState),
    );
    return (
      <>
      <h1> Phonebook </h1>
      < InputForm onSubmit={this.formSubmitHandler}/>
      <Filter valueState={this.state.filter} filterByName={ this.filter}/>
      <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
     
      </>
      
    )
  }
}

export default App;
