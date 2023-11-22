import { useContext } from 'react'
import './AddToCard.css'
import 'bootstrap'
import 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { CounterContext } from '../CounterContext/CounterContext'

export default function AddToCard() {
  const { counterTest, setCounterTest } = useContext(CounterContext);

  return (
    <Button className="btn rounded text-warning border-warning w-100 fw-bold" onClick={() => setCounterTest(counterTest + 1)}>Add To Cart</Button>
  )
}
