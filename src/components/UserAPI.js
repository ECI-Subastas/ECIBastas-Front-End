export const getUserByEmail = (email) => {
    return fetch(`https://ecibastas-app.herokuapp.com/user/email?value=${email}`).then(res => {
        if (!res.ok) throw new Error("Response is NOT FOUND")
        return res.json()
    })
}