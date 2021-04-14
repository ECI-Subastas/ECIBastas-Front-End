export const getAllAuctions = () => {
    return fetch(`https://ecibastas-app.herokuapp.com/subasta/subastas`).then(res => {
        if (!res.ok) throw new Error("Response is NOT ok")
        return res.json()
    })
}