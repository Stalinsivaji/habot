import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BuyerSupplierSection from './Component/BuyerSupplierSection/BuyerSupplierSection';
import FeatureGrid from './Component/FeatureGrid/FeatureGrid.js';
import Footer from './Component/Footer/Footer.js';
import Header from './Component/Header/Header';
import HowItWorksSection from './Component/HowItWorksSection'; 
import SearchSection from './Component/SearchSection/SearchSection';
import SignupSection from './Component/SignupSection/SignupSection';
import SupplierSection from './Component/SupplierSection/SupplierSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="fullPage">
            <Header />
            <SearchSection />
            <SignupSection />
            <BuyerSupplierSection />
            <SupplierSection />
            <HowItWorksSection/>
            <FeatureGrid />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
