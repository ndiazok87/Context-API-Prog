import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import { getAllUnicorn, getUnicornByIdService } from "../services/UnicornService";

const UnicornContext = createContext();

export const UnicornProvider = ({ children }) => {
    const [unicorns, setUnicorns] = useState([]);

    const getUnicorns = async () => {
        const data = await getAllUnicorn();

        if(!data){
            return;
        }

        setUnicorns(data);
    }
    useEffect(() => {
        getUnicorns();
    },[])

    const getUnicornById = async (id) => {
        const unicorn = await getUnicornByIdService(id);
        return unicorn;
    }

    return (
        <UnicornContext.Provider value={{ unicorns, getUnicorns, getUnicornById }}>
            {children}
        </UnicornContext.Provider>
    )
    
}

export const useUnicorns = () => useContext(UnicornContext);