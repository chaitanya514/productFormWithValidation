import React,{useState} from "react";
import "./index.css"

export default function Product({details}){
    const [count,setCount] = useState(0);
    function handleDecrementClick(){
        setCount(count-1)

    }
    function handleIncrementClick(){
        setCount(count+1)

    }

    return <div className="product">
        <div className="product-info">
            <h2>{details.name}</h2>
            <p>{details.details}</p>
        </div>
        <div className="product-buttons">
            <button className="product-sub" disabled={count === 0} onClick={handleDecrementClick}>-</button>
            <h3 className="product-count">{count ? count : ""}</h3>
            <button className="product-add" onClick={handleIncrementClick}>+</button>
        </div>
    </div>

}
