import logo from './default-monochrome.svg';
import logo2 from './icons8-cart-24.png';
import logo3 from './icons8-person-female-50.png';
import './App.css';
import Carousel, { CarouselItem } from './carousel';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div className="burger">
            <div className='stick' id='st1'></div>
            <div className='stick' id='st2'></div>
            <div className='stick' id='st3'></div>
          </div>
        <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='circle' id='avatar'>
        <img src={logo3} className="App-logo" alt="logo" />
        </div>
          <div className="logo2">
        <img src={logo2} className="App-logo" alt="logo" />
        </div>
      </header>
      <div className='content'>
        <Carousel>
          <CarouselItem background={{}}>the best place to shop</CarouselItem>
          <CarouselItem>the best place to shop1</CarouselItem>
          <CarouselItem>the best place to shop2</CarouselItem>
          <CarouselItem>the best place to shop3</CarouselItem>
          <CarouselItem>the best place to shop4</CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
