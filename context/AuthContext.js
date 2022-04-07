import axios from "axios";
import { createContext } from "react";
import {useRouter} from "next/router";
import { useEffect, useState, useContext } from "react";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const AuthContext = createContext();

export const getUser = async () => {
  const user_token = window.localStorage.getItem("user_token");
  const auth_url =  `${domain}/user-account/check-auth`;

  if (user_token !== undefined) {

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user_token}`,
      },
    };

    return await axios
      .get(auth_url, config)
      .then(async (response) => {
        if (response.data) {
          const res = await response.data;
          console.log(response)
          return { status: "SIGNED_IN", user: res, token: user_token};
        } else {
          return { status: "SIGNED_OUT", user: null, token: null};
        }
      })
      .catch((err) => {

        return { status: "SIGNED_OUT", user: null, token: null};
      });
  } else {
    return { status: "SIGNED_OUT", user: null, token: null};
  }
};






export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const router = useRouter();


  useEffect(() => {

    const temp_token = window.localStorage.getItem("user_token");
    setToken(temp_token)
    
  }, []);


  useEffect(() => {

    async function FetchUser() {
        const temp_auth = await getUser()
        setUser(temp_auth["user"]);
    }

    FetchUser()
    
  }, [token]);




  const login = async (body) => {

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const login_url = `${domain}/user-account/login`;

    return await axios
      .post(login_url, body, config)
      .then(async (response) => {
        const res = await response.data;
        const temp_token = res["access_token"];
        setToken(temp_token);

        window.localStorage.setItem(
          "user_token",
          temp_token
        );

        const result = "User Logged in"
        router.push('/')
        return result;
      })
      .catch((error) => {
        const result = "Email or Password do not match";
        return result;
      });
  };







  const register = async (body) => {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const register_url = `${domain}/user-account/signup`;

    return await axios
      .post(register_url, body, config)
      .then(async (response) => {
        const res = await response.data;
        router.push("/");
      })
      .catch(async (error) => {
        const result = await error;
      });
  };




  const edit = async (body) => {

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      };

      const edit_url = `${domain}/user-account/edit-info`

      return axios.post(edit_url, body, config).then(async (response) => {
        window.location.reload(false);
    }).catch(async (error) => {
        console.log(error);
    })

  }


const makePayment = async(body) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };

    const payment_url = `${domain}/user-account/extend-service`

    return axios.post(payment_url, body, config).then(async (response) => {
      const res = await response.data
  }).catch(async (error) => {
      console.log(error);
  })
}






  const logout = async () => {


        window.localStorage.removeItem("user_token");
        setUser(null);
        setToken(null);

        router.push("/");
        console.log("user logged out");
  };


  return (
    <AuthContext.Provider value={{ user, token, logout, register, login, edit, makePayment }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const AuthConsumer = AuthContext.Consumer;
