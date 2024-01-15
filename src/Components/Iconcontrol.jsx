import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { IoIosHeart } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function IconControl({id}) {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary"><IoIosHeart/></Button>
      <Button variant="secondary"><SlBasket/></Button>
      <Button className='rounded-0' variant="secondary"><Link to={'/produc_item/'+ id}><IoEyeSharp /></Link></Button>
    </ButtonGroup>
  );
}

export default IconControl;