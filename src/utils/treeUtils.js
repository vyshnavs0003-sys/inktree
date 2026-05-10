export const addNode = (tree, parentId, newNode) => {
  return tree.map((node) => {
    if (node.id === parentId && node.type === "container") {
      return {
        ...node,
        children: [...node.children, newNode],
      };
    }

    if (node.children) {
      return {
        ...node,
        children: addNode(
          node.children,
          parentId,
          newNode
        ),
      };
    }

    return node;
  });
};

export const deleteNode = (tree, nodeId) => {
  return tree
    .filter((node) => node.id !== nodeId)
    .map((node) => {
      if (node.children) {
        return {
          ...node,
          children: deleteNode(
            node.children,
            nodeId
          ),
        };
      }

      return node;
    });
};