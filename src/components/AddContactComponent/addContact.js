import './addContact.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addConct } from '../../Redux/slice'

export default function AddContact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [msg, setMsg] = useState('')
    const dispatch = useDispatch()

    let addContactDetail = (e) => {
        e.preventDefault()
        let obj = {
            name: name, mobile: mobile, email: email, address: address
        }
        dispatch(addConct(obj))
        setMsg("Contact Added !")
        setTimeout(() => {
            setMsg('')
        }, 2000)
        setName('')
        setEmail('')
        setMobile('')
        setAddress('')
    }

    let resetDetail = () => {
        setName('')
        setEmail('')
        setMobile('')
        setAddress('')
    }

    return (<div className="addContact">
        <h2 className='text-center'>Add Contact</h2>
        <div className='col-lg-8 form'>
            <form>
                <label>Name:</label>
                <input type='text' placeholder='name' className='form-control' required value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email:</label>
                <input type='email' placeholder='name' className='form-control' required value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Phone Number:</label>
                <input type='number' placeholder='name' className='form-control' required value={mobile} onChange={(e) => setMobile(e.target.value)} />

                <label>Address:</label>
                <input type='text' placeholder='name' className='form-control' required value={address} onChange={(e) => setAddress(e.target.value)} />
                {msg == "" ? <></> : <b>{msg}</b>}
                <br />
                <button className='btn btn-sm btn-success' onClick={addContactDetail}>Submit</button> &nbsp; <button className='btn btn-sm btn-dark' onClick={resetDetail}>Reset</button>
            </form>
        </div>
    </div>)
}