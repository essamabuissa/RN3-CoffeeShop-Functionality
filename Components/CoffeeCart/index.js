import React from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

import { Image } from "react-native";

//Redux
import { connect } from "react-redux";

//Actions
import { checkoutCart } from "../../redux/actions/item";
import { COFFEE_SHOPS, SIGNUP } from "../../Navigation/screenNames";
import Login from "../Authentication/Login";

const CoffeeCart = ({ items, checkout, navigation }) => {
  let cartItems = items.map((item) => (
    <CartItem item={item} key={`${item.drink} ${item.option}`} />
  ));

  if (!cartItems.length) {
    cartItems = (
      <Image
        style={{ height: 399, width: 376 }}
        source={require("../../assets/images/thankyou.png")}
      />
    );
  }
  return (
    <List>
      {cartItems}
      <Button full danger onPress={checkout}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

const mapStateToProps = ({ items }) => ({
  items,
});

const mapDispatchToProps = (dispatch) => ({
  checkout: () => dispatch(checkoutCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
