import React ,{Component} from "react"
import { Form, Button, Col, Row, Input, TreeSelect ,Upload,Icon} from "antd"
import RichEdictor from "../RichEditor"
const TreeNode = TreeSelect.TreeNode;
const FormItem = Form.Item
const { TextArea } = Input;

let BlogContent =""
let classify = null
class AddArticle extends Component{

    constructor(pops){
        super(pops);
        this.state={
            blogTypeId:'',
            blogTitle:'',
            blogTag:'',
            blogSummary:'',
            BlogType:'',
            imgSrc : ''
        }
    }

    handleSumbit=(e)=>{
        let data ={
          blogTitle : this.state.blogTitle,
          blogTag : this.state.blogTag,
          blogSummary : this.state.blogSummary,
          blogType :this.state.blogType,
          blogContent : BlogContent,
          groupId : 12,
          userId :1
        }
        let onSubmit = this.props.onSubmit
        if(onSubmit)
            onSubmit(data)
    }

    getContent(content){
      BlogContent = content
    }

    onChangeblogTitle=(e)=>{
        this.setState({
            blogTitle : e.target.value
        })
    }
    onChangeblogSummary=(e)=>{
        this.setState({
            blogSummary : e.target.value
        })
    }
    onChangeblogType=(value,label)=>{
        this.setState({
            blogTypeId:value,
            blogType : label[0],
        })
    }
    onChangeblogTag=(e)=>{
        this.setState({
            blogTag : e.target.value
        })
    }

    findParentNode(classify){
        let arr = []
        classify.map((item)=>{
            if(item.parentId === "" || item.parentId === 0)
                arr.push(item)
        })
        return arr
    }

    findSonNode(nodesId,classify){
        let arr = []
        classify.map((item)=>{
            if(item.parentId === nodesId)
                arr.push(
                    <TreeNode key={item.id} title={item.displayName} value={item.id}></TreeNode>
                )
        })
        return arr
    }

    createNodes(classify){
        let arr = this.findParentNode(classify);
        let nodes =[]
        arr.map((node)=>{
            nodes.push(
                <TreeNode key={node.id} title={node.displayName} value={node.id}>
                {
                    this.findSonNode(node.id , classify)
                }
                </TreeNode>
            )
        })
        return nodes
    }

    getReturn=(e)=>{
        if(e.file.response !== null && e.file.response !== undefined){
            this.setState({
                imgSrc : "<img src='"+ e.file.response.msg +"'/>"
            })
        }
    }

    render(){
        classify = this.props.classify
        return(
            <div style = {{lineHeight :'40px' ,marginLeft:'15%' ,marginRight:'15%' , width:'100%',height:'100%',overflowY:'auto'}}>
                <div >
                    <p style={{ fontSize: "20px", textAlign: "center" }}>创建文章</p>
                    <br />
                </div>
                文章标题 ： <Input  placeholder="文章标题" size='large' onChange={this.onChangeblogTitle}/>
                文章分类 ：   
                <TreeSelect
                    style={{ width: "100%" }}
                    value={this.state.blogType}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    size = "large"
                    allowClear
                    treeDefaultExpandAll
                    onChange={this.onChangeblogType}
                >
                    {
                        this.createNodes(classify)
                    }
                </TreeSelect>
                <br/>
                文章标签 ： <Input  placeholder="文章标签" size='large' onChange={this.onChangeblogTag}/>
                文章摘要 ： <Input  placeholder="文章摘要" size='large' onChange={this.onChangeblogSummary}/>
                <br/>
                文章内容：<RichEdictor  onChange={this.getContent}
                    imgSrc = {this.state.imgSrc}/>
                <Row>
                     <Input value={this.state.imgSrc} />
                    <Col span={24} style={{ textAlign: 'right',marginRight:"120px" }}>
                        <Button type="primary" onClick={this.handleSumbit}>提交</Button>
                    </Col>
                </Row>
                <div>
                    <Upload name="file" id='file' action="http://localhost:8080/uploadImage" 
                        listType="picture"
                        onChange = {this.getReturn}>
                        
                        <Button type="ghost">
                            <Icon type="upload" /> 点击上传
                        </Button>
                       
                    </Upload>
                </div>
                
        </div>
        )
    }
}
export default AddArticle;

