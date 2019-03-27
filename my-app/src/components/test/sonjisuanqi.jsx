import React from 'react';
export default class jisuanqi extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sun: ''
        };
    }

    componentWillUpdate() {
        console.log('子元素更新开始');
    }

    componentDidUpdate() {
        console.log('子元素更新结束');

    }

    add = ()=>{
        let sun = '';
        let {val1, val2, val3} = this.props;
        // sun = parseInt(val1)+parseInt(val2)+parseInt(val3);
        sun = val1*1+val2*1+val3*1;
        this.setState({
            sun: sun
        });
    }

    render() {
        return (
            <div>
                <h2>我是计算器2</h2>
                <p>用来在子组件计算父组件传来的值</p>
                <br/>
                <button onClick={this.add}>计算</button>
                <p>结果为 {this.state.sun}</p>
                <br/>
                <p style={{width:'80px',height:'20px',borderRadius: '0 10px 10px 12px',border:'1px solid #333',marginLeft:'20px'}}></p>
            </div>
        )
    }
}