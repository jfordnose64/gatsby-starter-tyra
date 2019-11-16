import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            homepageHeader
            homepageAbout
          }
        }
      }
    `}
    render={data => (
      <div className="bg-washed-red flex flex-column justify-center items-center pa2 pv5">
        <h1 className="fw1 display db dark-gray f2 tc">
          Welcome to my website!
        </h1>
        <p className="f4 serif mw7 tc lh-copy">
          This is where you will put a small description of yourself! Sed
          eleifend mi nec fermentum luctus. Quisque lacinia orci ligula, quis
          porta nisl maximus sit amet. Cras sed libero sit amet urna dictum
          pharetra nec dapibus est. Nullam sed blandit arcu.
        </p>
        <Link
          to="/about"
          className="mt3 db no-underline ph5 pv3 sans-serif near-white bg-dark-gray ttu tracked b hover-bg-mid-gray"
        >
          About Kelly
        </Link>
      </div>
    )}
  />
)
