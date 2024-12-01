import axios from "axios";

export const login = async (credits) => {
  const formData = new FormData();
  formData.append("identity", credits.identity);
  formData.append("password", credits.password);
  const { data } = await axios.post(
    "http://localhost:8090/api/collections/users/auth-with-password",
    formData
  );
  return data;
};
