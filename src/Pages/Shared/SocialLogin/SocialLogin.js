import React from 'react';
import GoogleIcon from '../../../Images/icons8-google-48.png'
import GitHubIcon from '../../../Images/icons8-github-48.png'
import FacebookIcon from '../../../Images/icons8-facebook-48.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    if (error) {
        return (
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className='btn btn-dark w-100 mb-2 p-2'> <img className='p-1' style={{ width: '30px' }} src={GoogleIcon} />  Google Sign In</div>
            <div className='btn btn-success w-100 mb-2 p-2'> <img className='p-1' style={{ width: '30px' }} src={GitHubIcon} />  GitHub Sign In </div>
            <div className='btn btn-info w-100 mb-2 rounded p-2'> <img className='p-1' style={{ width: '30px' }} src={FacebookIcon} />Facebook Sign In  </div>
        </div>
    );
};

export default SocialLogin;