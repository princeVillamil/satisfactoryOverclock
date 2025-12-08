import React, { memo } from 'react';
import { Handle, Position} from 'reactflow';
import type { NodeProps } from 'reactflow';
import type { CSSProperties } from 'react';

interface CustomNodeProps extends NodeProps{
    id: string;
    type: 'input' | 'output' | 'default';
    data: {
        label: string
    };
    position: {
        x: number;
        y: number;
    },
    style?: CSSProperties;
}

const CustomNode: React.FC<CustomNodeProps> = memo(({data})=>{
    return <div className="CustomNode">
        <Handle type="target" position={Position.Left} />
        <div>{data.label}</div>
        <Handle type="source" position={Position.Right} />
    </div>
})

export default CustomNode;