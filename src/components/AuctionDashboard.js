import React from "react"

const AuctionDashboard = () => {
    return(
        <>
        <h1>INFORMATION</h1>
            <p>Name: {localStorage.getItem("name")}</p>
            <p>Id: {localStorage.getItem("subastaId")}</p>
            <p>Creator: {localStorage.getItem("creator")}</p>
        </>
    )
}

export default AuctionDashboard