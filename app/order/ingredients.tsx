import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import SliderDemo from "../components/slider";
import { useAppContext } from "@/context/DataContext";
import { useCreateOrderMutation } from "@/generated";
interface ProductInput {
  productId: string;
  quantity: number;
  size: string;
}

interface CreateOrderInput {
  milkAmount: number;
  product: ProductInput;
  promotionCode: string;
  state: string;
  user: string;
}

export default function HomeScreen() {
  const [selectedSize, setSelectedSize] = useState();
  const [number, setNumber] = useState(0);
  const [size, setSize] = useState("");
  const [value, setValue] = React.useState<number>(50);
  const { product, setProduct, users } = useAppContext();
  console.log(users[0]);
  console.log(value);

  const [createOrderMutation] = useCreateOrderMutation();

  const add = () => {
    setNumber(number + 1);
  };
  const sub = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  const productId = product.id;
  const router = useRouter();
  const addToCart = async () => {
    try {
      const { data } = await createOrderMutation({
        variables: {
          input: {
            milkAmount: value,
            product: {
              productId: productId,
              quantity: number,
              size: size,
            },
            promotionCode: "",
            state: "in progress",
            user: users[0].id,
          },
        },
      });

      if (data) {
        router.push("order/finalizeOrder");
      }
    } catch (err) {
      console.error("Error creating order:", err);
    }
  };
  const small = () => {
    setSize("small");
  };
  const medium = () => {
    setSize("medium");
  };
  const large = () => {
    setSize("large");
  };
  return (
    <View style={{ height: "100%" }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={{ width: "100%", height: "100%" }}
        />
        <View style={styles.overlay}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Svg width="11" height="18" viewBox="0 0 11 18" fill="none">
              <Path
                d="M3.88905 8.75047L10.695 15.5563L8.7505 17.5008L0 8.75047L8.7505 0L10.695 1.94454L3.88905 8.75047Z"
                fill="#CE9760"
              />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.imageText}>{product.name}</Text>
          <Svg width="24" height="24" viewBox="0 0 17 16" fill="none">
            <Path
              d="M8.33416 1.27378C10.2917 -0.483333 13.3167 -0.424999 15.2022 1.46447C17.0877 3.35393 17.1525 6.36417 15.3988 8.3275L8.33325 15.4042L1.26782 8.3275C-0.485793 6.36417 -0.420243 3.34918 1.46447 1.46447C3.35131 -0.422374 6.37099 -0.485941 8.33416 1.27378ZM14.0225 2.64175C12.7732 1.38995 10.7563 1.33918 9.4475 2.51406L8.33491 3.5127L7.22175 2.51484C5.90915 1.33831 3.89588 1.39007 2.64297 2.64298C1.40152 3.88443 1.3392 5.87275 2.48327 7.186L8.33325 13.0453L14.1834 7.186C15.3279 5.87225 15.2658 3.88771 14.0225 2.64175Z"
              fill="white"
            />
          </Svg>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.container}>
          <Text style={styles.imageText}>ingredients</Text>
          <SliderDemo value={value} setValue={setValue} />
        </View>
        <View style={{ alignItems: "center", gap: 30 }}>
          <Text style={styles.imageText}>coffee size</Text>
          <View style={styles.size}>
            <TouchableOpacity style={styles.cont} onPress={small}>
              <View style={styles.small}>
                <Svg width="32" height="35" viewBox="0 0 32 35" fill="none">
                  <Path
                    d="M19.1667 3.16667H6.82451C5.88108 3.16667 5.06879 3.83257 4.88378 4.75768L3.61865 11.0833H0.166668V14.25H3.50552L5.67833 33.0811C5.79357 34.0797 6.63916 34.8333 7.64445 34.8333H24.3556C25.3608 34.8333 26.2065 34.0797 26.3216 33.0811L28.4944 14.25H31.8333V11.0833H28.3814L27.1163 4.75768C26.9312 3.83257 26.1189 3.16667 25.1754 3.16667H22.3333V0H19.1667V3.16667ZM25.152 11.0833H6.84802L7.79802 6.33333H24.202L25.152 11.0833ZM6.6932 14.25H25.3068L23.2973 31.6667H8.70281L6.6932 14.25Z"
                    fill="#543A20"
                  />
                </Svg>
              </View>
              <Text style={styles.textSize}>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cont} onPress={medium}>
              <View style={styles.medium}>
                <Svg width="51" height="55" viewBox="0 0 32 35" fill="none">
                  <Path
                    d="M19.1667 3.16667H6.82451C5.88108 3.16667 5.06879 3.83257 4.88378 4.75768L3.61865 11.0833H0.166668V14.25H3.50552L5.67833 33.0811C5.79357 34.0797 6.63916 34.8333 7.64445 34.8333H24.3556C25.3608 34.8333 26.2065 34.0797 26.3216 33.0811L28.4944 14.25H31.8333V11.0833H28.3814L27.1163 4.75768C26.9312 3.83257 26.1189 3.16667 25.1754 3.16667H22.3333V0H19.1667V3.16667ZM25.152 11.0833H6.84802L7.79802 6.33333H24.202L25.152 11.0833ZM6.6932 14.25H25.3068L23.2973 31.6667H8.70281L6.6932 14.25Z"
                    fill="#543A20"
                  />
                </Svg>
              </View>
              <Text style={styles.textSize}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cont} onPress={large}>
              <View style={styles.large}>
                <Svg width="71" height="77" viewBox="0 0 71 77" fill="none">
                  <Path
                    d="M42.4167 6.91667H15.4588C13.3981 6.91667 11.6239 8.37114 11.2198 10.3918L8.45653 24.2083H0.916672V31.125H8.20943L12.9553 72.256C13.207 74.4372 15.054 76.0833 17.2497 76.0833H53.7503C55.946 76.0833 57.7931 74.4372 58.0445 72.256L62.7904 31.125H70.0833V24.2083H62.5435L59.7803 10.3918C59.376 8.37114 57.6019 6.91667 55.541 6.91667H49.3333V0H42.4167V6.91667ZM55.4899 24.2083H15.5101L17.5851 13.8333H53.4149L55.4899 24.2083ZM15.172 31.125H55.8281L51.4388 69.1667H19.5614L15.172 31.125Z"
                    fill="#543A20"
                  />
                </Svg>
              </View>
              <Text style={styles.textSize}>Large</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity onPress={sub} style={styles.count}>
              <Svg width="17" height="3" viewBox="0 0 17 3" fill="none">
                <Path
                  d="M0.904999 0.415039V2.58504H16.095V0.415039H0.904999Z"
                  fill="#543A20"
                />
              </Svg>
            </TouchableOpacity>
            <Text style={styles.imageText}>{number}</Text>
            <TouchableOpacity onPress={add} style={styles.count}>
              <Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                <Path
                  d="M7.35 7.18993V0.679932H9.52V7.18993H16.03V9.35993H9.52V15.8699H7.35V9.35993H0.840004V7.18993H7.35Z"
                  fill="#543A20"
                />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={styles.border}>
            <Text style={styles.imageText}>${number * 5}</Text>
            <TouchableOpacity onPress={addToCart} style={styles.cart}>
              <Text style={{ color: "#39260B", fontSize: 18, fontWeight: 600 }}>
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: "30%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 120,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  imageText: {
    color: "white",
    fontSize: 22,
    fontWeight: 700,
  },
  box: {
    height: "70%",
    backgroundColor: "#543A20",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  size: {
    flexDirection: "row",
    gap: 20,
  },
  small: {
    width: 66,
    height: 66,
    backgroundColor: "#CE9760",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  medium: {
    width: 94,
    height: 94,
    backgroundColor: "#CE9760",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  large: {
    width: 122,
    height: 122,
    backgroundColor: "#CE9760",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cont: {
    alignItems: "center",
    gap: 20,
  },
  textSize: {
    fontWeight: 700,
    fontSize: 14,
    color: "#CE9760",
  },
  count: {
    backgroundColor: "#CE9760",
    width: 27,
    height: 27,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cart: {
    width: 278,
    height: 59,
    backgroundColor: "#CE9760",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  border: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "110%",
  },
});
// uri: "data:image/jpeg;base64,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",
//   (d =
//     "M3.88905 8.75047L10.695 15.5563L8.7505 17.5008L0 8.75047L8.7505 0L10.695 1.94454L3.88905 8.75047Z");
// d =
//   "M8.33416 1.27378C10.2917 -0.483333 13.3167 -0.424999 15.2022 1.46447C17.0877 3.35393 17.1525 6.36417 15.3988 8.3275L8.33325 15.4042L1.26782 8.3275C-0.485793 6.36417 -0.420243 3.34918 1.46447 1.46447C3.35131 -0.422374 6.37099 -0.485941 8.33416 1.27378ZM14.0225 2.64175C12.7732 1.38995 10.7563 1.33918 9.4475 2.51406L8.33491 3.5127L7.22175 2.51484C5.90915 1.33831 3.89588 1.39007 2.64297 2.64298C1.40152 3.88443 1.3392 5.87275 2.48327 7.186L8.33325 13.0453L14.1834 7.186C15.3279 5.87225 15.2658 3.88771 14.0225 2.64175Z";
// d =
//   "M19.1667 3.16667H6.82451C5.88108 3.16667 5.06879 3.83257 4.88378 4.75768L3.61865 11.0833H0.166668V14.25H3.50552L5.67833 33.0811C5.79357 34.0797 6.63916 34.8333 7.64445 34.8333H24.3556C25.3608 34.8333 26.2065 34.0797 26.3216 33.0811L28.4944 14.25H31.8333V11.0833H28.3814L27.1163 4.75768C26.9312 3.83257 26.1189 3.16667 25.1754 3.16667H22.3333V0H19.1667V3.16667ZM25.152 11.0833H6.84802L7.79802 6.33333H24.202L25.152 11.0833ZM6.6932 14.25H25.3068L23.2973 31.6667H8.70281L6.6932 14.25Z";
// d =
//   "M19.1667 3.16667H6.82451C5.88108 3.16667 5.06879 3.83257 4.88378 4.75768L3.61865 11.0833H0.166668V14.25H3.50552L5.67833 33.0811C5.79357 34.0797 6.63916 34.8333 7.64445 34.8333H24.3556C25.3608 34.8333 26.2065 34.0797 26.3216 33.0811L28.4944 14.25H31.8333V11.0833H28.3814L27.1163 4.75768C26.9312 3.83257 26.1189 3.16667 25.1754 3.16667H22.3333V0H19.1667V3.16667ZM25.152 11.0833H6.84802L7.79802 6.33333H24.202L25.152 11.0833ZM6.6932 14.25H25.3068L23.2973 31.6667H8.70281L6.6932 14.25Z";
// d =
//   "M42.4167 6.91667H15.4588C13.3981 6.91667 11.6239 8.37114 11.2198 10.3918L8.45653 24.2083H0.916672V31.125H8.20943L12.9553 72.256C13.207 74.4372 15.054 76.0833 17.2497 76.0833H53.7503C55.946 76.0833 57.7931 74.4372 58.0445 72.256L62.7904 31.125H70.0833V24.2083H62.5435L59.7803 10.3918C59.376 8.37114 57.6019 6.91667 55.541 6.91667H49.3333V0H42.4167V6.91667ZM55.4899 24.2083H15.5101L17.5851 13.8333H53.4149L55.4899 24.2083ZM15.172 31.125H55.8281L51.4388 69.1667H19.5614L15.172 31.125Z";
// d = "M0.904999 0.415039V2.58504H16.095V0.415039H0.904999Z";
// d = "M0.904999 0.415039V2.58504H16.095V0.415039H0.904999Z";
