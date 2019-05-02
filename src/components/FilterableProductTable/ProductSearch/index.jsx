import React from 'react';
import PropTypes from 'prop-types';

function ProductSearch(props) {
  const {
    handleInputChange,
    handleCheckBoxChange,
    searchQuery,
    onlyInStock,
  } = props;

  return (
    <div className="ProductSearch">
      <input
        name="searchQuery"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-bar"
      />
      <br />
      <input
        type="checkbox"
        name="onlyInStock"
        onChange={handleCheckBoxChange}
        checked={onlyInStock}
      />
      <span className="small">
        Only Show Products in Stock
      </span>
    </div>
  );
}

ProductSearch.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleCheckBoxChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onlyInStock: PropTypes.bool.isRequired,
};

export default ProductSearch;
