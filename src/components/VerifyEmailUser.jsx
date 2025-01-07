import { useUser } from '@clerk/clerk-react';

const VerifyEmailUser = () => {
  const { user } = useUser();

  // Check if the primary email is verified
  const emailVerified = user?.primaryEmailAddress?.verified;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      {emailVerified ? (
        <h2>Your email is verified! 🎉</h2>
      ) : (
        <>
          <h2>Please verify your email</h2>
          <p>
            We’ve sent a verification email to: <strong>{user?.primaryEmailAddress?.emailAddress}</strong>
          </p>
          <p>
            If you didn’t receive the email, click the button below to resend the verification email.
          </p>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
            onClick={() => user?.primaryEmailAddress?.resendVerification()}
          >
            Resend Verification Email
          </button>
        </>
      )}
    </div>
  );
};

export default VerifyEmailUser;
