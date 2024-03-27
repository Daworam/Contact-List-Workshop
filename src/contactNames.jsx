const ContactNames = ({contactList}) =>{

  return(
    <ul>{contactList.map((singleContact, index) => {
      return <li key={singleContact.id}>{singleContact.name}</li>
     })}
     </ul>
  )
}

export default ContactNames