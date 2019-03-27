import React from 'react';
export default class test3 extends React.Component{
    constructor(props) {
        //this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
        super(props);
        this.state = {
            enable:false
        }
    }

    
    handleClick = ()=> {
        console.log(123)
        console.log(this.state.enable)
        // console.log(this)
    }

    //切换禁用状态
    changeFlag = ()=> {
        this.setState({
            enable: !this.state.enable
        },()=>{
            console.log(1)
        })
        console.log(2)
    }

    //传参1
    test = (a) => {
        console.log('test')
        console.log(a)
    }
    //传参2
    testx = (num) => () =>{
        console.log("第二种传参");
        console.log(num)
    }

    componentDidMount() {
        console.log(this.state.enable);
        // this.handleClick();
        // this.test()
    }


    render() {
        return(
            <div>
                <div onClick={this.handleClick}>state</div>
                <div onClick={() => this.test(12)}>click</div>
                <div onClick={this.testx(2222)}>click2</div>
                <div onClick={(e) => this.test(e)}>click  eeee</div>
                <br/>
                <br/>
                <div>state</div>
                <button onClick={this.changeFlag}>切换状态</button>
                <button>{this.state.enable?'启用':'禁用'}</button>
            </div>
            
        )
    }
} 