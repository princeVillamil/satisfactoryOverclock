import dagre from "dagre"
import type { Node, Edge } from "reactflow"

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(()=>({}));

const nodeWidth = 150
const nodeHeight = 60

export function getElementsLayoutUtils(nodes: Node[], edges: Edge[]){
    dagreGraph.setGraph({ rankdir: "LR" });

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
                y: position.y - nodeWidth / 2
            }
        }
    })

    return { nodes: layoutNodes, edges}
}