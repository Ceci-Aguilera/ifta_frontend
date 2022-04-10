import axios from "axios";
import { createContext } from "react";
import {useRouter} from "next/router";
import { useEffect, useState, useContext } from "react";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const TrucksContext = createContext();


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
          console.log(res.data)
          return { status: "TRUCKS", trucks: res};
        } else {
          return { status: "NO_TRUCKS_FOUND", trucks: null, token: user_token};
        }
      })
      .catch((err) => {

        return { status: "NO_TRUCKS_FOUND", trucks: null, token: null};
      });
  } else {
    return { status: "NO_TRUCKS_FOUND", trucks: null, token: null};
  }
};



export const TrucksProvider = ({ children }) => {
  const [trucks, setTrucks] = useState(null)
  const [token, setToken] = useState(null);

  const router = useRouter();

  useEffect(() => {

    const temp_token = window.localStorage.getItem("user_token");
    setToken(temp_token)
    
  }, []);


  useEffect(() => {

    async function FetchTrucks() {
        const temp_trucks = await getTrucks()
        setTrucks(temp_trucks['trucks'])
    }

    FetchTrucks()
    
  }, [token]);


const addTruck = async(body) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };

    const truck_url = `${domain}/user-account/create-truck`

    return axios.post(truck_url, body, config).then(async (response) => {
      window.location.reload(false);
  }).catch(async (error) => {
    alert("Please check that all the fields are filled")
      console.log(error);
  })
}


const editTruck = async(truck_id, body) => {

    console.log(token)

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    };

    const truck_url = `${domain}/user-account/edit-truck/${truck_id}`

    return axios.post(truck_url, body, config).then(async (response) => {
      window.location.reload(false);
  }).catch(async (error) => {
    alert("Please check that all the fields are filled (including Driver)")
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
      window.location.reload(false);
  }).catch(async (error) => {
      console.log(error);
  })
}




  return (
    <TrucksContext.Provider value={{trucks, addTruck, editTruck, deleteTruck }}>
      {children}
    </TrucksContext.Provider>
  );
};

export const useTrucks = () => useContext(TrucksContext);
export const TrucksConsumer = TrucksContext.Consumer;
