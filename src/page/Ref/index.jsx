import React from 'react';
const Ref = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <p>Ref组件</p>
        </div>
    )
})
export default Ref