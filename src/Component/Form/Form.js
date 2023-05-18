import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("abc@gmail.com");
  const [mobile, setMobile] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length < 5 ||
      !email.includes("@") ||
      mobile.length > 10 ||
      isNaN(mobile)
    ) {
      alert("Please fill the form correctly.");
      return;
    }

    const newItem = { name, email, mobile };
    setList([...list, newItem]);

    // Clear form fields
    setName("");
    setEmail("");
    setMobile("");
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const handleEdit = (index) => {
    const itemToEdit = list[index];
    setName(itemToEdit.name);
    setEmail(itemToEdit.email);
    setMobile(itemToEdit.mobile);
    handleDelete(index);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}, {item.email}, {item.mobile}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
