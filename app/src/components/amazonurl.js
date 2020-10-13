import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const propTypes = {
  book: {},

};

const getTargetURL = (book) => `${book.amazon_url}?tag=vishnuks-20`;

export default () => (
  <OutboundLink href={getTargetURL(propTypes.book)} target="_blank">
    <img alt="Amazon link" style={{ marginBottom: '-8px' }} src="https://img.icons8.com/color/48/000000/amazon.png" />
  </OutboundLink>
);
