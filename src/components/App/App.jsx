import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  //   number: '',
  // };
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
    this.setState(({ contacts, name, id, number }) => {
      return {
        contacts: [...contacts, { name, id, number }],
      };
    });

    e.currentTarget.reset();
  };

  render() {
    const { contacts, filter } = this.state;
    const filterBook = contacts.filter(({ name }) => name.toLowerCase().startsWith(filter.toLowerCase()));

    return (
      <div className="phoneBook">
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h1>Contacts</h1>
        <ul>
          {filterBook.map((contact, index) => (
            <li key={index}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
        <label>
          Find contacts by name
          <input type="text" name="filter" onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default App;
