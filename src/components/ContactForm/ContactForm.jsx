import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = ({ onAddContact, contacts }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === state.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`Contact with name ${state.name} already exists!`);
      return;
    }

    onAddContact({ ...state, id: generateId() });
    setState({ name: '', number: '' });
  };

  const generateId = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={state.number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactForm;
