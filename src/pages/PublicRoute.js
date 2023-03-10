import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AppContext } from "../context/Context"


export const PublicRoute = ({children}) => {
    const {logged} = useContext(AppContext)
  return (
  (!logged) ? children 
  : <Navigate to='/HomePage'></Navigate>
  )
}
