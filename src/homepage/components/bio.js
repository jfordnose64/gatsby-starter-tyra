import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'tachyons'

export default () => (
  <div className="pv5 pa2 flex flex-wrap mw9 center justify-around items-center">
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "img/author.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          copy: markdownRemark(frontmatter: { name: { eq: "homepage__bio" } }) {
            html
            frontmatter {
              title
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="The Author"
            className="w-100 mw6"
          />
          <div class="w-100 pa2 mw6 mv4">
            <span className="db f2 display dark-gray">Hello!</span>
            <div className="lh-copy f5 serif mt4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum id turpis ut lectus semper molestie eget ac ex. Aliquam
              sodales, sem at laoreet aliquet, erat massa ultricies purus, ut
              efficitur odio velit vel elit.
            </div>
          </div>
        </React.Fragment>
      )}
    />
  </div>
)
