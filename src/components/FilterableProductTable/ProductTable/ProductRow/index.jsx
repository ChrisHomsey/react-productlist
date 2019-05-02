import React from 'react';
import PropTypes from 'prop-types';

function ProductRow(props) {
  const { name, price, stocked } = props;
  return (
    <tr>
      <td className={!stocked ? 'out-of-stock' : undefined}>
        {name}
      </td>
      <td>{price}</td>
    </tr>
  );
}

ProductRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stocked: PropTypes.bool.isRequired,
};

export default ProductRow;
