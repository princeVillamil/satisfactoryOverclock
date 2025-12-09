import React, { memo } from 'react';
import { Handle, Position} from 'reactflow';
import type { NodeProps } from 'reactflow';
import type { CSSProperties } from 'react';
import { getImage } from '~/Utils/getImage';

    // data: { 
    //   label: 'desc-coppersheet-c',
    //   ingredients: [
    //     {
    //       "item": "Desc_CopperIngot_C",
    //       "amount": 2.0
    //     }
    //   ],
    //   products: [
    //     {
    //       "item": "Desc_CopperSheet_C",
    //       "amount": 1.0
    //     }
    //   ],
    //   producedIn: [
    //       "Desc_ConstructorMk1_C"
    //     ]

    // },
interface CustomNodeProps extends NodeProps {
  data: {
    label: string;
    ingredients: string[];
    products: string[];
    producedIn: string[];
  };
}

const CustomNode: React.FC<CustomNodeProps> = memo(({data})=>{
    console.log("test-", getImage("Desc_ConstructorMk1_C","256"))
    return <div className="CustomNode bg-zinc-500 ">

        <div className="CustomeNodeIcon flex">
            <div className="CustomeNodeIngredients flex-1">

            </div>
            <div className="CustomeNodeProducedIn flex-2">

            </div>
            <div className="CustomeNodeProducts flex-1">

            </div>
        </div>
        {/* <Handle type="target" position={Position.Left} />
        <div>{data.label}</div>
        <Handle type="source" position={Position.Right} /> */}

    </div>
})

export default CustomNode;