import axios from "axios";
import { createContext } from "react";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const DriversContext = createContext();

export const getDrivers = async () => {
    const user_token = window.localStorage.getItem("user_token");
    const auth_url = `${domain}/user-account/list-drivers`;

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
                    return { status: "DRIVERS", drivers: res, token: user_token };
                } else {
                    return { status: "NO_DRIVERS_FOUND", drivers: null, token: null };
                }
            })
            .catch((err) => {

                return { status: "NO_DRIVERS_FOUND", drivers: null, token: null };
            });
    } else {
        return { status: "NO_DRIVERS_FOUND", drivers: null, token: null };
    }
};




export const DriversProvider = ({ children }) => {
    const [drivers, setDrivers] = useState(null)
    const [token, setToken] = useState(null);

    const router = useRouter();

    useEffect(() => {

        const temp_token = window.localStorage.getItem("user_token");
        setToken(temp_token)
        
      }, []);
    
    
      useEffect(() => {
    
        async function FetchDrivers() {
            const temp_drivers = await getDrivers()
            setDrivers(temp_drivers['drivers'])
        }
    
        FetchDrivers()
        
      }, [token]);


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
                window.location.reload(false);
            })
            .catch(async (error) => {
                setLoading(false);
                const result = await error;
            });
    };




    const editDriver = async (driver_id, body) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };

        const driver_url = `${domain}/user-account/edit-driver/${driver_id}`

        return axios.post(driver_url, body, config).then(async (response) => {
            window.location.reload(false);
        }).catch(async (error) => {
            console.log(error);
        })
    }



    const deleteDriver = async (driver_id) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };

        const driver_url = `${domain}/user-account/edit-driver/${driver_id}`

        return axios.delete(driver_url, config).then(async (response) => {
            window.location.reload(false);
        }).catch(async (error) => {
            console.log(error);
        })
    }





    return (
        <DriversContext.Provider value={{drivers, addDriver, editDriver, deleteDriver}}>
            {children}
        </DriversContext.Provider>
    );
};

export const useDrivers = () => useContext(DriversContext);
export const DriversConsumer = DriversContext.Consumer;
