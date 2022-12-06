import {loginUserPort} from "../ports/loginPort";

export const loginUserController = (email, password) => {
    return loginUserPort(email, password).then(response =>{
        if (response.status !== 201) return {error: "Algo salio mal"}
        return response.json()
    })
}

export const isLogged = () => {
    if (sessionStorage.getItem("id")) {

    }
}

