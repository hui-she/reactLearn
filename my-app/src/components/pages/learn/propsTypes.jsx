import React from 'react';
import PropTypes from 'prop-types';

class propsType extends React.Component{
    render() {
        let {list} = this.props;
        return (
            <div>
                {
                    list.map((it,idx) =>{
                        return <p key={idx}>{it.name}</p>
                    })
                }
            </div>
        )
    }
}


//校验props
propsType.propTypes = {
    list: PropTypes.array,
    test: PropTypes.string
}

export default propsType;