import React from "react";
import { Icon } from "native-base";

// Screen Names
import { CART } from "../../Navigation/screenNames";

const CartButton = ({ navigation }) => {
  return (
    <Icon
      name="shoppingcart"
      type="AntDesign"
      onPress={() => navigation.navigate(CART)}
    />
  );
};

export default CartButton;
