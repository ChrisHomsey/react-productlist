import React from 'react';
import PropTypes from 'prop-types';

function ProductTable(props) {
  const { children } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {children}
      </tbody>
    </table>
  );
}

ProductTable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProductTable;
