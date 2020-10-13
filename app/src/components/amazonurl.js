import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

const getTargetURL = (book) => `${book.amazon_url}?tag=vishnuks-20`;

const AmazonURL = ({ book }) => (
  <OutboundLink href={getTargetURL(book)} target="_blank">
    <img
      alt="Amazon link"
      style={{ marginBottom: '-8px' }}
      src="https://img.icons8.com/color/48/000000/amazon.png"
    />
  </OutboundLink>
);

AmazonURL.propTypes = {
  book: PropTypes.shape(),
};

AmazonURL.defaultProps = {
  book: {},
};

export default AmazonURL;
