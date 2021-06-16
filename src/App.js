import { Component } from 'react';
import contacts from './contacts.json';
import shortId from 'shortid';

import ContactForm from './Components/ContactForm';
import ContactsList from './Components/ContactList';
import Filter from './Components/Filter';

import st from './App.module.css';

class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortId.generate(),
      name,
      number,
    };

    if (this.findTheSameName(name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  findTheSameName = newName => {
    const { contacts } = this.state;
    const normalizedName = newName.toLowerCase();

    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;

    const filteredСontacts = this.getVisibleContacts();

    return (
      <div className={st.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onContactsFilter={this.changeFilter} value={filter} />
        <ContactsList
          contacts={filteredСontacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
