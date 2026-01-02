import Contact from "./Contact";

const ContactList = ({ contacts }) => {
  return (
    <div className="contactList">
      {contacts.map((elem, idx) => {
        return <Contact key={idx} contact={elem} />;
      })}
    </div>
  );
};

export default ContactList;