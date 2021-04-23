import React, { useState, useContext } from "react";
import { Snackbar } from "react-native-paper";
import { FlatList, View, Pressable } from "react-native";
import { ShoppingCartContext } from "@providers/ShoppingCart";
import FieldSearchBar from "@components/Field/FieldSearchBar/FieldSearchBar";
import ProductCard from "@components/Product/ProductCard";
import ButtonCount from "@components/Button/ButtonCount";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProductsStorageContext } from "@providers/ProductsStorage";
import { routes, subRoutes } from "@routes/private";
import { useNavigation } from "@react-navigation/native";

const NUM_COLUMNS = 2;
const BLANK_COMPONENT = { id: "blank", empty: true, name: "" };

const formatData = (productData) => {
  return productData.length % 2
    ? [...productData, BLANK_COMPONENT]
    : [...productData];
};
const ProductList = () => {
  const {
    products: productsDB
  } = useContext(ProductsStorageContext);
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(formatData(productsDB));
  const { updateProduct, products: shoppingList } = useContext(
    ShoppingCartContext
  );
  const navigation = useNavigation();
  const onChangeSearch = (query) => setSearchQuery(query);
  const filterProductByName = () => {
    const MIN_SEARCH_LENGTH = 0;
    if (!searchQuery || searchQuery.length < MIN_SEARCH_LENGTH) {
      setProducts(formatData(productsDB));
      setVisible(true);
      return
    };
    const filteredProducts = products.filter((product) => {
      return product.name.toUpperCase() === searchQuery.toUpperCase();
    });

    if (filteredProducts.length === 0) {
      setProducts(formatData(productsDB));
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
        <View style={{ paddingTop: 15, paddingBottom: 15, flexDirection: 'row', alignItems: 'center' }}>
          <FieldSearchBar
            style={{ width: "83%" }}
            placeholder="Buscar producto"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onIconPress={filterProductByName}
            onSubmitEditing={filterProductByName}
          />
          <Pressable
            onPress={() =>
              navigation.navigate(routes.GENERAL_STACK, {
                screen: subRoutes.GENERAL_STACK.SCAN_BARCODE,
              })
            }>
            <View style={{
              backgroundColor: '#6739BF', borderRadius: 10, width: 45, height: 45,
              justifyContent: 'center', marginHorizontal: 15, alignItems: 'center', shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,
              elevation: 7,
            }}
            >
              <MaterialCommunityIcons name="barcode-scan" size={28} color="white" style={{}} />
            </View>
          </Pressable>
        </View>
        <FlatList
          ListHeaderComponent={() => <View style={{ paddingTop: 15 }}></View>}
          data={products}
          renderItem={({ item }) => (
            <ProductCard info={item} added={!!shoppingList[item.id]} disabled={item.amount === 0}>
              <ButtonCount
                count={shoppingList[item.id]?.count || 0}
                getCount={(count) => updateProduct(item, count)}
                limit={item.amount}
              />
            </ProductCard>
          )}
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