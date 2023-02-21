import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Dropdown, DropdownButton  } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let{ id} = useParams();
  console.log(id);
  const [product, setProduct]  = useState(null);
  const [dropDown, setDropDown] = useState('select');
  const getProductDetail= async ()=>{
    let url = `https://my-json-server.typicode.com/jyw92/duddnd-hnm//products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
 
  useEffect(()=>{
    getProductDetail();
  },[])
  return (
    <div>
      <Container>
        <Row>
          <Col><img src={product?.img} alt="" /></Col>
          <Col>
            <p>
              상품명 : 
              {product?.new == true ? "(신상)" : ""}
              {product?.title}
            </p>
            <p>가격 : {product?.price}원</p>
            <hr />
            <DropdownButton id="dropdown-basic-button" title={dropDown}>
              {
                product?.size.map((item)=>(
                  <Dropdown.Item onClick={()=>(setDropDown(item))}>{item}</Dropdown.Item>
                ))
              }
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
