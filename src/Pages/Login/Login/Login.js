import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';
import useToken from '../../../Hooks/useToken';


const Login = () => {
    <PageTitle title="Home"></PageTitle>

    const emailRef = useRef("");
    const passwordRef = useRef("")
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const [token] = useToken(user);


    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = event => {
        navigate("/register");
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your Email')
        }
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className="text-primary text-center mt-2">Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-100 mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}

            <p>New to  Genius Car? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <button className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

            <div>
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;