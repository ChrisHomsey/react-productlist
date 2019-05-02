import React from 'react';

// Components
import FilterableProductTable from './components/FilterableProductTable';

// Data
import data from './data/products';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
