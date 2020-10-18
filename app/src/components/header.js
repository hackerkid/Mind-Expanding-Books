import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="mx-2 bg-red d-none d-lg-block custom-header" aria-labelledby='main-title'>
    <h4 className="d-flex justify-content-end" id="main-title" style={{ margin: 16 }}>
      <Link
        to="/"
        style={{
          textDecorationColor: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h4>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
