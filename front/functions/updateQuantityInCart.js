const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const updateQuantityInCart = async (itemId, newQuantity) => {
    try {
        await checkStockAndUpdateQuantity(itemId, newQuantity);

        const response = await fetch(`${host}:${port}/cart/updateQuantity/${itemId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: newQuantity }),
        });

        if (!response.ok) {
            throw new Error(`Erreur lors de la mise à jour de la quantité dans la table Cart. Status: ${response.status}`);
        }
    } catch (error) {
        console.log("Erreur lors de la mise à jour de la quantité dans le panier :", error);
        throw error;
    }
};

export default updateQuantityInCart;