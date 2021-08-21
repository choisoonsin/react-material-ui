import { useState } from "react";
import "../App.css";
import { dummyList } from "../Resources/dummy";
import SearchBar from "./SearchBar";
import API from "../Helper/API";

export default function Main() {
  const [user, setUser] = useState(dummyList);

  const filterName = (userName) => {
    return dummyList.filter((list) => {
      return list.username.toLowerCase().indexOf(userName.toLowerCase()) > -1;
    });
  };

  const handleInputChange = (e) => {
    const obj = e.target;
    console.log("Main Component=>", obj.value);
    console.clear();
    setUser(filterName(obj.value));
    console.log(API.test);
  };

  return (
    <div className="container">
      <h1>Hello this is a Main Component</h1>
      <SearchBar handleInputChange={handleInputChange} />
      {user.map((value, idx) => (
        <div key={idx} className="listBox">
          <h3>{value.username}</h3>
          <hr></hr>
          <p>email:{value.email}</p>
          <p>address:{value.address.street + " " + value.address.city}</p>
          <p>phone:{value.phone}</p>
        </div>
      ))}
    </div>
  );
}
