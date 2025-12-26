import dagre from "dagre"
import type { Node, Edge } from "reactflow"

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(()=>({}));

const nodeWidth = 162.45
const nodeHeight = 121.833
// 162.45×121.833
export function getElementsLayoutUtils(nodes: Node[], edges: Edge[]){
    dagreGraph.setGraph({ 
        rankdir: "LR",
        ranksep: 150, // Distance between columns (Left to Right)
        nodesep: 300 
    });

    nodes.forEach(node=>{
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
    })
    edges.forEach(edge=>{
        dagreGraph.setEdge(edge.source, edge.target)
    })

    dagre.layout(dagreGraph);

    const layoutNodes = nodes.map(node =>{
        const position = dagreGraph.node(node.id)
        return {
            ...node,
            position: {
                x: position.x - nodeWidth / 2,
                y: position.y - nodeHeight / 2
            }
        }
    })

    return { nodes: layoutNodes, edges}
}