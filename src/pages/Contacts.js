import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectIsLoading } from '../redux/contacts/selectors';
import ContactForm from '../components/ContactsForm/ContactForm';
import Filter from '../components/Filter/Filter';
import { ContactList } from '../components/ContactsList/ContactList';
import { fetchContacts } from '../redux/contacts/operation';
import { Container } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </Container>
  );
};
