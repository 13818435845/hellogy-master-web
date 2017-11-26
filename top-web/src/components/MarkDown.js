import MDReactComponent from 'markdown-react-js';
import React ,{Component} from 'react'
const ReactMarkdown = require('react-markdown')

const input = '# This is a header\n\nAnd this is a paragraph'
class MarkDown extends Component{

    render() {
        return (
          <ReactMarkdown source={input} /> 
        );
      }
}

export default MarkDown;

