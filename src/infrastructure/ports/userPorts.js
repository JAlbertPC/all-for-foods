import userPortRegisterMock from "../../testing/infrastructure/ports/userPortRegisterUserMock.json"

export const userRegisterUser = (username, email, password) => {
    //return userPortRegisterMock;
    return fetch("http://localhost:8050/api/User/Register", {
        method: "POST",
        body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password
        })
    }).then(response => {
        console.log(response.status)
        return response.json()
    })
}