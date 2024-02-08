import { useEffect, useState } from "react"
import './viewContact.css'

export default function ViewComponent(props) {
    const data = props.updateObj
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')

    let newDetails = () => {
        setName(data.name)
        setEmail(data.email)
        setMobile(data.mobile)
        if (data.address == undefined)
            setAddress("Address Not Mentioned !")
        else
            setAddress(data.address)
    }
    useEffect(() => {
        if (data) {
            newDetails()
        }
    }, [data])
    return (<div className="viewContact">
        <h2 className='text-center'>View Contact</h2>
        <br />
        <div className="text-center">
            <b>Name : {name}</b> <br />
            <b>Email : {email}</b> <br />
            <b>Mobile : {mobile}</b> <br />
            <b>Address : {address}</b>
        </div>
    </div>)
}