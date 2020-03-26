import React from 'react';
import './App.css';
import marked from 'marked';
import welcomeMsg from './welcomeMsg';
import Editor from './components/editor'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: welcomeMsg
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
        <Editor handleChange={this.handleChange} input={this.state.input}/>
        <div id="preview-container">
          <div id="preview-header" className="box-header"><p>PREVIEW</p></div>
          <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.state.input, {gfm: true, breaks: true})}}></div>
        </div>
      </div>
     );
  }
}
 
export default App;
