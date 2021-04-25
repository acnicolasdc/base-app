import React, { useState, useContext, useEffect } from "react";
import { Snackbar } from "react-native-paper";
import { FlatList, View, Pressable } from "react-native";
import { ShoppingCartContext } from "@providers/ShoppingCart";
import FieldSearchBar from "@components/Field/FieldSearchBar/FieldSearchBar";
import ProductCard from "@components/Product/ProductCard";
import ButtonCount from "@components/Button/ButtonCount";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProductsStorageContext } from "@providers/ProductsStorage";
import { Feather } from '@expo/vector-icons';
import ScanBarcode from "@containers/ScanBarCode";
import { useNavigation } from "@react-navigation/native";

const NUM_COLUMNS = 2;
const BLANK_COMPONENT = { id: "blank", empty: true, name: "" };

const formatData = (productData) => {
  return productData.length % 2
    ? [...productData, BLANK_COMPONENT]
    : [...productData];
};
const ProductList = () => {
  const { products: productsDB } = useContext(ProductsStorageContext);
  const [visible, setVisible] = useState(false);
  //const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(formatData(productsDB));
  const [camera, setCamera] = useState(false);
  const [qr, setQr] = useState("");
  const { updateProduct, products: shoppingList } = useContext(
    ShoppingCartContext
  );
  useEffect(() => {
    setProducts(formatData(productsDB));
  }, [productsDB]);

  useEffect(() => {
    if(qr !== ""){
      const getProduct=products.find(product=>product.qr === qr)
      if(getProduct){
        setProducts(formatData([getProduct]))
        setQr("")
      }
    }
  }, [qr]);

  const navigation = useNavigation();
  //const onChangeSearch = (query) => setSearchQuery(query);
  const filterProductByName = (searchQuery) => {
    const MIN_SEARCH_LENGTH = 0;
    if (!searchQuery || searchQuery.length < MIN_SEARCH_LENGTH) {
      setProducts(formatData(productsDB));
      setVisible(true);
      return;
    }
    const filteredProducts = filter(searchQuery)

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



  const filter = (searchQuery) => {
    const searchRE = new RegExp(searchQuery, "i");
    return products
      .filter(
        ({ name }) =>
          name.match(searchRE) 
      )
      .slice(0, 15);
  };
  
  return (
    <>
      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            paddingTop: 15,
            paddingBottom: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FieldSearchBar
            style={{ width: "63%" }}
            placeholder="Buscar producto"
            onChangeText={filterProductByName}
            //value={searchQuery}
            onIconPress={filterProductByName}
            onSubmitEditing={filterProductByName}
          />
          <Pressable
            onPress={() => setCamera(true)}
          >
            <View
              style={{
                backgroundColor: "#6739BF",
                borderRadius: 10,
                width: 45,
                height: 45,
                justifyContent: "center",
                marginHorizontal: 15,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
              }}
            >
              <MaterialCommunityIcons
                name="barcode-scan"
                size={28}
                color="white"
                style={{}}
              />
            </View>
          </Pressable>
          
          <Pressable
            onPress={() => filterProductByName('')}
          >
            <View
              style={{
                backgroundColor: "#6739BF",
                borderRadius: 10,
                width: 45,
                height: 45,
                justifyContent: "center",
                marginHorizontal: 0,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
              }}
            >
              <Feather name="x-square" size={24} color="white" />
            </View>
          </Pressable>

        </View>
        <FlatList
          ListHeaderComponent={() => <View style={{ paddingTop: 15 }}></View>}
          data={products}
          renderItem={({ item }) => (
            <ProductCard
              info={item}
              added={!!shoppingList[item.id]}
              disabled={item.amount === 0}
            >
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
      <ScanBarcode
        open={camera}
        goBack={() => setCamera(false)}
        getData={({ type, data }) => {
        setQr(data);
        console.log(data)
        }}
      />
    </>
  );
};

export default ProductList;
