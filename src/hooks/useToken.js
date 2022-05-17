import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  // console.log(user);

  useEffect(() => {
    const getToken = async () => {
      // console.log(user.user.email);
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://secure-brook-46613.herokuapp.com/login",
          {
            email,
          }
        );
        setToken(data.accessToken);
        // console.log(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
