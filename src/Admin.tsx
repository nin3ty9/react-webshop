import { useState } from "react";

function Admin() {
//Sträng-array för att lagra nya producter från formuläret:
    const [newProduct, setNewProduct] = useState<string>("")

//Funktion för att spara nya produkter på form-submit:
    const saveProduct = (e:React.FormEvent<HTMLFormElement>) => {
        //Stoppar sidan från att laddas om:
        e.preventDefault();
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({productName: newProduct})
        })
        .then(() => setNewProduct(""))//Tömmer textfältet
    }
    
    return (
        <div>
            <h3>Admin</h3>

            {/* Textfält med lyssnare som lagrar binder värdet vi skriver in till newProduct via setNewProduct: */}
            <form onSubmit={saveProduct}>
                <input type="text" value={newProduct} onChange={((e) => setNewProduct(e.target.value))}></input>
                <button>Spara produkt</button>
            </form>

        </div>
    );
}

export default Admin;