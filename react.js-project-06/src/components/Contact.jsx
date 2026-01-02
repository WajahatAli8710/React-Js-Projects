const Contact = ({ contact }) => {
  return (
    <div className="contact">
      <img src={contact.imageUrl} alt="" />
      <div className="info">
        <h2 className="name">{contact.name}</h2>
        <p className="tagline">{contact.tageline}</p>
      </div>
      <i className="ri-phone-line"></i>
    </div>
  );
};

export default Contact;
