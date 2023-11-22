import React from 'react'
import styled from 'styled-components'
import HeroSection from '../HeroSection'

const Home = () => {
  const data={
    name: 'Ecom Store'
  }
  return (
    <HeroSection data={data} />
  )
}
const Wrapper= styled.section`
  .home-class{
    background-color: ${({theme})=> theme.colors.bg};
    width: 10rem;
    height: 10rem;
  }
`
export default Home