//comments 
/* Using Two approaches for context */
/* Context in classes */
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export class ToggleButton extends Component {
    static contextType = ThemeContext;
    render() {
        const { toggleTheme } = this.context;
        return (
           <button onClick={toggleTheme}>Toggle Theme</button>
        );
    }
}

export default ToggleButton;
