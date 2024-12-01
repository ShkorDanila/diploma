import { useEffect, useRef } from "react";
import { useAuth } from "../provider/authProvider";
import { login } from "../api/auth";

export const AuthPage = () => {
  const { setIsAuthed } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login({
            identity: emailRef.current.value,
            password: passwordRef.current.value,
          })
            .then(() => setIsAuthed(true))
            .catch(() => console.log("АХАХАХАХА"));
        }}
      >
        <input ref={emailRef}></input>
        <input ref={passwordRef}></input>
        <button>Submit</button>
      </form>
    </>
  );
};
