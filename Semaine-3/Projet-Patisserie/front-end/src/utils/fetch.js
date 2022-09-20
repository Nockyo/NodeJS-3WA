export const getData = async (dataName) => {
    let response = await fetch(`http://localhost:8080/${dataName}`);
    let data = await response.json();
    return data
}