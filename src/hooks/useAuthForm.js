import { useForm } from "@tanstack/react-form";
import { login } from "../api/auth";
import { useAuth } from "../provider/authProvider";
import { useState } from "react";

export const useAuthForm = () => {
  const { setCookies } = useAuth();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setIsProcessing(true);
      login({
        identity: value.login,
        password: value.password,
      })
        .then((data) => {
          setCookies("token", data.token, {
            expires: new Date(Date.now() + 604800000),
          });
          setIsProcessing(false);
        })
        .catch((e) => setError(e));
    },
  });

  return { form, error, isProcessing };
};
