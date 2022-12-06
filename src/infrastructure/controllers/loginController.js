import {loginUserPort} from "../ports/loginPort";

export const loginUserController = (email, password) => {
    return loginUserPort(email, password).then(response => {
        if (response.status !== 200) return {error: "Algo salio mal"}
        return response.json()
    })
}
