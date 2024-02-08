import { useEffect, useState } from 'react';
import './App.css';
import ContactsView from './components/ContactsViewComponent/contactsView';
import { Routes, Route } from 'react-router-dom'
import AddContact from './components/AddContactComponent/addContact';
import EditComponent from './components/EditComponent/editComponent';
import ViewComponent from './components/ViewContactComponent/viewContact';

export default function App() {
  const [updateObj, setUpdateObj] = useState('')
  const [viewD, setViewD] = useState('')
  let getObj = (data) => {
    setUpdateObj(data)
  }

  return (<div className='container-fluid main'>
    <div className='row'>
      <div className='col-lg-6'>
        <ContactsView getObj={getObj} />
      </div>
      <div className='col-lg-6'>
        <Routes>
          <Route path='/addContact' element={<AddContact />} />
          <Route path='/editContact' element={<EditComponent updateObj={updateObj} />} />
          <Route path='/viewContact' element={<ViewComponent updateObj={updateObj} />} />
        </Routes>
      </div>
    </div>
  </div>)
}
