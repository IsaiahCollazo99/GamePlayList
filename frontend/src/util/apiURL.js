export const apiURL = () => {
    return window.location.hostname === "localhost" ?
    "http://localhost:8000" : "https://secret-garden-12662.herokuapp.com/" // deployed server
}