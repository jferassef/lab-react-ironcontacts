import "./App.css";
import contactsArray from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0, 5));

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleAddRandom = () => {
    const randomIndex = Math.floor(Math.random() * (contactsArray.length - 5));
    const contactsCopy = [...contacts];
    contactsCopy.push(contactsArray[5 + randomIndex]);
    setContacts(contactsCopy);
  };

  const sortContactByName = () => {
    const contactsCopy = [...contacts];
    setContacts(
      contactsCopy.sort((contact1, contact2) =>
        contact1.name.localeCompare(contact2.name)
      )
    );
  };

  const sortContactByPopularity = () => {
    const contactsCopy = [...contacts];
    setContacts(
      contactsCopy.sort(
        (contact1, contact2) => contact2.popularity - contact1.popularity
      )
    );
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
          <td>
            <button onClick={() => removeContact(contact.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="App">
      <button className="btn" onClick={() => handleAddRandom()}>
        Add Random Contact
      </button>
      <button className="btn" onClick={() => sortContactByName()}>
        Sort by Name
      </button>
      <button className="btn" onClick={() => sortContactByPopularity()}>
        Sort by Popularity
      </button>
      <table className="contactsTable">
        <tr className="tableHeading">
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
