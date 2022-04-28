import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';



const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // console.log(user)
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger'> Your Email is not Verified </h3>
            <h5 className='text-succes'>Please verify your email address</h5>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >Send verification</button >
        </div>
    }
    return children;
};

export default RequireAuth;