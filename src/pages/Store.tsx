import React from "react";
import products from '../data/products.json';
import { Row, Col } from 'react-bootstrap';
import StoreItems from "../components/StoreItems";

const Store = () => {
  return (
    <>
      <Row md={2} xs={1} lg={3} className='g-3'>
        <Col>
          {products.map((item) => (
            <Col key={item.id}>
              <StoreItems {...item} />
            </Col>
          ))}
        </Col>
      </Row>
    </>
  )
}

export default Store;