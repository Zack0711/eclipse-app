import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from '../components/map'

if(process.browser){
  window.IS_MAP_READY = false
  window.initMap = () => {
      console.log('initMap')
      IS_MAP_READY = true
  }   
}

const IndexPage = () => (
  <Layout>
    <SEO title="Eclipse App" />
    <Map />
  </Layout>
)

export default IndexPage
