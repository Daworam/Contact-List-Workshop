import { useState, useEffect } from 'react';
import './App.css';
import ContactNames from './contactNames'
import ContactEmail from './contactEmail'
import ContactPhone from './contactPhone'
import SingleContact from './singleContact'

function App() {
  const [contactList, setContactList] = useState([]);
  const API_URL = 'https://jsonplaceholder.typicode.com/users';
  const [selectedContactId, setSelectedContactId] = useState(null);

  useEffect(()=>{
    const getContactList = async () => {
      const result = await fetch(`${API_URL}`);
      const jsonResult = await result.json();
      setContactList(jsonResult)
    }
    getContactList()
  }, [])

  return (
    <>
     {selectedContactId ? 
      (<SingleContact contactList ={contactList} contactId = {selectedContactId}/>) : (
      <>
      <h1>Contact List</h1>
       <section>
         <section className="info">
           <h3>Name</h3>
           <ContactNames contactList = {contactList} setSelectedContactId={setSelectedContactId} />
         </section>
         <section className="info">
           <h3>Email Address</h3>
           <ContactEmail contactList = {contactList}/>
         </section>
         <section className="info">
           <h3>Phone Number</h3>
           <ContactPhone contactList = {contactList}/>
         </section>
       </section>
     </>
     )}
    </>
  )
}

export default App
