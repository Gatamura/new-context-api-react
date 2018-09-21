import React from 'react';
import { ThemeContext } from './ContextApi';

const App = () => {
    return (
        <ThemeContext.Consumer>
            {
                val => console.log('val',val)
            }
        </ThemeContext.Consumer>
    );
};

export default App;