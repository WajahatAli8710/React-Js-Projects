import { useState } from "react";

const Form = ({ addContact }) => {
  const [name, setName] = useState("");
  const [tageline, setTageline] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let contactData = {
      name: name,
      tageline: tageline,
      imageUrl: imageUrl,
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
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="enter tagline"
          name="tageline"
          onChange={(e) => {
            setTageline(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="enter image url"
          name="imageUrl"
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
