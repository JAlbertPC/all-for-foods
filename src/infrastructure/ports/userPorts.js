//import userPortRegisterMock from "../../testing/infrastructure/ports/userPortResponsesMock.json"

const baseURL = "http://localhost:8050/api/User"

export const userRegisterUser = (username, email, password) => {
    //return userPortRegisterMock;
    return fetch(`${baseURL}/Register`, {
        method: "POST",
        body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password
        })
    })
}

export const userAddWatchLater = (userId, recipeId) => {
    return fetch(`${baseURL}/WatchLater`, {
        method: "POST",
        body: JSON.stringify({
            "userId": userId,
            "recipeId": recipeId
        })
    })
}

export const userGetUser = (userId) => {
  return fetch(`${baseURL}/${userId}`)
}

export const userEditUser = (userId, userNewEmail, userNewPassword, userPassword) => {
  return fetch(`${baseURL}/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
          "NewEmail" : userNewEmail,
          "NewPassword" : userNewPassword,
          "Password" : userPassword
      })
  })
}