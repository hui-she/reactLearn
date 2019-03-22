import React from 'react';
let name = ["小明","小花","小张","小黑"];

//JSX允许直接在模版插入JavaScript变量。如果这个变量是一个数组，则会展开这个数组的所有成员。
let arr = [
    <h3 key={1}>我是段落1</h3>,
    <h4 key={2}>xixixixixix</h4>
]
export default class  test3 extends React.Component{
    render() {
        return(
            <div>
                <p>数组</p>
                {
                    name.map( it => {
                        return <div key={it}>hello,{it}!</div>
                    })
                }
                <p>----------------------</p>
                {arr}
            </div>
        )
    }
}