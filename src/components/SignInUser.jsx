import { SignIn } from '@clerk/clerk-react';

const SignInUser = () => {
  return (
    <div className='flex justify-center items-center h-screen' >
      <SignIn path="/sign-in" routing="path" redirectUrl="/dashboard"  />
    </div>
  );
};

export default SignInUser;
