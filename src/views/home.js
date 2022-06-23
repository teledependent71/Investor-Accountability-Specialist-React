import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Accountability Specialist</title>
        <meta
          property="og:title"
          content="Investor Accountability Specialist"
        />
      </Helmet>
    </div>
  )
}

export default Home
