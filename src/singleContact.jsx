import { useState} from 'react';

const SingleContact = ({contactList, contactId}) =>{

  return(
    <ul>
      {contactList.map((singleContact) => {
        return singleContact.id === contactId ? 
        <div>
          <li>{singleContact.name}</li>
          <li>{singleContact.email}</li>
          <li>{singleContact.phone}</li>
          <li>{singleContact.website}</li>
          <li>{singleContact.address.street}</li>
          <li>{singleContact.address.suite}</li>
          <li>{singleContact.address.city}</li>
        </div>
         : null
      })}
    </ul>
  )
}

export default SingleContact