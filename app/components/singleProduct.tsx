import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
export const SingleProduct = () => {
  const router = useRouter();
  const products = [
    "product",
    "product",
    "product",
    "product",
    "product",
    "product",
    "product",
  ];
  const order = () => {
    router.push("order/ingredients");
  };
  return (
    <ScrollView horizontal style={styles.productCon}>
      {products.map((product, index) => (
        <TouchableOpacity onPress={order}>
          <View key={index} style={styles.product}>
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
                <Text style={styles.discountText}>Arabica</Text>
                <Text style={{ fontSize: 9, color: "#39260B" }}>
                  Lorem ipsum dolor sit amet cons{" "}
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
              <View style={{ marginTop: -95 }}>
                <Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <Path
                    d="M8.33416 1.27378C10.2917 -0.483333 13.3167 -0.424999 15.2022 1.46447C17.0877 3.35393 17.1525 6.36417 15.3988 8.3275L8.33325 15.4042L1.26782 8.3275C-0.485793 6.36417 -0.420243 3.34918 1.46447 1.46447C3.35131 -0.422374 6.37099 -0.485941 8.33416 1.27378ZM14.0225 2.64175C12.7732 1.38995 10.7563 1.33918 9.4475 2.51406L8.33491 3.5127L7.22175 2.51484C5.90915 1.33831 3.89588 1.39007 2.64297 2.64298C1.40152 3.88443 1.3392 5.87275 2.48327 7.186L8.33325 13.0453L14.1834 7.186C15.3279 5.87225 15.2658 3.88771 14.0225 2.64175Z"
                    fill="white"
                  />
                </Svg>
              </View>
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
