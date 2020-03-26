import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
        <div id="editor-container">
          <div id="editor-header" className="box-header"><p>EDITOR</p></div>
          <textarea id="editor" cols="30" rows="10" value={this.props.input} onChange={this.props.handleChange}></textarea>
        </div>
        );
    }
}
 
export default Editor;