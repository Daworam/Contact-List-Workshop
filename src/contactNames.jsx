import { useState } from "react";

const ContactNames = ({ setSelectedContactId, contactList }) => {
  return (
    <ul>
      {contactList.map((singleContact) => {
        return (
          <li
            onClick={() => {
              setSelectedContactId(singleContact.id);
            }}
            key={singleContact.id}
          >
            {singleContact.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactNames;
