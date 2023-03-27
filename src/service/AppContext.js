import React, { createContext, useState, useEffect } from 'react';
import api from './index'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [date, setDate] = useState([])
    // Serve para atualizar e realizar a chamada para o map
    useEffect(() => {
        api.get("/login").then((response) => {
          setDate(response.data);
        });
      }, []);
    return(
        //  AppContext que contém três propriedades: dados, setDados e api. Essas propriedades são definidas no objeto passado como valor para o Provider.
        <AppContext.Provider value={{ date, setDate, api }}>
            {children}
        </AppContext.Provider>
    
    )

}

export default AppContext