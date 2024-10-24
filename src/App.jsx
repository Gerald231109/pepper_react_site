import Header from './components/HeaderComp';
import Dignity from './components/DignityComp';
import Function from './components/FunctionsComp';
import Stock from './components/StockComp';
import Partner from './components/PartnersComp';
import Footer from './components/FooterComp';
import './sass/index.scss';

const App = () => {
  return (
    <>
      <Header />
      <Dignity />
      <Function />
      <Stock />
      <Partner />
      <Footer />
    </>
  );
};

export default App;
