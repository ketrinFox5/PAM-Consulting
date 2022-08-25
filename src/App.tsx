import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CardWithButton from './components/ui/CardWiithButton/CardWithButton';
import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/Header/Header';
import { IButton } from './interfaces/Button.interface';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPage from './pages/PrivacyPolicyPage/index';

function App() {
  const button: IButton = {text: 'Find Out More', textSize: 'h4', size: 'big'}
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/home' element={<PrivacyPage/>}/>
          <Route path='/about' element={<PrivacyPage/>}/>
          <Route path='/services' element={<PrivacyPage/>}/>
          <Route path='/services/family-relocation' element={<PrivacyPage/>}/>
          <Route path='/services/business-relocation' element={<PrivacyPage/>}/>
          <Route path='/services/investment' element={<PrivacyPage/>}/>
          <Route path='/invest' element={<PrivacyPage/>}/>
          <Route path='/migration' element={<PrivacyPage/>}/>
          <Route path='/contact' element={<PrivacyPage/>}/>
          <Route path='/privacy' element={<PrivacyPage/>}/>
          <Route path='/disclaimer' element={<DisclaimerPage/>}/>
        </Routes>
        <CardWithButton
          imageBig='/images/services/services_cards_business_relocation_image2.png'
          imageSmall='/images/services/services_cards_business_relocation_image.png'
          title='Family Relocation'
          text='Five-Oh Sunglasses for the ultimate UV protection.'
          button={button}
        />
        <Footer/>
    </div>
  );
}

export default App;
