const Form = ({ addContact }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    let contactData = {
      name: e.target.name.value,
      tageline: e.target.tageline.value,
      imageUrl: e.target.image.value,
    };
    addContact(contactData);
    e.target.reset();
  };

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="enter name" name="name" />
        <input type="text" placeholder="enter tagline" name="tageline" />
        <input type="text" placeholder="enter image url" name="image" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
