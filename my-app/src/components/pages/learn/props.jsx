import React from 'react';
import Ant from '../../test/props'
import Jisuan from '../../test/sonjisuanqi'
export default class theProps extends React.Component{
    constructor() {
        super();
        this.state = {
            inputVal : '',
            sum: '',
            val1: '',
            val2: '',
            val3: '',
            aaa: '12'
        }
    }

    componentWillUpdate() {
        console.log('父元素更新开始');
    }

    componentDidUpdate() {
        console.log('父元素更新结束');

    }

    inputChange = (e)=>{
        console.log(e.target.value);
        this.setState({
            inputVal: e.target.value
        })
        // console.log(e);
    }

    changeName = (val)=>{
        this.setState({
            inputVal: val
        })
    }

    allAdd = ()=>{
        let sum = "";
        sum = parseInt(this.refs.val1.value)+parseInt(this.refs.val2.value)+parseInt(this.refs.val3.value);
        this.setState({
            sum: sum
        });
    }

    changeInput = (e,name)=> {
        switch (name){
            case 'input1':
            this.setState({
                val1: e.target.value
            });
            break;
            case 'input2':
            this.setState({
                val2: e.target.value
            });
            break;
            case 'input3':
            this.setState({
                val3: e.target.value
            });
            break;
            default :
            console.log("没得");
        }
    }

    changeInputNew = (e,name)=> {
        this.setState({
            [name] : e.target.value
        })
    }

    render() {
        const {val1, val2, val3, sum, inputVal, ...ohtersValue} = this.state
        console.log(ohtersValue)
        return(
            <div>
                <input type="text" onChange={(e) => this.inputChange(e)}/>
                <Ant
                 name={inputVal} 
                 change={this.changeName} 
                 sum={sum} 
                 add={this.allAdd}></Ant>

                <br/>
                <br/>
                <p>计算器</p>
                <input type="text" onChange={(e)=>this.changeInputNew(e,'val1')} ref="val1"/>+
                <input type="text" onChange={(e)=>this.changeInputNew(e,'val2')} ref="val2"/>+
                <input type="text" onChange={(e)=>this.changeInputNew(e,'val3')} ref="val3"/>
                <br/>
                <Jisuan 
                val1={val1}
                val2={val2}
                val3={val3}></Jisuan>
            </div>
        )
    }
}