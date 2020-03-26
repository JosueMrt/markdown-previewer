import React from 'react';
import marked from 'marked';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
        <div id="preview-container">
          <div id="preview-header" className="box-header"><p>PREVIEW</p></div>
          <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.props.input, {gfm: true, breaks: true})}}></div>
        </div>
        );
    }
}
 
export default Preview;