import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../../components/layout/Container'
import Banner from './Banner'
import FeatureBanner from './FeatureBanner'
import ProductShowcase from './ProductShowcase'
import PopularProduct from './PopularProduct'
import LatestNews from './LatestNews'
import Review from './Review'
import { Link } from 'react-router'
import discountbannar from '../../assets/image/discountbannar.webp'
import companyLogo from '../../assets/image/companyLogo.webp'
import BestDeals from './BestDeals'
import VenoBox from './VenoBox'

const Home = () => {
  const [allPro, setAllPro] = useState([])
  const [allCat, setAllCat] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, proRes] = await Promise.all([
          axios.get('https://dummyjson.com/products/categories'),
          axios.get('https://dummyjson.com/products'),
        ])

        setAllCat(catRes.data.slice(0, 12))
        setAllPro(proRes.data.products)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Banner />
      <FeatureBanner />
      {/* Popular Categories */}
      <ProductShowcase title="Popular Categories" allData={allCat} link="/category" />
      <ProductShowcase title="Popular Products" allData={allPro.slice(0, 12)} link="/products" />
      {/* Popular Products */}
      <PopularProduct title="Popular Products" products={allPro.slice(0, 10)} link="/products" />
      <BestDeals />
      {/* Discount Bannar */}
      <Container><Link to="#"><img src={discountbannar} alt="discountbannar" /></Link></Container>
      {/* Featured Products */}
      <PopularProduct title="Featured Products" products={allPro.slice(0, 5)} link="/products" />
      <LatestNews />
      <Review />
      <Container><Link to="#"><img src={companyLogo} alt="companyLogo" /></Link></Container>
      <VenoBox />
    </>
  )
}

export default Home
