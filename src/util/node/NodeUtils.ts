export type Attr = {name: string, value: any}
export class NodeUtils {
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    static removeAllChildNode(node: Node) {
        while (node?.firstChild) {
            node.firstChild.remove();
        }
    }

    static replaceNode(targetNode: Node, newNode: Node) {
        targetNode.parentNode?.replaceChild(newNode, targetNode);
    }
    // static nodeListToArray(nodeList: NodeListOf<Element>) {
    //     Array.prototype.slice.call(nodeList);
    // }
}
