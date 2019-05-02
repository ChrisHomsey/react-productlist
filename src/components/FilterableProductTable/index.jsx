import React, { Component } from 'react';

// Components
import ProductSearch from './ProductSearch';
import ProductTable from './ProductTable';
import CategoryRow from './ProductTable/CategoryRow';
import ProductRow from './ProductTable/ProductRow';

// Style
import './FilterableProductTable.css';

// Data
import data from '../../data/products';

// Util
import utilities from '../../utilities/productFilterUtilities';

class FilterableProductTable extends Component {
  state = {
    products: [],
    searchQuery: '',
    onlyInStock: false,
  }

  componentDidMount = () => {
    this.setState({
      products: data,
    }, () => {
      // eslint-disable-next-line no-console
      console.log(this.state);
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked,
    });
  }

  filterProducts = () => {
    const {
      products,
      onlyInStock,
    } = this.state;

    let { searchQuery } = this.state;

    // Makes sure that case is ignored in search filter
    searchQuery = searchQuery.toLowerCase();

    // Applies filter by stocked (if onlyInStock is true)
    // Applies filter by product name includes searchQuery
    return products.filter(product => (
      (onlyInStock ? product.stocked : true)
      && product.name.toLowerCase().includes(searchQuery)
    ));
  }

  renderList = () => {
    const { products } = this.state;
    const { createCategoryCollections } = utilities;

    // Get an array of products that have been filtered by the method filterProducts()
    const filteredProducts = this.filterProducts(products);
    const categoryCollections = createCategoryCollections(filteredProducts);

    // ListElements is the array of all CategoryRow and ProductRow components to be rendered
    let listElements = [];

    // For each category, we will create a CategoryRow and add it to listElements
    categoryCollections.map((collection) => {
      const catEl = (
        <CategoryRow
          key={collection.name}
          name={collection.name}
        />
      );
      listElements = [...listElements, catEl];

      // We then create a list of ProductRows and add it to listElements
      collection.products.map((product) => {
        const el = (
          <ProductRow
            key={product.name}
            name={product.name}
            price={product.price}
            stocked={product.stocked}
          />
        );

        listElements = [...listElements, el];
        return null;
      });
      return null;
    });

    return listElements;
  }

  render() {
    const {
      searchQuery,
      onlyInStock,
    } = this.state;

    const {
      handleInputChange,
      handleCheckBoxChange,
    } = this;

    const productMarkup = this.renderList();

    return (
      <div className="FilterableProductTable">
        <ProductSearch
          searchQuery={searchQuery}
          onlyInStock={onlyInStock}
          handleInputChange={handleInputChange}
          handleCheckBoxChange={handleCheckBoxChange}
        />
        <ProductTable>
          {productMarkup}
        </ProductTable>
      </div>
    );
  }
}
export default FilterableProductTable;
