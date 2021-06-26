import React from 'react';
import { useNode } from "@craftjs/core";

const Text = ({text, fontSize}) => {
    const { connectors: {connect, drag} } = useNode();

    Text.craft = {
        rules: {
          canDrag: (node) => node.data.props.text !== "Drag"
        }
    }

    return (
        <div ref={ref => connect(drag(ref))}>
            <p style={{fontSize}}>{text}</p>
        </div>
    )
}

export default Text
