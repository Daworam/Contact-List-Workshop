const ContactEmail = ({ contactList }) => {
  return (
    <ul>
      {contactList.map((singleContact) => {
        return <li className="emailLi" key={singleContact.id}>{singleContact.email}</li>;
      })}
    </ul>
  );
};

export default ContactEmail;
