import React from 'react';
import {Prompt} from 'react-router-dom';

//需要注意的是，如果你用MemoryRouter路由模式，<Prompt>不起作用。

//<Prompt>标签有两个属性：

//message：用于显示提示的文本信息。
//when：传递布尔值，相当于标签的开关，默认是true，设置成false时，<Prompt>失效。

class prompt extends React.Component{
    constructor() {
        super();
        this.state={
            power:true
        }
    }

    gogogo = ()=>{
        let {power} = this.state;
        this.setState({
            power: !power
        });
    }

    render() {
        let {power} = this.state;
        return (
            <div>
                <h2>你离开试试</h2>
                <Prompt when={power} message="你是不是想溜"/>
                <button onClick={this.gogogo}>{power?'打了才能跑':'你还不跑？'}</button>
            </div>
        )
        function consoleNum (num){
            for(let i=0;i<num;i++){
                let a = Math.random();
                a<0.2?console.log('a'):(a<0.5?console.log('b'):console.log('c'))
            }
        }
    }
}
export default prompt;