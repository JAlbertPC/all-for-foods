const baseAPI = "http://localhost:1234"
import loginPortMock from "../../testing/infrastructure/ports/loginPortResponseMock.json"
export const login = (email, password) => {
     return loginPortMock
    /*return fetch(`${baseAPI}/login`, {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password
        },
        )
    }).then(response => response.json())*/
    
}
/*
{
    "id": 2,
    "username": "noeshi"
}
*/