import Container from 'react-bootstrap/Container';
import BasicExample from './Components/Cards';
import Search from './Components/Search';
import MainNavbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Aboutpage from './Components/IdemPage/About_page';
import About_product from './Components/IdemPage/About_product';
import { ProductProvider } from './context/ProductContext';

function App() {

  return (
    <ProductProvider>
      <Router>
        <>
        <MainNavbar/>
          <Container>
            <Routes>
              <>
                <Route path='/' element={
                  <>
                    <br/>
                    <Search />

                    <BasicExample/>    
                  </>
                }/>
                <Route path='/about' element={
                  <>
                    <br/>
                    <Aboutpage />
                  </>
                }/>
                <Route path='/produc_item/:id' element={
                  <About_product />
                }/>
              </>
            </Routes>
          </Container>
        </>
      </Router>
    </ProductProvider>
  )
}

export default App;
