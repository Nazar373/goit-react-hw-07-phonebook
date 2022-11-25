import React, { useEffect } from 'react';
import ContactForm from '../contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import Filter from '../filter/Filter';
import { Container, Title, SecondTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

export function App() {
  const contacts = useSelector(getContacts)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter
      />
      <ContactList
      />
    </Container>
  );
}
