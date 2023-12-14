import {createContext, useState} from 'react'
export const UserContext = createContext()

const testUserData = {
    user : {
        username : 'TestUser420',
        name : 'Ima Testperson',
        avatar_url : '..assets/user-star.png'
    },
    votedOn : {}
}

export const UserProvider = ({children}) => {
    const [userData,setUserData] = useState(
testUserData
    )
    return (
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}