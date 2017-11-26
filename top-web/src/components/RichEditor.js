import React from "react"
import Editor from "react-umeditor"


class richEditor extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			content: ""
		}
	}
	handleChange(content){
		this.setState({
			content: content
		})
		let onChange = this.props.onChange
		if(onChange)
			onChange(content)
	}
	getIcons(){
		var icons = [
			"source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
			"paragraph fontfamily fontsize | superscript subscript | ",
			"forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
			"cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
			"horizontal date time  | image emotion spechars | inserttable"
		]
		return icons;
	}
	getPlugins(){
		return {
			"image": { 
				"uploader": { 
					"name":"file", 
					"url": "/api/upload" 
				} 
			} 
		}
	}
	render(){
	    var icons = this.getIcons();
		var plugins = this.getPlugins();
		return (<Editor ref="editor" 
            icons={icons} 
			value={this.state.content} defaultValue="<p>开始写你的博客吧</p>" 
			onChange={this.handleChange.bind(this)} 
			plugins={plugins} />)
	}
}
export default richEditor