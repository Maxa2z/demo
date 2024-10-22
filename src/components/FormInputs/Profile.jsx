import React, { useState } from "react";
import ListCard from "./ListCard";
import ProfileForm from "./ProfileForm"; // Import the form component
import ProfileSearch from "./ProfileSearch";

const Profile = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Alice", password: "123" },
    { id: 2, name: "Bob", password: "123" },
    { id: 3, name: "Charlie", password: "123" },
  ]);

  const addProfile = (newProfile) => {
    const updatedProfile = { ...newProfile, id: profiles.length + 1 };
    setProfiles([...profiles, updatedProfile]);
  };

  const pass ={
    id : "",
    name : ""
  }

  const find = (e) => {
    const item = profiles.find(item => item.e.name === e.name);
    pass.name = item.name
    return item ? pass.id == item.id : "Item not found";
  };

  return (
    <>
      <ProfileForm addProfile={addProfile} />

      <div className="profiles-card">
        {profiles.map((profile) => (
          <ListCard data={profile} key={profile.id} />
        ))}
      </div>

      <ProfileSearch find={find}/>
      
      <div className="profiles-card">
          <ListCard data={pass} key={pass.id} />
      </div>
    </>
  );
};

export default Profile;
