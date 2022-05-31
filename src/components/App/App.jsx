import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: { name: '', id: '' },
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    this.setState(prev => {
      return {
        name: name,
        id: this.loginInputId,
        contacts: [...prev.contacts, name],
      };
    });
    e.currentTarget.reset();
  };
  loginInputId = nanoid(5);
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
          {contacts.map((contact,index) => (
            <li key={index}>{contact}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
