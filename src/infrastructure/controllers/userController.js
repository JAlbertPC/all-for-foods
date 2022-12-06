import {userGetUser} from "../ports/userPorts";

export const UserGetUserController = (user) => {
    return userGetUser(user).then(response => {
        if (response.status !== 200) return {error: "Algo salio mal"}
        return response.json()
    })
}