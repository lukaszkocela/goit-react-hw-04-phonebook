
import { useState } from 'react';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

export const Phonebook = addNewContact => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const { onSubmit } = addNewContact;

    onSubmit(name, number);

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            className={css.input}
          />
        </label>

        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            className={css.input}
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};