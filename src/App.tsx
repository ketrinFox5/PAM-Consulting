import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/ui/Footer/Footer';
import DisclaimerPage from './pages/DisclaimerPage';
// import Header from './components/ui/Header/Header';
import PrivacyPage from './pages/PrivacyPolicyPage/index';

function App() {
  return (
    
    <div>
      
        <Routes>
          <Route path='/privacy' element={<PrivacyPage/>}/>
          <Route path='/disclaimer' element={<DisclaimerPage/>}/>

        </Routes>
        
        <Footer/>
    </div>
  );
}

export default App;
