import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import ProductContext from '../context/ProductContext';

export default function Search() {

  const {print_content} = useContext(ProductContext)

  return (
    <Form>
        <Form.Control type="text" placeholder="Search Product" onChange = {(e) => print_content(e)}/>
    </Form>
  )
}
