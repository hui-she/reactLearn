import React from 'react';
export default class ant extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    //会报错  props为只读属性
    changeName = ()=>{
        this.props.name = 'aaa';
    }

    //调用父组件方法
    changeNameNew = ()=>{
        this.props.change("bbb");
    }

    render() {
        return(
            <div>
                <p>hello,{this.props.name?this.props.name:'菜鸡'}</p>
                <button onClick={this.changeName}>改名aaa</button>
                <button onClick={this.changeNameNew}>改名bbb</button>
                <br/>
                <br/>
                <button onClick={this.props.add}>计算</button>
                <p>结果为 {this.props.sum}</p>
                
            </div>
        )
    }
}