import React, { useState } from "react";
import { Snackbar } from "react-native-paper";
import { FlatList, View } from "react-native";
import FieldSearchBar from "@components/Field/FieldSearchBar/FieldSearchBar";
import ProductCard from "@components/Product/ProductCard";
import productData from "@data/products";

const NUM_COLUMNS = 2;
const BLANK_COMPONENT = { id: "blank", empty: true, name: "" };

const formatData = (productData) => {
  return productData.length % 2
    ? [...productData, BLANK_COMPONENT]
    : [...productData];
};
const refactoredProductData = formatData(productData);
const ProductList = () => {
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(refactoredProductData);
  const onChangeSearch = (query) => setSearchQuery(query);
  const filterProductByName = () => {
    const MIN_SEARCH_LENGTH = 3;
    if (!searchQuery || searchQuery.length < MIN_SEARCH_LENGTH) return;
    const filteredProducts = products.filter((product) => {
      return product.name.toUpperCase() === searchQuery.toUpperCase();
    });
    if (filteredProducts.length === 0) {
      setProducts(refactoredProductData);
      setVisible(true);
    } else {
      setProducts(
        filteredProducts.length === 1
          ? [...filteredProducts, BLANK_COMPONENT]
          : filteredProducts
      );
    }
  };
  return (
    <>
      <View style={{ paddingHorizontal: 15 }}>
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <FieldSearchBar
            placeholder="Buscar producto"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onIconPress={filterProductByName}
          />
        </View>
        <FlatList
          ListHeaderComponent={() => <View style={{ paddingTop: 15 }}></View>}
          data={products}
          renderItem={({ item }) => <ProductCard info={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={NUM_COLUMNS}
          contentContainerStyle={{
            paddingBottom: 70,
          }}
        />
      </View>
      <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
        Producto no encontrado
      </Snackbar>
    </>
  );
};

export default ProductList;
