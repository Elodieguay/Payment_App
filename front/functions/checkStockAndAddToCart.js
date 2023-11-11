const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const checkStockAndAddToCart = async (itemId, quantity, availableStock) => {
    try {
        if (quantity > availableStock) {
            alert("La quantité dépasse le stock disponible.");
            return;
        }

        const dataToSend = { productId: itemId };

        const response = await fetch(`${host}:${port}/addcart`, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: { "Content-type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        alert("Article ajouté au panier");
        console.log(data);
    } catch (error) {
        alert(`Error: ${error.message}`);
        console.log(error);
    }
};

export default checkStockAndAddToCart;