import React, { Component } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import ProductItem from './ProductItem/ProductItem'
import ProductList from './ProductList/ProductList'
import Slider from './Slider/Slider'
import "./style.css"

export default class BaiTapDungLayout extends Component {
  render() {
    return (
     <div>
         <Header />
         <Slider/>
         <ProductList/>
         {/* <ProductItem/> */}
         <Footer/>
     </div>


    )
  }
}
