import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('state')) || []
  );
  const [filter, setfilter] = useState('');

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(contacts));
  }, [contacts]);

  const addNewName = (name, number) => {
    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(name))
      return alert(`${name} is alredy in contacts`);

    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const showFilteredContacts = () =>
    contacts.filter(con =>
      con.name.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  const handleFilterChange = newValue => setfilter(newValue);

  return (
    <div>
      <h1>Phonebook</h1>
      <Phonebook onSubmit={addNewName} />

      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <PhoneBookList contacts={showFilteredContacts()} onClick={deleteContact} />
    </div>
  );
};