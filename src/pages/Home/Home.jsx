import React from 'react'
import Layout from '../Layout/Layout';
import Hero from '../../components/Hero/Hero'
import Blog from '../../components/Blog/Blog'
import OurTeam from '../../components/OurTeam/OurTeam';

const Home = () => {
  return (
    <Layout>
       <Hero />
       <Blog />
       <OurTeam />
    </Layout>
  )
}

export default Home