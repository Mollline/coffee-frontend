import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import {
  Product,
  useEditUserMutation,
  useGetAllProductsQuery,
} from "@/generated";
import { useAppContext } from "@/context/DataContext";

export const SingleProduct: React.FC = () => {
  const router = useRouter();
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const { users, product, setProduct } = useAppContext(); // Access context data here

  const { data, loading, error } = useGetAllProductsQuery();
  const [editUserMutation] = useEditUserMutation();

  useEffect(() => {
    if (data?.getAllProducts) {
      setProducts(data.getAllProducts);
    }
  }, [data]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.log(error);
    return <Text>Error loading products</Text>;
  }
  const handlePress = (productId: number) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  const editUserFav = async (product: Product) => {
    const selectedUser = users[0]; // Assuming the first user is the one to update

    console.log("Product ID:", product.id);

    if (!selectedUser) {
      console.error("No user selected for updating.");
      return;
    }

    try {
      await editUserMutation({
        variables: {
          input: {
            favorites: [product.id], // Ensure correct ID format
            avatar: selectedUser.avatar,
            fullName: selectedUser.fullName,
            email: selectedUser.email,
            password: selectedUser.password,
          },
        },
      });
    } catch (err) {
      console.error("Error updating favorites:", err);
    }
  };

  const order = (product: Product) => {
    console.log(product);
    setProduct(product);
    router.push("order/ingredients");
  };

  return (
    <ScrollView horizontal style={styles.productCon}>
      {products.map((product: Product) => (
        <TouchableOpacity key={product.id} onPress={() => order(product)}>
          <View style={styles.product}>
            <View
              style={{ width: 95, height: 81, backgroundColor: "white" }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ width: 101, gap: 10 }}>
                <Text style={styles.discountText}>{product.name}</Text>
                <Text style={{ fontSize: 9, color: "#39260B" }}>
                  {product.description}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: "#39260B",
                  fontWeight: "bold",
                  marginRight: -40,
                }}
              >
                $15
              </Text>
              <TouchableOpacity
                onPress={() => {
                  handlePress(product.id);
                  editUserFav(product);
                }}
                style={{ marginTop: -90 }}
              >
                <Svg width="17" height="15" viewBox="0 0 17 15" fill="none">
                  <Path
                    d="M8.33417 1.27378C10.2917 -0.483333 13.3167 -0.424999 15.2022 1.46447C17.0877 3.35393 17.1525 6.36417 15.3988 8.3275L8.33325 15.4042L1.26782 8.3275C-0.485793 6.36417 -0.420243 3.34918 1.46447 1.46447C3.35131 -0.422374 6.37099 -0.485941 8.33417 1.27378Z"
                    fill={
                      selectedProducts.includes(product.id) ? "red" : "white"
                    }
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  discountText: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "600",
    color: "white",
  },
  product: {
    width: 166,
    height: 179,
    backgroundColor: "#CE9760",
    borderRadius: 7,
    alignItems: "center",
    padding: 7,
    gap: 13,
    marginRight: 20,
  },
  productCon: {
    paddingBottom: 20,
  },
});
