import React from 'react';
// import PropTypes from 'prop-types';

const ContactList = ({ filterBook, onRemove }) => (
  <ul>
    {filterBook.map((contact, index) => (
      <li key={index}>
        {contact.name}: {contact.number}
        <button type="submite" className="delete" onClick={onRemove}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

// ContactList.propTypes ={
//   onRemove: PropTypes.func.isRequired,
//   filterBook: PropTypes.array.isRequired

// }
