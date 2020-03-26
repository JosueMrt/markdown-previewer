import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <div id="editor-container">
          <div id="editor-header" className="box-header"><p>EDITOR</p></div>
          <textarea id="editor" cols="30" rows="10"></textarea>
        </div>
        <div id="preview-container">
          <div id="preview-header" className="box-header"><p>PREVIEW</p></div>
          <div id="preview">
            <h1>Ah yeah</h1>
            <p>Hello</p>
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;
