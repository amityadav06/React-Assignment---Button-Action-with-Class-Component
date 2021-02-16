import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
	super(props);
	    
	    this.state = {
	      	para: ""
	};
	    
};

	
 handlePara = () => {
	this.setState({
		para: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
	})
}
	
	
    render() {
    	return(
    		<div id="main">
			{ /* Do not remove this main div!! */ }
			<button id="click" onClick={this.handlePara}>
			  click
			</button>
			<h1 id="para">{this.state.para}</h1>
    		</div>
    	);
    }
}


export default App;

