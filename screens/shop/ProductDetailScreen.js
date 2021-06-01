import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";
import Colors from "../../constants/Colors";

import { useSelector } from "react-redux";

const ProductDetailScreen = (props) => {
  const productClicked = props.navigation.getParam("clickedProduct");

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: productClicked.item.imageUrl }}
      />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
      </View>
      <Text style={styles.price}>${productClicked.item.price.toFixed(2)}</Text>
      <Text style={styles.description}>{productClicked.item.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("clickedProduct").item.title,
  };
};

const styles = StyleSheet.create({
  image: { width: "100%", height: 300 },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;

