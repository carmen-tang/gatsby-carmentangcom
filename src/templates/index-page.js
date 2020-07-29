import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'
import '../scss/main.scss'

import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

const ParallaxHeading = () => (
  <Parallax className="custom-class" x={[10, 40]} y={[2000, 20]} tagOuter="figure">
      <h1 className="head heading--stroke-shadow">carmentang.io</h1>
  </Parallax>
);

export const IndexPageTemplate = () => (
  <div>
    <div
      style={{
        display: 'flex',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
      }}
    >
      <ParallaxHeading />
    </div>
    <div
      className="hero-image"
      style={{
        backgroundImage: `url('../img/pastel.jpg')`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `600px`
      }}
    ></div>
    {/* <BlogRoll /> */}
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
