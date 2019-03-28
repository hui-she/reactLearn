import React from 'react';
class form extends React.Component{
    constructor() {
        super();
        this.state = {
            input1: '',
            select1: '',
            input2: 'aaa'
        }
    }

    componentWillMount(){
        console.log(this.props)
    }

    componentDidMount() {
        function setN(obj){
                obj.name='1';
            console.log(per === obj,1)
                obj = new Object();
            console.log(per === obj,2)
                obj.name = '2';
                console.log(obj)
            };
            var per = new Object();
            setN(per);
            console.log(per)
            console.log(per.name);
    }

    changeInput = (e,name)=>{
        this.setState({
            [name]: e.target.value
        });
    }

    changeInputNew = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        let {input1, select1, input2} = this.state;
        return (
            <div>
                <input type="text" onChange={(e) => this.changeInput(e,"input1")} />{input1}
                <select name="city" value={select1} onChange={(e) => this.changeInput(e,"select1")}>
                    <option value="027">武汉</option>
                    <option value="0712">大悟</option>
                    <option value="001">北京</option>
                    <option value="002">上海</option>
                </select>{select1}
                <br/>
                <input type="text" value={input2} name="input2" onChange={(e) =>{this.changeInputNew(e)}}/>{input2}
                {/* <input type="text" value="teste"/> */}
                <br/>
                <p>页面参数{this.props.match.params.param}</p>
            </div>
        )
    }
}
export default form;