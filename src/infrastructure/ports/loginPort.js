const baseAPI = "http://localhost:1234"
import data from "../../testing/infrastructure/ports/loginPort.test"
export const login = (email, password) => {
    /* return data */
    return fetch(`${baseAPI}/login`, {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password
        },
        )
    }).then(response => response.json())
    
}
/*
{
    "id": 2,
    "username": "noeshi"
}
*/