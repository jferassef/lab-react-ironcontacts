import "./App.css";
import contactsArray from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0, 5));

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
        </tr>
      );
    });
  };

  return (
    <div className="App">
      <table className="contactsTable">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {displayContacts()}
      </table>
    </div>
  );
}

export default App;
