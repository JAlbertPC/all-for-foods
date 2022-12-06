const baseAPI = "http://localhost:8050/api/Login"
import loginPortMock from "../../testing/infrastructure/ports/loginPortResponseMock.json"

export const loginUserPort = (email, password) => {
    // return loginPortMock
    return fetch(`${baseAPI}`, {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
/*
{
    "id": 2,
    "username": "noeshi"
}
*/