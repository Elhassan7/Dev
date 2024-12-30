import { useEffect, useState } from "react"
import Product from "./Product"

export default function ProductList(){
    const [productList, setProductList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [CategoriesList,setCategoriesList] = useState([])

    const productTemp =  productList.filter(prod => {
        return prod.title.split(" ").some(word => word.includes(searchInput)) 
        || prod.id.toString().includes(searchInput)
    })

    const displayCategories= () =>{
        if(CategoriesList.length > 0){            
            const CategoriesListTemp = CategoriesList.map((categorie ,key)=> {
                return   <button className="btn btn-secondary" key= {key} name={categorie} onClick={handleCategories}>{categorie}</button>
            })
        console.log(CategoriesListTemp)
        return <div className="btn-group">{CategoriesListTemp}</div>
        } 
    }

    const displayProduct = () =>{
        if(productTemp.length > 0){
            return productTemp.map((prod ,key)=> {
                return <Product product={prod} key={key}/>
            })
        }
        
    }
        

    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
                        .then(resp => resp.json())
                        .then(resp => setProductList(resp))
    }

    const getCategories = () =>{
        fetch('https://fakestoreapi.com/products/categories')
                .then(resp => resp.json())
                .then(resp => setCategoriesList(resp))
    }

    const getCategory = (category) =>{
        fetch('https://fakestoreapi.com/products/category/'+category)
                .then(resp => resp.json())
                .then(resp => setProductList(resp))
    }

    useEffect(()=>{
        getProducts()
        getCategories()
    },[]);

    const handleSearch= (e) => {
        e.preventDefault()
        const searchValue = document.querySelector('#Search').value
        setSearchInput(searchValue)
    };

    const handleCategories= (e) => {
        e.preventDefault()
        const categ = e.target.name
        getCategory(categ)
    };

    return <div className="Conatiner-fluix mx-auto w-75 my-3">
        <h2>Search:</h2>
        <div className="row g-3 align-items-center">
            <form >
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label>Search</label>
                    </div>

                    <div className="col-auto">
                        <input type="text" name="" id="Search" class="form-control"/>
                    </div>

                    <div className="col-auto">
                        <input className="btn btn-primary" type="submit" value='Search' onClick={handleSearch}/>
                    </div>
                </div>
            </form>
            {displayCategories()}
        </div>
        <hr />

        

        <h1>List of Products:</h1>
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
                </tr>
            </thead>
            <tbody>
             {displayProduct()}
            </tbody>
        </table>
    </div>
}