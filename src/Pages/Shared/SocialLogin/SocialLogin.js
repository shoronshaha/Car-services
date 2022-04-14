import React from 'react';
import GoogleIcon from '../../../Images/icons8-google-48.png'
import GitHubIcon from '../../../Images/icons8-github-48.png'
import FacebookIcon from '../../../Images/icons8-facebook-48.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorElement;


    if (loading || loading1) {
        return <Loading></Loading>
    }


    if (error || error1) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>

    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div onClick={() => signInWithGoogle()} className='btn btn-dark w-100 mb-2 p-2'>
                <img className='p-1' style={{ width: '30px' }} src={GoogleIcon} />  Google Sign In</div>
            <div onClick={() => signInWithGithub()} className='btn btn-success w-100 mb-2 p-2'>
                <img className='p-1' style={{ width: '30px' }} src={GitHubIcon} />  GitHub Sign In </div>
            <div className='btn btn-info w-100 mb-2 rounded p-2'>
                <img className='p-1' style={{ width: '30px' }} src={FacebookIcon} />Facebook Sign In  </div>
        </div>
    );
};

export default SocialLogin;