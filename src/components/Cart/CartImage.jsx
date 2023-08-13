import Image from 'react-bootstrap/Image';
import catEmptyCart from './catEmptyCart.jpg'
function CatImage() {
  return <Image src={catEmptyCart} alt='image' fluid rounded/>;
}

export default CatImage;