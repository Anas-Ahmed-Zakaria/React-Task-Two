import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import 'bootstrap'
import {Card , Container } from 'react-bootstrap'
import './CardPage.css'
import '../index.css'
import AddToCard from '../AddToCard/AddToCard'

export default function CardPage(product) {
  return (
    <div className='card__content my-5 d-flex justify-content-center align-items-center'>
        <Container>
            <Card className='carding border-0 w-75'>
                <Card.Img className='card__image' variant='top' src={product.image}/>
                <Card.Body>
                    <Card.Title className='text-center fs-4 fw-bold'>{product.title}</Card.Title>
                    <Card.Text className='text-center'>{product.discription}</Card.Text>
                    <div className='d-flex justify-content-center gap-5'>
                        <Card.Text>{product.size}</Card.Text>
                        <Card.Text className='fw-bold'>${product.price}</Card.Text>
                    </div>
                    <div className='card__footer'>
                        <AddToCard/>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}


