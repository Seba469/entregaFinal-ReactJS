import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import styles from "./ItemListContainer.module.scss";

const ItemListContainer = ({ productsData }) => {
  //useNavigate nos permite navegar entre rutas dentro de nuestra aplicación
  const navigate = useNavigate();
  return (
    <div className={styles.productContainer}>
      {productsData.map((product) => {
        return (
          <Card className={styles.card} key={product.id}>
            <Card.Img className={styles.cardImg} variant="top" src={product.thumbnail} />
            <Card.Body className={styles.cardBody}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button className={styles.cardBoton} variant="primary" onClick={() => navigate(`/item/${product.id}`)}>
                Detalles
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
