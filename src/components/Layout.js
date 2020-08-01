import React from 'react'
import { Helmet } from 'react-helmet'
//import Footer from '../components/Footer'
//import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      {/* <Navbar /> */}
      <ParallaxProvider><div>{children}</div></ParallaxProvider>
      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper
