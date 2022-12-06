import {loginUserPort} from "../ports/LoginPort";

export const LoginUserController = (email, password) => {
    return loginUserPort(email, password).then(response =>{
        //if (response.status !== 200) return {error: "Algo salio mal"}
        return response.json()
    })
}

export const IsLogged = () => {
    if (sessionStorage.getItem("id") !== null) {
        if (sessionStorage.getItem("username") !== null) {
            return true
        }
    }
    return false
}
