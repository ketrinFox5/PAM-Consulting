import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/Header/Header';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPage from './pages/PrivacyPolicyPage/index';

function App() {
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
        <Footer/>
    </div>
  );
}

export default App;
