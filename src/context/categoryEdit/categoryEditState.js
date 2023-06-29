import { useState } from 'react'
import AuthContext from './authContext'

const CategoryEditState = (props) => {
    const [email, setEmail] = useState("")
    const [authenticated, setAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{email,authenticated,setEmail,setAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default CategoryEditState