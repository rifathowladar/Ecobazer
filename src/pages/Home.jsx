import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../components/layout/Container'
import Banner from '../components/home/Banner'
import FeatureBanner from '../components/home/FeatureBanner'
import ProductShowcase from '../components/home/ProductShowcase'
import PopularProduct from '../components/home/PopularProduct'
import LatestNews from '../components/home/LatestNews'
import Review from '../components/home/Review'
import { Link } from 'react-router'
import discountbannar from '../assets/image/discountbannar.webp'
import BestDeals from '../components/home/BestDeals'
import VenoBox from '../components/home/VenoBox'
import HotDeals from '../components/home/HotDeals'
import CompanyLogo from '../components/home/CompanyLogo'

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
      <ProductShowcase
        allData={allPro.slice(0, 12)}
        title="Deals"
        link="/deals"
        hover="true"
      />
      {/* Popular Products */}
      <PopularProduct title="Popular Products" products={allPro.slice(0, 10)} link="/products" />
      <BestDeals />
      {/* Discount Bannar */}
      <Container><Link to="#"><img src={discountbannar} alt="discountbannar" /></Link></Container>
      {/* Featured Products */}
      <PopularProduct title="Featured Products" products={allPro.slice(0, 5)} link="/products" />
      <LatestNews />
      {/* HotDeals */}
      <HotDeals title="Hot Deals" products={allPro.slice(0, 12)} />
      <Review />
      <CompanyLogo />
      <VenoBox />
    </>
  )
}

export default Home ;
