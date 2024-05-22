

function handleClick(){
    const foods = axios.get("https://localhost:3000/foods");
    console.log(foods)
}