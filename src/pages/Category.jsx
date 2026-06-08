import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductShowcase from './home/ProductShowcase'

const Category = () => {
    let [allPro,setAllPro] = useState([])

    useEffect(()=>{
        async function allPro() {
        let proData = await axios.get('https://dummyjson.com/products/categories')
        setAllPro(proData.data);
        }
        allPro()
    }, [])

  return (
    <div className="my-10">
        <ProductShowcase allData={allPro}/>
    </div>
  )
}

export default Category