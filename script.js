

async function handleClick(){
    console.log("hello")
    axios.get("http://localhost:3000/food").then(res=>{
        const food = res.data
        console.log(food)
        });
}