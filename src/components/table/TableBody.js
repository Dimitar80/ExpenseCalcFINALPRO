import React from "react";

import ProductRow from "./ProductRow";

const TableBody = props => {
  //   console.log(props.data);
  console.log(props);
  // console.log(props.showEdDel, props.del)
  return props.data.map(product => {
    return (
      <ProductRow
        key={product._id}
        productId={product._id}
        productName={product.productName}
        productType={product.productType}
        productDescription={product.productDescription}
        purchaseDate={product.purchaseDate.slice(0, 10)}
        productPrice={product.productPrice}
        EdDel={props.showEdDel}
        del={props.del}
      />
    );
  });
};

export default TableBody;