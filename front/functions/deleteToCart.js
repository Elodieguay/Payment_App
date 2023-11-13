const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const deleteToCart= async (cartId) => {
    try {
      const response = await fetch(`${host}:${port}/remove/${cartId}`, {
        method: "DELETE",
      });
      console.log("delete response:", response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      alert("Article supprimé du panier");
      window.location.reload();


    } catch (error) {
      alert(`Error: ${error.message}`);
      console.log("requete probleme",error);
    }
  };
export default deleteToCart