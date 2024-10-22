import React, { useState } from "react";

function ProfileForm({ addProfile }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleForm = (event) => {
    event.preventDefault();
    addProfile(formData);
    setFormData({ name: "", age: "", occupation: "" });
  };

  return (
    <>
      <form action="" className="profile-form" onSubmit={handleForm}>
        <h2 style={{ textAlign: "center" }}>Registration Form</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Add Profile</button>
      </form>
    </>
  );
}

export default ProfileForm;
