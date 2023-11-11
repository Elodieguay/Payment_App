
const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const addToCart = async (id) => {
    try {   

        const dataToSend = {
            productId: id, 
        }
        console.log("request data :",dataToSend);
        
        const url = 'http://localhost:3000/cart/addcart'
        console.log("request url:",url);
        
        const response = await fetch(url , {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: { "Content-type": "application/json" },
            });
        console.log("request response:",response);
        
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        let data = await response.json();
        alert("Item added to cart");
        console.log(data);
      } catch (err) {
        alert(`Error: ${err.message}`);
        console.log(err);
      }
};

export default addToCart