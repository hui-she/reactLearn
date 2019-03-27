import React from 'react';
export default class life extends React.Component{
    constructor() {
        super();
        this.state = {
            opacity: 1,
            timer: ''
        };
    }

    componentDidMount() {
        console.log('渲染完成，开始闪闪闪');
        let timer = setInterval(()=>{
            let opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            })
        },100);

        this.setState({
            timer: timer
        });
    }

    // componentWillUpdate() {
    //     console.log('更新开始');
    // }

    // componentDidUpdate() {
    //     console.log('更新结束');

    // }

    stopShan = ()=>{
        console.log("别闪了");
        clearInterval(this.state.timer);
        this.setState({
            opacity: 1
        });

        this.foreachTest();
    }

    
    foreachTest = ()=>{
        let arr1 = [1,2,3];
        let arr2 = [{
            a:1
        },{
            a:2
        },{
            a:3
        }]
        arr1.forEach((it)=>{
            it += 1
        })
        arr2.forEach((it)=>{
            it.a += 1
        })
        console.log('forEach')
        console.log(arr1)
        console.log(arr2)
        arr1.map((it)=>{
            it += 1
            return it;
        })
        arr2.map((it)=>{
            it.a += 1
            return it;
        })
        console.log('map')
        console.log(arr1)
        console.log(arr2)

        let newArr = [];
        let obj = {};
        arr1.map((it)=>{
            obj.a = it;
            newArr.push(obj)
            return it;
        })
        console.log(newArr)

    }

    render() {
        let {opacity} = this.state;
        return (
            <div>
                <p style={{opacity:opacity}}>我会闪闪闪</p>
                <button onClick={this.stopShan}>别闪了</button>
            </div>
        )
    }
}