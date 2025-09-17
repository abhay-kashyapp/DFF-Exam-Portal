import React, { createContext, useState } from 'react'

export const authDataContext = createContext()

function AuthContext({children}) {
    let serverUrl = "http://localhost:5000"
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    let value = {
      serverUrl,
      isAuthenticated,
      setIsAuthenticated
    }

    return (
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    )
}

export default AuthContext
