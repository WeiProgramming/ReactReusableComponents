import React from 'react';
import NavigationBar from './components/navigation/navigation-bar';
import Buttons from './components/buttons/buttons';

const NavigationItems = {
  list: [
    {
      id: 1111,
      text: 'Limited-Time Offer',
      url: 'google.com'
    },
    {
      id: 1112,
      text: 'FAQs',
      url: 'google.com'
    }
  ]
}

const buttonsObj = {
  buttons: [
    {
      id: 1,
      text: 'Click Me',
      link: 'google.com'
    },
    {
      id: 2,
      text: 'Click twice',
      link: 'google.com'
    },
    {
      id: 3,
      text: 'Click three',
      link: 'google.com'
    }
  ]
}

function App() {
  return (
    <div className="App">
      <NavigationBar NavigationItems={NavigationItems} Alignment="right"></NavigationBar>
      <Buttons btnObj={buttonsObj}></Buttons>
    </div>
  );
}

export default App;
