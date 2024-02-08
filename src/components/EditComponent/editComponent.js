import { useEffect, useState } from 'react'
import '../AddContactComponent/addContact.css'
import { updateContact } from '../../Redux/slice'
import { useDispatch } from 'react-redux'

export default function EditComponent(props) {

    const data = props.updateObj
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [msg, setMsg] = useState('')

    const dispatch = useDispatch()

    let updateForm = () => {
        setName(data.name)
        setEmail(data.email)
        setMobile(data.mobile)
        if (data.address == undefined)
            setAddress('Address is not mentioned!')
        else
            setAddress(data.address)
    }

    let updateContactDetail = (e) => {
        e.preventDefault()
        let obj = {
            id: data.id, name: name, email: email, mobile: mobile, address: address
        }
        dispatch(updateContact(obj))

        setMsg("Contact Updated !")
        setTimeout(() => {
            setMsg('')
        }, 2000)
        setName('')
        setEmail('')
        setMobile('')
        setAddress('')
    }

    let resetUpdateDetail = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setMobile('')
        setAddress('')
    }

    useEffect(() => {
        if (data) {
            updateForm()
        }
    }, [data])

    return (<div className="addContact">
        <h2 className='text-center'>Edit Contact</h2>
        <div className='col-lg-8 form'>
            <form>
                <label>Name:</label>
                <input type='text' placeholder='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Email:</label>
                <input type='email' placeholder='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Phone Number:</label>
                <input type='number' placeholder='mobile' className='form-control' value={mobile} onChange={(e) => setMobile(e.target.value)} required />

                <label>Address:</label>
                <input type='text' placeholder='address' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} required />

                {msg == "" ? <></> : <b>{msg}</b>}
                <br />
                <button className='btn btn-sm btn-success' onClick={updateContactDetail}>Update</button> &nbsp; <button className='btn btn-sm btn-dark' onClick={resetUpdateDetail}>Reset</button>
            </form>
        </div>
    </div>)
}