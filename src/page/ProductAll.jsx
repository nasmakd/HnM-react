/*
  검색기능 추가
  useSearchParams - 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정하는 데 사용됩니다

  주소 뒤에 `/?q=$파라미터` 
*/ 
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';  //부트스트랩 css
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  let [query, setQuery] = useSearchParams(); //주소 뒤 파라미터
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let keyword = query.get('q') || "";
    //쿼리 값 읽어옴 / q의 밸류(아이템을 가져온다) /  없을 땐 빈 스트링
    let url = `https://my-json-server.typicode.com/nasmakd/HnM/products?q=${keyword}`;
    let response = await fetch(url);  //브라우저가 네트워크 요청을 보내고 프로미스 객체가 반환
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=>{
    getProducts();
  }, [query]);  //키워드를 입력했을 때마다 getProducts 함수 실행

  return (
    <div>
      <Container>
        <Row>
          
            {productList.map((menu)=>(
              <Col sm={6} lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))}
          
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll;

//https://www.npmjs.com/package/json-server