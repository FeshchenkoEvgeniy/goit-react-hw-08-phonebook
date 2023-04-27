import ContactForm from './ContactsForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';
import { Container } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operation';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';

export default function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Container>
      <RegisterForm/>
      <LoginForm/>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </Container>
  );
}
