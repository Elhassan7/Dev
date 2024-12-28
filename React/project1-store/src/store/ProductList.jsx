import { useEffect, useState } from "react"
import Product from "./Product"

export default function ProductList(){
    const [productList, setProductList] = useState([])

    const displayProduct = () =>{
        return productList.map((prod ,key)=> {
            return <Product product={prod} key={key}/>
        })
    }
        

    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
                        .then(resp => resp.json())
                        .then(resp => setProductList(resp))
    }

    useEffect(()=>{
        return getProducts();
    },[]);



    return <div className="Conatiner-fluix mx-auto w-75 my-3">
        <h1>List of Product:</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rating</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
             {displayProduct()}
            </tbody>
        </table>
    </div>
}