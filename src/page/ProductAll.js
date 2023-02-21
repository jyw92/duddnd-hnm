import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';

const ProductAll =  () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () =>{
    let searchQuery = query.get('q') || "";
    let url = `https://my-json-server.typicode.com/jyw92/duddnd-hnm/products?q=${searchQuery}`;
    let reponse = await fetch(url);
    let data  = await reponse.json();
    setProductList(data);
  };
  useEffect(()=>{
    getProducts()
  }, [query])
  return (
    <Container >
      <Row>
        {
          productList.map((itm, idx)=>(
            <Col ig={3}>
              <ProductCard itm={itm}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default ProductAll
