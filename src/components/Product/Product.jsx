import { useState } from "react";

export const Product = (props) => {

    const { title, price, img } = props;

    const [count, setCount] = useState(0);

    const handleBuy = () => {
        setCount(count + 1);
    };

    return (
        <div className="product">
            <img src={img} alt={title} width="150" />
            <h2>{title}</h2>
            <p>Ціна: {price} грн</p>
            <p>Куплено разів: <strong>{count}</strong></p>
            <button onClick={handleBuy}>Купити</button>
        </div>
    );
};