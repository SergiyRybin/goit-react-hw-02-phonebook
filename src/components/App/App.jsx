import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.currentTarget;
    const name = form.elements.name.value
    this.setState({ name: name })
    console.log(name);
    console.log(this.state)
  }
  
  handleChange= (e) =>{
    // e.preventDefault()
    // const { name, value } = e.target;
    // this.setState({ [name]: value });
    // console.log(e.target.value)
  }
  

  render() {
    return (
      <div className="phoneBook">
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
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
          <button type="submit">Add contact</button>
        </form>

        <h1>Contacts</h1>
        <ul></ul>
      </div>
    );
  }
}

export default App;
