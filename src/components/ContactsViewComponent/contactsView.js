import { useEffect, useState } from 'react';
import './contactsView.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getContact, delContact, searchContact } from '../../Redux/slice';

export default function ContactsView(props) {
    const [searchBar, setSearchBar] = useState('')
    const dispatch = useDispatch()
    const value = useSelector(state => state.myContact.value)

    let getData = async () => {
        const response = await fetch('https://raw.githubusercontent.com/abdulbitcot/fresher-machin-test/main/json/sample.json')
        const d = await response.json()
        dispatch(getContact(d))
    }

    let updateContact = (obj) => {
        props.getObj(obj)
    }

    let deleteContact = (obj) => {
        dispatch(delContact(obj))
    }

    useEffect(() => {
        getData()
    }, [])

    return (<div className="contactsView">
        <div className='col-lg-11 contactBar text-center'><Link to={'/addContact'} style={{ textDecoration: 'none' }}>
            <h2 style={{ color: 'white' }}>All Contacts <span className='icon'><IoMdAddCircleOutline /></span></h2>
        </Link></div>
        <div className='col-lg-8 inputBar'>
            <input type='text' placeholder='You Can Search Here' className='form-control text-center' onChange={(e) => setSearchBar(e.target.value)} />
        </div>
        {value == [] ? <></> : <>{value.filter(ob => searchBar === "" ? ob : ob.name.includes(searchBar) || ob.mobile.includes(searchBar))
            .map((contact, Index) => <div className='col-lg-11 contactList' key={contact.id}>
                <div className='row'>
                    <div className='col-lg-1'><p>{contact.id}</p></div>
                    <div className='col-lg-1 newIcon'><IoMdContact /></div>
                    &nbsp; &nbsp;
                    <div className='col-lg-4 contactDetail'>
                        <p>{contact.name} <br /> {contact.mobile}</p>
                    </div>
                    <div className='col-lg-5 text-right'>
                        <span className='editIcon'><Link to={'/viewContact'} style={{ color: "black" }}><span onClick={() => updateContact(contact)}><FaEye /></span></Link> &nbsp; <span onClick={() => deleteContact(contact)}><MdDelete /></span> &nbsp; <Link to={'/editContact'} style={{ color: 'black' }}><span onClick={() => updateContact(contact)}><MdEdit /></span></Link></span>
                    </div>
                </div>
            </div>)}</>}
    </div>)
}