import { useState, useEffect } from 'react';
import './App.css';
import ContactNames from './contactNames'
import ContactEmail from './contactEmail'

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

  console.log(contactList)

  return (
    <>
     <h1>Contact List</h1>
     <ContactNames contactList = {contactList}/>
     <ContactEmail contactList = {contactList} />
    </>
  )
}

export default App
