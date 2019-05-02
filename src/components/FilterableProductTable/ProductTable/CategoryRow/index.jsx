import React from 'react';
import PropTypes from 'prop-types';

function CategoryRow(props) {
  const { name } = props;
  return (
    <tr className="CategoryRow">
      <th className="CategoryRow">{name}</th>
    </tr>
  );
}

CategoryRow.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryRow;
