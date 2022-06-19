import "./App.css";
import contactsArray from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0, 5));

  const handleAddRandom = () => {
    const randomIndex = Math.floor(Math.random() * (contactsArray.length - 5));
    const contactsCopy = [...contacts];
    contactsCopy.push(contactsArray[5 + randomIndex]);
    setContacts(contactsCopy);
  };

  const displayContacts = () => {
    return contacts.map((contact) => {
      return (
        <tr>
          <td>
            <img
              style={{ width: 50 }}
              src={contact.pictureUrl}
              alt="imge"
            ></img>
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar ? " 🏆" : "No Oscars 💆‍♂️"}</td>
          <td>{contact.wonEmmy ? " 🏆" : "No Emmy 💆‍♂️"}</td>
        </tr>
      );
    });
  };

  return (
    <div className="App">
      <button onClick={() => handleAddRandom()}>Add Random Contact</button>
      <table className="contactsTable">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {displayContacts()}
      </table>
    </div>
  );
}

export default App;
