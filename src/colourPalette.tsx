import React from 'react';
import './colourPalette.css'

const ColourPalette: React.FC = () => {
  return (
    <div className="app-styleguide">
      <h2>Application UI</h2>
      <div>
        <button className="btn-primary">Primary</button>
        <button className="btn-secondary">Secondary</button>
        <button className="btn-tertiary">Tertiary</button>
        <button className="btn-destructive">Destructive</button>
      </div>
      <div><a href="#">Link</a></div>
      <div><h1>Head 1</h1></div>
      <div><h2>Head 2</h2></div>
      <div><p>Normal text</p></div>
      <div>
        <input type="text" defaultValue="App Input" />
      </div>
      <div>
        <input className="invalid" type="text" defaultValue="App Input" />
      </div>
      <div>
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="close-icon">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path fill="currentColor" d="M18.3,5.71 C17.91,5.32 17.28,5.32 16.89,5.71 L12,10.59 L7.11,5.7 C6.72,5.31 6.09,5.31 5.7,5.7 C5.31,6.09 5.31,6.72 5.7,7.11 L10.59,12 L5.7,16.89 C5.31,17.28 5.31,17.91 5.7,18.3 C6.09,18.69 6.72,18.69 7.11,18.3 L12,13.41 L16.89,18.3 C17.28,18.69 17.91,18.69 18.3,18.3 C18.69,17.91 18.69,17.28 18.3,16.89 L13.41,12 L18.3,7.11 C18.68,6.73 18.68,6.09 18.3,5.71 Z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default ColourPalette;
