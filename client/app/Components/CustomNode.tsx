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
interface Ingredients{
  item: string;
  amount: string;
}
interface Products{
  item: string;
  amount: string;
}
interface CustomNodeProps extends NodeProps {
  data: {
    label: string;
    ingredients: Ingredients[];
    products: Products[];
    producedIn: string[];
  };
}

const CustomNode: React.FC<CustomNodeProps> = memo(({data})=>{
    console.log("test log ------",data.producedIn[0])
    return <div className="CustomNode bg-zinc-500 max-w-[200px] border border-zinc-300 border-2">
        <div className="CustomeNodeIcon flex">
            <div className="CustomeNodeIngredients flex flex-1">
              {data.ingredients && data.ingredients.length > 0 ? 
              (<div className='flex flex-col justify-around w-full'>
                {data.ingredients.map(x=>{
                  console.log(x.item, "restsfsfdsfsdf")
                  return (
                    <>
                      <Handle type="target" position={Position.Left} />
                      <img key={x.item+"_ingredients_key"} className='max-w-[30px]' src={getImage(x.item, '64')} alt="" />
                    </>
                  )
                })}
              </div>)
              : 
              (
                <span className="text-red-500 text-sm">None</span>
              )
              }
            </div>
            <div className="CustomeNodeProducedIn flex-2">
              <img className='' src={getImage(data.producedIn[0], '256')} alt="" />
            </div>
            <div className="CustomeNodeProducts flex flex-1">
              {data.products && data.products.length > 0 ? 
              (<div className='flex flex-col justify-around items-end w-full'>
                {data.products.map(x=>{
                  console.log(x.item, "restsfsfdsfsdf")
                  return (
                    <>
                      <img key={x.item+"_products_key"} className='max-w-[30px]' src={getImage(x.item, '64')} alt="" />
                      <Handle type="source" position={Position.Right} />
                    </>
                  )
                })}
              </div>)
              : 
              (
                <span className="text-red-500 text-sm">None</span>
              )
              }
            </div>
        </div>
        <div className="CustomNodeOutput w-full flex flex-col">
          <div className="CustomNodeCurrentOutput w-full flex justify-center items-center">
            <span>60</span>
          </div>
          <div className="CustomNodeCurrentMaxOutput bg-zinc-800 w-full flex justify-center items-center">
            <span>100</span>
          </div>
        </div>
        {/* <Handle type="target" position={Position.Left} />
        <div>{data.label}</div>
        <Handle type="source" position={Position.Right} /> */}

    </div>
})

export default CustomNode;