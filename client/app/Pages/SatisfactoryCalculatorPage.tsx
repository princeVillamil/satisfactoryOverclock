import { useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

import { getElementsLayoutUtils } from "./Utils/getElementsLayoutUtils";

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';
const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input' },
    position,
    style: {
      background: '#1A1A1A', // background color
      color: '#ffffff',      // text color
      padding: 10,
      border: '2px solid #ff0000',
      borderRadius: 5,
      fontWeight: 'bold'
    }
    
  },
  {
    id: '2',
    data: { label: 'node 2' },
    position,
  },
  {
    id: '2a',
    data: { label: 'node 2a' },
    position,
  },
  {
    id: '2b',
    data: { label: 'node 2b' },
    position,
  },
  {
    id: '2c',
    data: { label: 'node 2c' },
    position,
  },
  {
    id: '2d',
    data: { label: 'node 2d' },
    position,
  },
  {
    id: '3',
    data: { label: 'node 3' },
    position,
  },
  {
    id: '4',
    data: { label: 'node 4' },
    position,
  },
  {
    id: '5',
    data: { label: 'node 5' },
    position,
  },
  {
    id: '6',
    type: 'output',
    data: { label: 'output' },
    position,
  },
  { id: '7', type: 'output', data: { label: 'output' }, position },
];
const initialEdges = [
  { id: 'e12', source: '1', target: '2', type: edgeType, animated: true },
  { id: 'e13', source: '1', target: '3', type: edgeType, animated: true },
  { id: 'e22a', source: '2', target: '2a', type: edgeType, animated: true },
  { id: 'e22b', source: '2', target: '2b', type: edgeType, animated: true },
  { id: 'e22c', source: '2', target: '2c', type: edgeType, animated: true },
  { id: 'e2c2d', source: '2c', target: '2d', type: edgeType, animated: true },
  { id: 'e45', source: '4', target: '5', type: edgeType, animated: true },
  { id: 'e56', source: '5', target: '6', type: edgeType, animated: true },
  { id: 'e57', source: '5', target: '7', type: edgeType, animated: true },
];


export function SatisfactoryCalculatorPage() {
  const { nodes, edges } = getElementsLayoutUtils(initialNodes, initialEdges)
  const [flowNodes] = useState(nodes);
  const [flowEdges] = useState(edges);



  return (
    <main className="flex gap-5 mt-16 mb-4 ml-4 mr-4">
      
      <div className="CalcDisplay flex-5">
        <div className="border-2 border-white-500" style={{ width: "100%", height: "500px" }}>
          <ReactFlow 
            nodes={flowNodes} 
            edges={flowEdges}
            attributionPosition="bottom-left" 
          >
          <Background
            gap={20}
            color="#ffffffff"
          />
            {/* <Controls /> */}
          </ReactFlow>
        </div>
      </div>
      <div className="CalcInput flex-2 outline outline-2 outline-blue-500 rounded-md">
        Wgt
      </div>
      {/* <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">


          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              What&apos;s next?
            </p>
            <ul>
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div> */}
    </main>
  );
}

