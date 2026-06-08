import React, { useEffect, useState } from 'react'
import Container from '../../components/layout/Container'
import Banner from './Banner'
import FeatureBanner from './FeatureBanner'
import ProductShowcase from './ProductShowcase'
import axios from 'axios'

const Home = () => {
  let [allPro,setAllPro] = useState([])
  let [allCat,setAllCat] = useState([])

  useEffect(()=>{
    async function allPro() {
      let proData = await axios.get('https://dummyjson.com/products/categories')
      setAllCat(proData.data.slice(0,12));
    }
    allPro()
  },[])
  useEffect(()=>{
    async function allPro() {
      let proData = await axios.get('https://dummyjson.com/products')
      setAllPro(proData.data.products.slice(0,12));
    }
    allPro()
  },[])

  return (
    <Container>
      <Banner/>
      <FeatureBanner />
      <ProductShowcase allData={allCat}/>
      <ProductShowcase allData={allPro}/>
    </Container>
  )
}

export default Home







