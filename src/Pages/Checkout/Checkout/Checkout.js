import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Akbar The Great',
    //     email: 'akbar@gmail.com',
    //     address: 'Tajmohol Road Md.pur',
    //     phone: '017111111'
    // });

    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest }
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://tranquil-eyrie-06845.herokuapp.com/order', order)
            .then(response => {
                console.log(response)
                const { data } = response;
                if (data.insertedId) {
                    toast('your order is booked!!!')
                    event.target.reset();
                }
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Please Order: {service.name} </h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly /> <br />
                <input className='w-100 mb-2' type="text" value={user?.email} name='email' placeholder='email' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={service.name} readOnly name='service' placeholder='service' required /> <br />
                <input className='w-100 mb-2' type="text" name='address' autoComplete='off' placeholder='address' required /> <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required /> <br />
                <input className='btn btn-primary' type="submit" value='Place Order' /> <br />
            </form>
        </div>
    );
};

export default Checkout;