import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";

const FactorOne = () => {
  const { signIn, isLoaded } = useSignIn();
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleFactorOne = async (e) => {
    e.preventDefault();

    try {
      // Verify the MFA code
      const result = await signIn.attemptFirstFactor({
        strategy: "phone_code", 
        code,
      });

      if (result.status === "complete") {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Invalid code. Please try again.",err);
    }
  };

  return (
    <div>
      <h1>Enter your verification code</h1>
      <form onSubmit={handleFactorOne}>
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FactorOne;
