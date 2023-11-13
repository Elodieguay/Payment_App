
const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const addToCart = async (id) => {
    try {   

        // Vérification de l'article dans la table cart
        const response = await fetch(`${host}:${port}/checkcart`);
        const cartData = await response.json();
        
        // Vérification si l'article est déjà dans la table cart
        const existingItem = cartData.find(item => item.id === id);
        
        if (existingItem) {
            
            // Mise à jour de la quantité dans la table cart
            const url = `${host}:${port}/updatequantity/${existingItem.id}?type=inc`;
            await fetch(url, {
                method: 'PUT',
            });
            
            setCartItems(prevItems => prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
                
        } else {
            const dataToSend = {
                productId: id,
            };

               
        const url = `${host}:${port}/addcart`
        
        const response = await fetch(url , {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: { "Content-type": "application/json" },
            });
        
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        let data = await response.json();
        // console.log(data);
        
        }
      } catch (err) {
        alert(`Error: ${err.message}`);
        console.log(err);
      }
};

export default addToCart