import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { createStackNavigator } from "@react-navigation/stack"; // Import createStackNavigator
import { FavoritesContext } from "./FavoritesContext";
import { useContext } from "react";
import banner from "./assets/banner.jpg";
import { globalStyles } from "./styles.js";
// import { Tag } from "./Tag.js";
import Heart from "./assets/heart.svg";
import inspoOne from "./assets/inspoOne.jpg";
import inspoTwo from "./assets/inspoTwo.jpg";
import inspoThree from "./assets/inspoThree.jpg";
import inspoFour from "./assets/inspoFour.jpg";
import attractionOne from "./assets/attractionOne.jpg";
import attractionTwo from "./assets/attractionTwo.jpg";
import attractionThree from "./assets/attractionThree.jpg";
import attractionFour from "./assets/attractionFour.jpg";

export default function HomeScreen({ navigation }) {
  //   console.log("Rendering HomeScreen with globalStyles:", globalStyles);
  // const navigation = useNavigation(); // Get the navigation object
  // // Define a function to handle navigation to AttractionScreen
  // const handleExploreSingapore = () => {
  //   navigation.navigate("AttractionScreen");
  // };

  const { addFavorite, removeFavorite, favorites } =
    useContext(FavoritesContext); // Import removeFavorite here

  const handleAddFavorite = (attraction, image) => {
    const isAlreadyFavorite = isFavorite(attraction);
    if (isAlreadyFavorite) {
      removeFavorite({ name: attraction, image: image });
    } else {
      addFavorite({ name: attraction, image: image });
    }
  };

  const isFavorite = (attraction) => {
    return favorites.some((favorite) => favorite.name === attraction);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={banner} style={styles.image} />
        <View style={styles.innerContainer}>
          <View style={globalStyles.section}>
            <View style={globalStyles.line}></View>
            <Text style={globalStyles.h1}>
              <Text>
                Discover Comfort,{"\n"}
                Embrace Adventure{"\n"}
                with{" "}
              </Text>
              <Text style={globalStyles.span}>SingaStays</Text>
              <Text>.</Text>
            </Text>
            <Text style={globalStyles.p1}>
              Embark on a joyful stay in Singapore with SingaStays! Explore
              tailored accommodations for a perfect blend of comfort and
              adventure. Your unforgettable experience begins here.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AttractionScreen")}
              style={globalStyles.buttonPrimaryContainer}
              activeOpacity={1}
            >
              <Text style={globalStyles.buttonPrimary}>Explore Singapore</Text>
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={require("./assets/background.png")} // Your background image
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={globalStyles.section}>
              <Text style={[globalStyles.h2, globalStyles.textCenter]}>
                <Text style={globalStyles.span}>Inspiration </Text>
                <Text>
                  for your{"\n"}
                  stay in SG{" "}
                </Text>
              </Text>
              <Text style={[globalStyles.p2, globalStyles.textCenter]}>
                Not sure what to do on your next trip to Finland? No worries. We
                have gathered a selection of curated journeys from different
                parts of the country. Find interesting sights to see, places to
                visit, and restaurants to dine in.
              </Text>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.frame}
              >
                <TouchableOpacity
                  style={styles.overlapGroup}
                  activeOpacity={1}
                  onPress={() => navigation.navigate("AttractionDetail")}
                >
                  <Image source={inspoOne} style={styles.Inspoimage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                    onPress={() =>
                      handleAddFavorite("Skyline Luge Sentosa", inspoOne)
                    }
                  >
                    <Heart
                      fill={
                        isFavorite("Skyline Luge Sentosa") ? "#fff" : "none"
                      }
                    />
                  </TouchableOpacity>
                  <View style={styles.textContent}>
                    <Text style={styles.text}>SKYLINE LUGE{"\n"} SENTOSA:</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.overlapGroup} activeOpacity={1}>
                  <Image source={inspoTwo} style={styles.Inspoimage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                    onPress={() =>
                      handleAddFavorite("Fort Canning Park", inspoTwo)
                    }
                  >
                    <Heart
                      fill={isFavorite("Fort Canning Park") ? "#fff" : "none"}
                    />
                  </TouchableOpacity>
                  <View style={styles.textContent}>
                    <Text style={styles.text}>FORT CANNING{"\n"} PARK:</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.overlapGroup}>
                  <Image source={inspoThree} style={styles.Inspoimage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                  >
                    <Heart
                      fill={
                        isFavorite("Skyline Luge Sentosa") ? "#fff" : "none"
                      }
                    />
                  </TouchableOpacity>
                  <View style={styles.textContent}>
                    <Text style={styles.text}>GARDEN BY{"\n"} THE BAY:</Text>
                  </View>
                </View>
                <View style={styles.overlapGroup}>
                  <Image source={inspoFour} style={styles.Inspoimage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                  >
                    <Heart
                      fill={
                        isFavorite("Skyline Luge Sentosa") ? "#fff" : "none"
                      }
                    />
                  </TouchableOpacity>
                  <View style={styles.textContent}>
                    <Text style={styles.text}>GARDEN BY{"\n"} THE BAY:</Text>
                  </View>
                </View>
              </ScrollView>
              <TouchableOpacity
                onPress={() => navigation.navigate("AttractionScreen")}
                style={[
                  globalStyles.buttonPrimaryContainer,
                  globalStyles.textCenter,
                ]}
                activeOpacity={1}
              >
                <Text style={globalStyles.buttonPrimary}>View More</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={globalStyles.section}>
            <Text style={[globalStyles.h2, globalStyles.textCenter]}>
              <Text style={globalStyles.span}>Explore </Text>
              <Text>
                Accommodations{"\n"}
                in Singapore{" "}
              </Text>
            </Text>
            <Text style={[globalStyles.p2, globalStyles.textCenter]}>
              Discover the perfect stay that suits your preferences. Click on
              the tags below to explore accommodations tailored to your needs.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AttractionScreen")}
              style={[
                globalStyles.buttonPrimaryContainer,
                globalStyles.textCenter,
              ]}
              activeOpacity={1}
            >
              <Text style={globalStyles.buttonPrimary}>View More</Text>
            </TouchableOpacity>
            <View style={styles.stackFrame}>
              <TouchableOpacity
                style={styles.stackIndividual}
                onPress={() => navigation.navigate("AttractionDetail")}
                activeOpacity={1}
              >
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionOne} style={styles.stackImage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                    onPress={() =>
                      handleAddFavorite("Skyline Luge Sentosa", inspoOne)
                    }
                  >
                    <Heart
                      fill={
                        isFavorite("Skyline Luge Sentosa") ? "#fff" : "none"
                      }
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                  <Text style={globalStyles.p2}>
                    Discover the perfect stay that suits your preferences. Click
                    on the tags below to explore accommodations tailored to your
                    needs.
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.stackIndividual}>
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionTwo} style={styles.stackImage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                    onPress={() =>
                      handleAddFavorite("Fort Canning Park", inspoOne)
                    }
                  >
                    <Heart
                      fill={isFavorite("Fort Canning Park") ? "#fff" : "none"}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Fort Canning Park</Text>
                  <Text style={globalStyles.p2}>
                    Discover the perfect stay that suits your preferences. Click
                    on the tags below to explore accommodations tailored to your
                    needs.
                  </Text>
                </View>
              </View>
              <View style={styles.stackIndividual}>
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionThree} style={styles.stackImage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                  >
                    <Heart fill={isFavorite() ? "#fff" : "none"} />
                  </TouchableOpacity>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                  <Text style={globalStyles.p2}>
                    Discover the perfect stay that suits your preferences. Click
                    on the tags below to explore accommodations tailored to your
                    needs.
                  </Text>
                </View>
              </View>
              <View style={styles.stackIndividual}>
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionFour} style={styles.stackImage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                  >
                    <Heart fill={isFavorite() ? "#fff" : "none"} />
                  </TouchableOpacity>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                  <Text style={globalStyles.p2}>
                    Discover the perfect stay that suits your preferences. Click
                    on the tags below to explore accommodations tailored to your
                    needs.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 40,
  },
  innerContainer: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 30,
    marginBottom: 30,
  },
  frame: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    lexDirection: "row",
  },
  overlapGroup: {
    position: "relative",
    marginRight: 20,
  },
  heartComponent: {
    position: "absolute",
    bottom: 0,
    right: 0,
    // borderBottomRightRadius: 10,
  },
  textContent: {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "#fff",
    zIndex: 1,
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    lineHeight: 27,
  },
  stackFrame: {
    marginTop: 30,
  },
  stackIndividual: {
    marginBottom: 20,
  },
  stackOverlapGroup: {
    position: "relative",
  },
  stackText: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    lineHeight: 27,
  },
  stackImage: {
    width: "100%",
    borderRadius: 15,
  },
  stackTextContent: {
    marginTop: 20,
  },
});
