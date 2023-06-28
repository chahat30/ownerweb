import { React, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Category from "./Category";
import Spinner from "./Spinner";
import "../css/menu.css";

export default function Menu() {
    
    let [categoryArray, setCategoryArray] = useState([])
    let [productArray, setProductArray] = useState([])
    const [loadingCat, setLoadingCat] = useState(false)
    const [loadingPro, setLoadingPro] = useState(false)
    // let [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(() => {
        async function fetchData () {
            setLoadingCat(true);
            setLoadingPro(true);
            const response = await fetch(`https://flavr.tech/products/getAllCategories?outletid=${localStorage.getItem('selectedOutlet')}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const json = await response.json()
            setLoadingCat(false);
            setCategoryArray(json.categories)

            const response1 = await fetch(`https://flavr.tech/products/getAllProdsAllCats?outletid=${localStorage.getItem('selectedOutlet')}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const json1 = await response1.json()
            setLoadingPro(false);
            setProductArray(json1.categoryArray)
        }
        fetchData()
    },[])

    return (
        <div className="container-fluid my-5 main-div" style={{ padding: 0, margin: 0 }}>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <h2 className="categoryHead my-5">Categories </h2>
                <i className="fa-solid fa-circle-plus fa-2xl plus" style={{color: "#004932"}} ></i>
            </div>
            {loadingCat && <Spinner />}
            <div className="col container categoryContainer">
                <div className="categoryScroll">
                    {categoryArray.map((category) => {
                        return <div className="categoryButton" key={category.count.icon._id}>
                            <Category iconImage={category.count.icon.icon.url} head={category.category} />
                        </div>
                    })}
                </div>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <h2 className="categoryHead my-2" style={{paddingTop: "50px"}}>Products </h2>
            </div>
            {loadingPro && <Spinner />}
            {productArray.map((productWithCat) => {
                return <>
                    <div className="categoryName d-flex flex-row justify-content-start align-items-center">
                        <h2 className="categoryHead my-5">{productWithCat.category} </h2>
                        <i className="fa-sharp fa-solid fa-pen icon editIcon fa-lg"></i>
                    </div>
                    <div className="row">
                        {productWithCat.products.map((product) => {
                            return <div className="col-lg-6">
                                <MenuItem productImage={product.productImage.url} productName={product.productName} productPrice={product.price} description={product.description} />
                            </div>
                        })}
                    </div>
                </>
            })}

        </div>
    );
}