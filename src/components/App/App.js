import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../Section';
import Phonebook from '../Phonebook';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';

class App extends React.Component {
  // componentDidMount = () => {
  //   const storage = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(storage);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // };
  // componentDidUpdate = (prevProps, prevState) => {
  //   // if (prevState.contacts !== this.state.contacts) {
  //   //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   // }
  // };
  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <Phonebook />
        </Section>

        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Container>
    );
  }
}

export default App;
