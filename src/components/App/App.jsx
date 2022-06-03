import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget.name;
    const id = nanoid(5);

    this.setState(prev => {
      return {
        [name]: { value, id },
        contacts: [...prev.contacts, {value, id}],
      };
    });

    e.currentTarget.reset();
   
  };

  render() {
    const { contacts } = this.state;
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
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h1>Contacts</h1>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>{contact.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
