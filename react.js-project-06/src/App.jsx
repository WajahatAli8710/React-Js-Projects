import { useState } from "react";
import ContactList from "./components/ContactList";
import Form from "./components/Form";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };
  return (
    <>
      <Form addContact={addContact} />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
