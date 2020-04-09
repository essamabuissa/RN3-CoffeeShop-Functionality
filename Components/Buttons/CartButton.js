import React from "react";
import { Icon, Text, View } from "native-base";

// Screen Names
import { CART } from "../../Navigation/screenNames";

import { connect } from "react-redux";

function CartButton({ navigation, items }) {
  let itemCount = 0;
  items.forEach((item) => (itemCount += item.quantity));

  return (
    <View>
      <Text>{itemCount}</Text>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate(CART)}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  items: state.items,
});
export default connect(mapStateToProps)(CartButton);
