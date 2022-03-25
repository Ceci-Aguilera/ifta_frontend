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






export const getDrivers = async () => {
  const user_token = window.localStorage.getItem("user_token");
  const auth_url =  `${domain}/user-account/list-drivers`;

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
          return { status: "DRIVERS", drivers: res};
        } else {
          return { status: "NO_DRIVERS_FOUND", drivers: null};
        }
      })
      .catch((err) => {

        return { status: "NO_DRIVERS_FOUND", drivers: null};
      });
  } else {
    return { status: "NO_DRIVERS_FOUND", drivers: null};
  }
};















export const getTrucks = async () => {
  const user_token = window.localStorage.getItem("user_token");
  const auth_url =  `${domain}/user-account/list-trucks`;

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
          return { status: "TRUCKS", trucks: res};
        } else {
          return { status: "NO_TRUCKS_FOUND", trucks: null};
        }
      })
      .catch((err) => {

        return { status: "NO_TRUCKS_FOUND", trucks: null};
      });
  } else {
    return { status: "NO_TRUCKS_FOUND", trucks: null};
  }
};




















export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null)
const [drivers, setDrivers] = useState(null)
  const [trucks, setTrucks] = useState(null)

  const router = useRouter();

  useEffect(async () => {
    const temp_auth = await getUser();
    setAuth(temp_auth);
    setUser(temp_auth["user"]);
    setToken(temp_auth["token"]);
    if(temp_auth["user"]){
      setId(temp_auth["user"]["id"])
    }

    const temp_drivers = await getDrivers();
    setDrivers(temp_drivers['drivers'])

    const temp_trucks = await getTrucks()
    setTrucks(temp_trucks['trucks'])
  }, []);






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
        console.log(res)
        const temp_token = res["access_token"];


        setToken(temp_token);

        window.localStorage.setItem(
          "user_token",
          temp_token
        );

        // setLoading(false);
        // router.push("/");
        const result = "User Loged in"
        getUser();
        return result;
      })
      .catch((error) => {
        setLoading(false);
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

        setLoading(false);
        router.push("/");
      })
      .catch(async (error) => {
        setLoading(false);
        const result = await error;
      });
  };







  const addDriver = async (body) => {

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };

    const driver_url = `${domain}/user-account/driver-signup`;

    return await axios
      .post(driver_url, body, config)
      .then(async (response) => {
        const res = await response.data;

        setLoading(false);
        router.push("/");
      })
      .catch(async (error) => {
        setLoading(false);
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
        const res = await response.data
    }).catch(async (error) => {
        console.log(error);
    })

  }








  const editDriver = async(driver_id, body) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      };

      const driver_url = `${domain}/user-account/edit-driver/${driver_id}`

      return axios.post(driver_url, body, config).then(async (response) => {
        const res = await response.data
        getUser()
        getTrucks()
    }).catch(async (error) => {
        console.log(error);
    })
  }






const addTruck = async(body) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };

    const truck_url = `${domain}/user-account/create-truck`

    return axios.post(truck_url, body, config).then(async (response) => {
      const res = await response.data
  }).catch(async (error) => {
      console.log(error);
  })
}


const editTruck = async(truck_id, body) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };

    const truck_url = `${domain}/user-account/edit-truck/${truck_id}`

    return axios.post(truck_url, body, config).then(async (response) => {
      const res = await response.data
      getUser()
      getTrucks()
  }).catch(async (error) => {
      console.log(error);
  })
}






const deleteDriver = async(driver_id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };

    const driver_url = `${domain}/user-account/edit-driver/${driver_id}`

    return axios.delete(driver_url, config).then(async (response) => {
      const res = await response.data
  }).catch(async (error) => {
      console.log(error);
  })
}







const deleteTruck = async(truck_id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };

    const truck_url = `${domain}/user-account/edit-truck/${truck_id}`

    return axios.delete(truck_url, config).then(async (response) => {
      const res = await response.data
      getUser()
      getTrucks()
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
        setId(null);

        setLoading(false);
        router.push("/");
        console.log("user logged out");
  };


  return (
    <AuthContext.Provider value={{ auth, user, token, id, drivers, trucks, logout, register, login, edit, addDriver, editDriver, deleteDriver, addTruck, editTruck, deleteTruck, makePayment }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const AuthConsumer = AuthContext.Consumer;
