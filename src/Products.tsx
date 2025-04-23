import { useEffect, useState } from "react";

//Interface för hur en produkt ska se ut:
interface Product {
    id: string,
    productName: string
}

function Products() {

    //State för vad som finns i listan med produkter:
    const [products, setProducts] = useState<Product[]>([]);

    //useEffect som vid sidladdning hämtar produkter från db.json och lagrar dem i listan:
    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    })

    return (
        <div>
            <h3>Products</h3>
            {/* Mappar produkterna i listan till varsin div för att rendera produktnamnen: */}
            {products.map((product: Product) => (
                    <div key={product.id}>{product.productName}</div>
                ))}
        </div>
    );
}

export default Products;