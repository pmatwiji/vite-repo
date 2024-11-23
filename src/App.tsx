import React from 'react';
import Clicker from './components/Clicker';

function App() {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return <Clicker onClick={handleClick} />;
}

export default App;
