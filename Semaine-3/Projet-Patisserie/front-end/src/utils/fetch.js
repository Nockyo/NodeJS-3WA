export const getData = async (urlName) => {
    let response = await fetch(`http://localhost:8080/${urlName}`);
    let data = await response.json();
    return data
}