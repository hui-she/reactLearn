import React from 'react';
import Child from './propsChild';
import List from './list';
import PropsTypes from './propsTypes';
export default class parents extends React.Component{

    constructor() {
        super();
        this.state = {
            windowFlag: false,
            list: [{
                name:'菜鸡'
            },{
                name:'小白'
            },{
                name:'小黑'
            },{
                name:'小米'
            }],
            listNull: []
        }
    }

    componentDidMount() {
        console.log(this.refs);
        //数组去重
        let arr = [2,3,1,4,3,7]
        // let newArr = Array.from(new Set(arr));
        let newArr = [...new Set(arr)];
        console.log(newArr)
    }

    showWindow = ()=>{
        let {windowFlag} = this.state;
        this.setState({
            windowFlag: !windowFlag
        })
    }

    render() {
        let {windowFlag, list, listNull} = this.state;
        return (
            <div>
                <button onClick={this.showWindow}>{windowFlag?'回去吧':'出来吧'}弹窗</button>

                <Child showFlag={windowFlag}>
                    <span ref='abc' style={{fontSize:'12px'}}>1</span>
                    <span style={{fontSize:'14px'}}>2</span>
                </Child>

                <List list={list}></List>

                <PropsTypes list={list} test={listNull}></PropsTypes>
            </div>
        )
    }
}