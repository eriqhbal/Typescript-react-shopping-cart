import React from 'react'
import {Row, Col} from "react-bootstrap";
import items from "../Data/items.json";
import StoreItem from '../Components/StoreItem';

type Props = {}

const Store = (props: Props) => {
  return (
    <>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {items.map(item => {
          return <Col key={item.id
          }>
            <StoreItem {...item}/>
          </Col>
        })}
      </Row>
    </>
  )
}

export default Store;