import React from 'react';



const ContactCard = ({onRemove, con, index}) => (
    // console.log(index.toString())
    <li  key={index}>
    {con.name}: {con.number}
    <button type="submite" className="delete" onClick={onRemove}>
      Delete
    </button>
  </li>
)
   


export default ContactCard;
