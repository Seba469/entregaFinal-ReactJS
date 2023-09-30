import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = ({ productData }) => {
  const [stock, setStock] = React.useState(10);
  const [onAdd, setOnAdd] = React.useState(false);

  return (
    <div className={styles.productContainer}>
    <Card className={styles.card}>
      <Card.Img variant="top" src={productData.thumbnail} />
        <Card.Body className={styles.cardDetails}>
          <Card.Title>{productData.title}</Card.Title>
          <Card.Text>{productData.description}</Card.Text>
          <Card.Text>${productData.price}</Card.Text>
          <ItemCount />
        </Card.Body>  
    </Card>
    </div>
  );
};

export default ItemDetailContainer;
