import React from 'react';
import './ContactList.css';

const ContactList = ({contacts, deleteContact}) => (
  <ul className="contact-list">
          {contacts.map(contact => 
            <li className="contact-list-item" >
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button type="button" onClick={() => deleteContact(contact.id)}>Delete contact</button>
            </li>)
          }
          
        
</ul>
)

export default ContactList;