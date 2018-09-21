import React from 'react';
const ThemeContext = React.createContext()

class ThemeProvider extends React.Component{

    state = {
        result: []
    }

    componentWillMount(){
        fetch('https://api.github.com/users/octocat/orgs')
            .then((result) => this.setState({result}))
    }

    render(){
        return(
            <ThemeContext.Provider value={this.state.result}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

const ThemeConsumer = ThemeContext.Consumer

const App = () => {
    return (
        <ThemeProvider>
            <ThemeConsumer>
                {
                    val => console.log(val)
                }
            </ThemeConsumer>
        </ThemeProvider>
    );
};

export default App;