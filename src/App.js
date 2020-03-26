import React from 'react';
import './App.css';
import marked from 'marked';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ``
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() { 
    return ( 
      <div className="App">
        <div id="editor-container">
          <div id="editor-header" className="box-header"><p>EDITOR</p></div>
          <textarea id="editor" cols="30" rows="10" onChange={this.handleChange}></textarea>
        </div>
        <div id="preview-container">
          <div id="preview-header" className="box-header"><p>PREVIEW</p></div>
          <div id="preview">
            <div dangerouslySetInnerHTML={{__html:marked(this.state.input)}}></div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;
