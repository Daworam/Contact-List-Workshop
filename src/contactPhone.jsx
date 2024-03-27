const ContactPhone = ({ contactList }) => {
  return (
    <ul>
      {contactList.map((singleContact, index) => {
        return <li className="phoneLi" key={singleContact.id}>{singleContact.phone}</li>;
      })}
    </ul>
  );
};

export default ContactPhone;
