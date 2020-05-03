import React, { useEffect } from 'react';

// const Marker = (props) => {
//     const { color, name } = props;
//     return (
//       <div className="marker"
//         style={{ backgroundColor: color, cursor: 'pointer'}}
//         title={name}
//       />
//     );
// };

function Marker ( props ) {

    const style = {
        borderRadius: '50%',
        backgroundColor: props.inside ? 'green' : 'red',
        width: '15px',
        height: '15px',
        cursor: 'pointer'
    }

    // 
    useEffect( () => {
        props.isInside( props.name, props.inside ); 
    }, [props.inside]);

    return (
        <div style={style} title={props.name}/>
    );
}

export default Marker;