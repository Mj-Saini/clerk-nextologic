import { SignUp } from '@clerk/clerk-react';

const SignUpUser = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <SignUp
        path="/sign-up"
        routing="path"
        redirectUrl="/dashboard"  // Primary redirect URL
        afterSignUpUrl="/dashboard" // Fallback to ensure redirect to /dashboard
      />
    </div>
  );
};

export default SignUpUser;
