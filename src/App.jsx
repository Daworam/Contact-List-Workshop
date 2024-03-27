import { useState, useEffect } from 'react';
import './App.css';
import ContactNames from './contactNames'
import ContactEmail from './contactEmail'
import ContactPhone from './contactPhone'

function App() {
  const [contactList, setContactList] = useState([]);
  const API_URL = 'https://jsonplaceholder.typicode.com/users';

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
     <h1>Contact List</h1>
     <section>
      <ContactNames contactList = {contactList}/>
      <ContactEmail contactList = {contactList}/>
      <ContactPhone contactList = {contactList}/>
     </section>
    </>
  )
}

export default App
