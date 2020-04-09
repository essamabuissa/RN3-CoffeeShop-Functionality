import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";

//Redux
import { connect } from "react-redux";
//Actions
import { removeItemFromCart } from "../../redux/actions/item";

const CartItem = ({ item, removeItem }) => (
  <ListItem style={styles.listStyle}>
    <Left>
      <Text style={styles.drink}> {item.drink} </Text>
      <Text note style={styles.option}>
        {item.option}
      </Text>
    </Left>
    {item.name && item.drink ? item.quantity + 1 : null}
    <Body>
      <Text style={styles.quantity}>{item.quantity}</Text>
    </Body>
    <Right>
      <Button transparent onPress={() => removeItem(item)}>
        <Icon name="trash" style={styles.removeItem} />
      </Button>
    </Right>
  </ListItem>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
