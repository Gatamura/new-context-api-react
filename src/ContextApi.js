import React from 'react';

const ThemeContext = React.createContext({
    alert: () => alert('oi')
})

export const ContextApi = ({children}) => {
    <ThemeContext.Provider value='teste'>
        {children}
    </ThemeContext.Provider>
}

export const ConsumerApi = ThemeContext.Consumer