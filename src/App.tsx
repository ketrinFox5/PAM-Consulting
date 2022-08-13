import Button from './components/ui/Button/Button';
import React from 'react';
import DATA from "./locales/en.json";

function App() {
  return (
    
    <div>
      <Button 
        text={DATA.BUTTONS.CHECK_MORE}
        size='big'
        textSize='h4'
        />
    </div>
  );
}

export default App;
