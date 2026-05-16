import { Product } from "./components/Product/Product";
import { products } from "./data/products";
import "./App.css";

function App() {
    return (
        <>
            <header className="shop-header">
                <h1>Мій React Магазин</h1>
            </header>

            <main className="products-container">
                {products.map((p) => (
                    <Product
                        key={p.id}
                        title={p.title}
                        price={p.price}
                        img={p.img}
                    />
                ))}
            </main>
        </>
    );
}

export default App;