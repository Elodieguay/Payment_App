const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const checkStockAndUpdateQuantity = async (itemId, newQuantity) => {
    try {
        const stockResponse = await fetch(`${host}:${port}/stock/${itemId}`);
        console.log("stockresponse:",stockResponse);
        const stockData = await stockResponse.json();
        console.log("stockdata:",stockData);

        if (!stockData || stockData.stock === undefined) {
            console.error("Les données du stock ne sont pas disponibles.");
            return;
        }
        const availableStock = stockData.stock;
        console.log("availablestock:", availableStock);
        
        if (newQuantity > availableStock) {
            alert("La quantité dépasse le stock disponible.");
            return;
        }

        return stockData;
    } catch (error) {
        console.log("Erreur lors de la vérification du stock avant la mise à jour de la quantité :", error);
        throw error;
    }
};

export default checkStockAndUpdateQuantity;