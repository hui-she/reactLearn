import React from 'react';
export default class parents extends React.Component{

    componentDidMount() {
        console.log(this.refs);
        console.log(this.props.children);
    }

    render() {
        let {showFlag} = this.props;
        //这里需要注意，this.props.children的值有三种可能，如果当前组件没有子节点，他就是undfined；如果有一个子节点，数据类型是object；如果有多个子节点，数据类型就是array。所以处理this.proprs.children的时候要小心。
        if(showFlag){
            return (
                <div>
                    {
                        React.Children.map(this.props.children,(it,idx)=>{
                            return <div style={{fontSize:'20px'}}>这是第{idx}个子节点,{it}</div>
                        })
                    }
                </div>
            )
        }else{
            return null
        }
    }
}