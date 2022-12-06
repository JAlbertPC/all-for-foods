import {userEditUser, userGetUser, userRegisterUser} from "../ports/UserPorts";

export const UserRegisterUser = (username, email, password) => {
    return userRegisterUser(username, email, password).then(response => {
        if (response.status !== 200) return {error: "Something went wrong while registering"}
    })
}

export const UserAddWatchLater = (userId, recipeId) => {
    return UserAddWatchLater(userId, recipeId).then(response =>{
        if(response.status !== 200) return {error: "Something went wring while adding to Favorites"}
    })
}

export const UserGetUserController = (user) => {
    return userGetUser(user).then(response => {
        if (response.status !== 200) return {error: "Algo salio mal"}
        return response.json()
    })
}