import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import IconControl from './Iconcontrol';
import "./Icons.css"
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

function BasicExample() {

    const {produits} = useContext(ProductContext)
    
    return (
      <ul>
          <Row>
              {produits.map((produit) => (
                  <Col md="6" lg="4" sm="12" key={produit.id} className='my-3'>
                      <Card style={{ width: '18rem' }}>
                        <div id='icons'>
                          <Card.Img variant="top" src= {produit.image} />
                          <div id='icon'>
                            <IconControl id={produit.id}/>
                          </div>
                        </div>
                      <Card.Body>
                          <Card.Title>{produit.make}</Card.Title>
                          <Card.Text>
                              {produit.description}
                          </Card.Text>
                          <h4>
                          </h4>
                          <Badge bg="secondary"> $ {produit.price}</Badge>
                      </Card.Body>
                      </Card>
                  </Col>
          ))}
        </Row>
      </ul>
  );
}

export default BasicExample;