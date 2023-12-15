import {createContext, useState} from 'react'
export const UserContext = createContext();


const testUserData = {
    currUser : {
        username : 'happyamy2016',
        name : 'Amy Happy',
        avatar_url : 'https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729'
    },
    votedOn : {},
    comments : []
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