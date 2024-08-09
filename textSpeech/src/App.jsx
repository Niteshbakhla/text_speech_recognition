import React, { useState } from 'react';
import VoiceCommand from './Components/Speech2';
import ShapeCanvas from './Components/ShapeCanvas';

function App() {
  const [command, setCommand] = useState('');

  const handleCommand = (newCommand) => {
 
    setCommand(newCommand);
  };



  return (
    <div>
      <h1>Voice Controlled Shape Creator</h1>
      <VoiceCommand onCommand={handleCommand} />
      <ShapeCanvas command={command} />
    </div>
  );
}

export default App;
