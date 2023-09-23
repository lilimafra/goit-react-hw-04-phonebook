import React, { useState, useEffect } from 'react';

import { DivSection, Title, TitleTwo } from './App.styled';
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      return parsedContacts;
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number, id }) => {
    if (contacts.find(item => item.name === name)) {
      return alert(` ${name} is already in contacts.`);
    }
    setContacts(prevState => {
      return [...prevState, { id, name, number }];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <DivSection>
      <Title>PhoneBook</Title>
      <Form onSubmitForm={addContact} />
      <TitleTwo>Contacts</TitleTwo>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList items={getVisibleContacts()} onDelete={deleteContact} />
    </DivSection>
  );
};
