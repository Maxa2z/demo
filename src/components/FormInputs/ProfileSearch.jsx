import React, { useState } from "react";

const ProfileSearch = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState({
    name :"",
    password:""
  });

  // Handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    handleSearch(searchQuery); // Pass the search query to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
        type="text"
        name="name"
        placeholder="username"
        value={searchQuery.name} // Controlled input
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={searchQuery.password} // Controlled input
        onChange={handleInputChange}
      />
      {/* <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleInputChange}
        /> */}
      <button type="submit">Search</button>
    </form>
  );
};

export default ProfileSearch;
