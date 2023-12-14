import {createContext, useState} from 'react'

export const UserContext = createContext()

const testUser = {
        username : 'testUser',
        votedOn : {}
}

export const UserProvider = ({children}) => {
    const [userData,setUserData] = useState(
testUser
    )
    return (
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}