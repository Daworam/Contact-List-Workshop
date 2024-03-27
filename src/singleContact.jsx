import { useState} from 'react';

const SingleContact = ({contactList, contactId, setSelectedContactId}) =>{

  return(
    <div>
      {contactList.map((singleContact) => {
        return singleContact.id === contactId ? 
        <div className="singleData">
          <ul>
            <li>{singleContact.name}</li>
            <li>{singleContact.email}</li>
            <li>{singleContact.phone}</li>
            <li>{singleContact.website}</li>
            <li>{singleContact.address.street}</li>
            <li>{singleContact.address.suite}</li>
            <li>{singleContact.address.city}</li>
          </ul>
          <button className="backButton" onClick={()=>{setSelectedContactId(null)}}>Back</button>
        </div>
         : null
      })}
    </div>
  )
}

export default SingleContact