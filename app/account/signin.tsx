import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { LoginWith } from "@/assets/components/LoginWith";
import { useGetAllUsersQuery, User } from "@/generated";
export default function HomeScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, loading, error } = useGetAllUsersQuery();
  const signin = async () => {
    if (data?.getAllUsers) {
      const users = data?.getAllUsers;
      const foundUser = users.find((user) => user.email === email);
      if (foundUser?.password === password) {
        const fullname = foundUser.fullName;
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("email", email);
        router.push("/");
      } else {
        alert("incorrect password or email");
      }
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.back_image}
        source={require("../../assets/images/signin.png")}
      >
        <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.login}>
          <View style={styles.welcome}>
            <View>
              <Svg width="54" height="44" viewBox="0 0 54 44" fill="none">
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.8193 2.69197C20.8193 2.69197 20.3618 2.38199 19.583 2.25998C18.3026 2.05941 16.307 2.08127 15.6669 3.05736C15.2353 3.71565 15.8543 4.2226 16.324 4.49449C17.3125 5.06675 19.2083 4.84823 20.2656 4.56766C21.1442 4.33447 22.035 4.10912 23.0284 3.46C24.3114 2.62159 26.4391 1.42953 26.381 1.42539C27.3471 0.866533 30.2191 -0.122862 33.917 0.012597C35.2917 0.0629486 36.38 0.110602 37.5923 0.412138C38.592 0.660787 39.7115 1.1881 40.6102 2.08315C41.3595 2.82939 41.5187 3.79675 41.4328 4.47087C41.2955 5.54863 40.456 6.31905 39.0478 6.83566C36.9106 7.61976 34.6826 7.45631 33.3391 7.41781C29.4858 7.09487 28.6042 4.52106 31.7741 4.12932C33.3319 7.32847 41.6431 4.83252 37.5765 2.86266C35.2146 1.7894 30.498 3.03317 30.498 3.03317C28.9291 3.62312 27.0099 4.53124 25.0567 5.6396C25.0567 5.6396 23.9402 6.37639 21.9222 6.70757C21.2988 6.80987 20.6441 6.84634 19.856 6.84423C19.3394 6.84285 18.6418 6.7935 18.0504 6.6627C12.874 5.51783 14.0296 2.83829 14.0296 2.83829C14.0296 2.83829 14.0296 1.49852 16.8947 1.06005C18.6123 0.79719 19.8143 0.90306 20.5263 1.14442C20.9852 1.29995 21.1391 1.45162 21.3248 1.64466C21.7719 2.10942 20.8343 2.6972 20.8192 2.69208L20.8193 2.69197ZM3.19602 11.973C3.69978 14.7783 4.31366 17.4146 5.19169 20.03C4.39243 20.4944 3.24884 21.3429 2.08839 22.8371C-0.0303618 25.5653 -0.390185 29.8137 0.354914 31.5087C1.03047 33.0457 1.0788 34.7799 4.9777 36.8191C8.01885 38.4097 11.3165 36.8307 12.1461 36.4718C11.3079 36.5274 7.39657 35.4073 5.4592 32.7267C4.3922 31.2503 3.9541 29.6543 3.81743 28.1387C3.59804 25.7061 4.34091 23.7169 5.8926 22.1549C5.91095 22.1364 5.92807 22.1199 5.94622 22.1018C6.51005 23.5351 7.16499 24.9739 7.93798 26.4426L7.91499 26.442L13.6453 34.6753C14.7839 36.9149 15.1252 38.1178 15.3788 39.2062C15.408 39.2016 16.4093 41.5604 20.9031 42.9526C22.8871 43.5673 25.513 44.1112 29.1024 43.9804C40.6153 43.5611 41.5506 39.0471 42.0074 39.2061C42.3804 37.2801 42.9345 35.7569 43.6928 34.4804L48.7488 27.2701L49.7616 25.3194C51.5079 22.0292 52.7924 17.5289 53.5333 14.2764C53.8033 13.0913 54.0314 11.93 53.805 12.1672C52.616 13.4133 51.1288 14.9535 43.4426 16.1359C39.9669 16.6706 35.1504 17.4697 28.4762 17.3313C4.97611 16.8463 3.19443 11.9747 3.19443 11.9747L3.19602 11.973ZM12.1463 36.4719C12.4481 36.4505 12.5431 36.3792 12.3935 36.3808C12.361 36.3812 12.2727 36.4172 12.1463 36.4719ZM7.04877 3.88605C7.04877 3.88605 4.20776 5.83477 7.24138 7.63735C10.275 9.43994 14.8977 10.0732 14.8977 10.0732C18.7567 10.9484 26.3444 11.2799 34.0142 10.9989C35.7224 10.9363 45.786 9.99888 49.182 8.22196C51.9371 6.78051 52.2254 5.98143 51.1564 4.47066C56.7672 7.14164 52.6087 9.38226 51.0601 10.122C50.1514 10.5902 48.5222 11.079 46.341 11.5836C41.4873 12.9641 35.8427 13.3442 29.9686 13.4348C23.596 13.5233 16.9415 13.1407 9.40688 11.2912C6.71361 10.3908 3.35674 9.77303 2.80986 7.24765C2.93858 5.52857 5.04402 4.72006 7.04737 3.88614L7.04877 3.88605Z"
                  fill="#DD9854"
                />
              </Svg>
            </View>
            <Text style={styles.welcomeText}>Welcome to Login</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="E-mail Address"
              placeholderTextColor="#828282"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#828282"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Text style={styles.forgot}>Forgot Password?</Text>
          </View>
          <TouchableOpacity onPress={signin}>
            <Text style={styles.signIn}>Sign in</Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Svg width="389" height="24" viewBox="0 0 389 24" fill="none">
              <Path
                d="M254.5 14H388.5M133.5 14.5H-1"
                stroke="#DD9854"
                strokeWidth="2"
              />
            </Svg>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
                marginTop: -20,
              }}
            >
              Or Login with
            </Text>
          </View>
          <LoginWith />
          <View style={{ flexDirection: "row", top: 165 }}>
            <Text style={styles.noAccount}>Don’t have an account ? </Text>
            <TouchableOpacity onPress={() => router.push("account/register")}>
              <Text style={styles.Register}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  back_image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  content: {
    flex: 1,
    alignItems: "center",
    top: 81,
  },
  login: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  welcomeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#16181C",
    width: 350,
    height: 59,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#828282",
  },
  signIn: {
    color: "#543A20",
    fontSize: 20,
    fontWeight: "bold",
    width: 350,
    height: 59,
    backgroundColor: "#CE9760",
    textAlign: "center",
    lineHeight: 59,
    borderRadius: 10,
    margin: 30,
  },
  forgot: {
    color: "#CE9760",
    textAlign: "right",
  },
  noAccount: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  Register: {
    color: "#CE9760",
    fontSize: 16,
    fontWeight: "600",
  },
  welcome: {
    alignItems: "center",
    width: 217,
    height: 101,
    gap: 20,
  },
});
