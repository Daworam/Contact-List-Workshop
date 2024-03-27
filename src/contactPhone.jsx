const ContactPhone = ({contactList}) => {
  return (
    <ul>{contactList.map((singleContact, index) => {
      return <li key={singleContact.id}>{singleContact.phone}</li>
    })}
    </ul>
  )
}

export default ContactPhone