export const apiURL = () => {
    return window.location.hostname === "localhost" ?
    "http://localhost:8000" : null // deployed server
}