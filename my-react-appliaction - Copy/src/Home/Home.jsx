import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'react-bootstrap'
import {Row , Col} from 'react-bootstrap'
import CardPage from '../CardPage/CardPage'
import { products } from '../Data/DataInfos'

import './Home.css'
import Navbars from '../Navbars/Navbars'
export default function Home() {
  
  return (
    <div className='prducts__section'>
    {/* <h2 className='text-center my-3 fw-bold'>Our Products</h2> */}
    <Navbars/>
    <Row>
      {products.map((product) => {
        return (
          <Col key={product.id} md = {4}>
            <CardPage product = {products} title={product.title} image={product.image} price={product.price} discription={product.discription} size={product.size}/>
          </Col>
        );
      })}
    </Row>
  </div>
  )
}
