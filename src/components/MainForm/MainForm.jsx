import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm ';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class MainForm extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    const id = nanoid(5);
    this.setState({ [name]: value, id });
  };

  handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.name.value;
    this.setState(({ contacts, name, id, number }) => {
      if (contacts.find(el => el.name === inputValue)) {
        return alert(`${name} is already in contacts`);
      }

      return {
        contacts: [...contacts, { name, id, number }],
      };
    });

    e.currentTarget.reset();
  };

  handleRemove = e => {
    const delValue = e.currentTarget.parentNode.firstChild.data;
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(el => el.name !== delValue),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterBook = contacts.filter(({ name }) =>
      name.toLowerCase().startsWith(filter.toLowerCase())
    );

    return (
      <div className="phoneBook">
        <h1>Phonebook</h1>
        <ContactForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onRemove={this.handleRemove}
        />

        <h1>Contacts</h1>
        <Filter onChange={this.handleChange} />
        <ContactList filterBook={filterBook} onRemove={this.handleRemove} />
      </div>
    );
  }
}

export default MainForm;
