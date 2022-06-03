import React from 'react';

const ContactList = ({filterBook}) => (
  <ul>
    {filterBook.map((contact, index) => (
      <li key={index}>
        {contact.name}: {contact.number}
        <button type='submite' className='delete'>Delete</button>
      </li>
      
    ))}
  </ul>
);

export default ContactList;
