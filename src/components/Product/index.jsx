import React from "react";
import { List } from "react-native-paper";
import styles from "./ViewProduct.style";
import LayoutFrame from "@components/Layout/LayoutFrame";

const ViewProduct = () => {
  const styleSheet = styles();

  const array = [1, 2, 3];
  return (
    <LayoutFrame>
      {array.map((value) => (
        <List.Item
          key={value}
          style={styleSheet.container}
          title="Producto 1"
          description="$ 50.000"
        />
      ))}
    </LayoutFrame>
  );
};

export default ViewProduct;
