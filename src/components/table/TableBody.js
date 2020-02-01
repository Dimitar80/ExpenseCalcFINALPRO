import React from "react";
import ProductRow from "./ProductRow";
import NoDataFound from "../table/NoData";

const TableBody = props => {
  // console.log("Table Body loading", props.dataLoading);
  // console.log(props);
  if (props.dataLoading) {
    return <NoDataFound message={"Loading..."} />;
  }
  if (props.data.length !== 0) {
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
          del={props.delBtnOpen}
          ppR={props.pp}
          pdR={props.pd}
        />
      );
    });
  } else {
    return (
      <NoDataFound
        message={
          "No data was found for this request - Year/Month, Please choose another one!"
        }
      />
    );
  }
};

export default TableBody;

// const TableBody = props => {
//   console.log(props.data);
//   // console.log(props);
//   return props.data.map(product => {
//     return (
//       <ProductRow
//         key={product._id}
//         productId={product._id}
//         productName={product.productName}
//         productType={product.productType}
//         productDescription={product.productDescription}
//         purchaseDate={product.purchaseDate.slice(0, 10)}
//         productPrice={product.productPrice}
//         EdDel={props.showEdDel}
//         del={props.delBtnOpen}
//       />
//     );
//   });
// };
