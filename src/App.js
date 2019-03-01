import React, { Component } from 'react';

import './App.css';
let marked =require('marked');
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
    return `<a target="_blank" href="${href}">${text} + </a>`
}



const example = 
`# Hello World!

## I have built this markup previewer using React.

You can learn React by going to their website  [Learn React](https://reactjs.org/docs/getting-started.html#learn-react) .

Here is an example of inline code \`<example></example>\` using backticks.





\`\`\`javascript
// To insert blockcode use three backticks, we are using React
// Example usage: <ShoppingList name="Coder" />

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Laptop</li>
          <li>Screen</li>
          <li>Router</li>
        </ul>
      </div>
    );
  }
}
\`\`\`

The Shopping-List items will print like this:
 * laptop
 * Screen
 * Router

> “*A language that doesn't affect the way you think about programming is not worth knowing.*” 
  **Alan J. Perlis**

> I have  **bold** the author and *italicize* the quote.

##### Enjoy learning React #####
![React](/react-logo.png "React logo")`


class App extends Component {
  state = {
markdown: example

  }

  changeMarkdown = (newMarkdown) => {
    this.setState ({ 
     
        markdown: newMarkdown
     
    })
  }

  changeMarkdownInput = (event) =>{
this.setState ({
  markdown: event.target.value
})
  }


  render() {
    return (
      <div className="App">
      <h1>Markdown Previewer</h1>
    <div className='main'>
      <div className='left'>
  
    
        <textarea   id="editor"  onChange={this.changeMarkdownInput} value ={this.state.markdown}/>
        </div>
        <div className='right'>
         <div  id="preview" dangerouslySetInnerHTML = {{__html: marked(this.state.markdown, { renderer: renderer })}}></div>
         </div>
     </div>
      </div> 
    );
  }
}

export default App;
