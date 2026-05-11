export const findNodeById = (
  tree,
  nodeId
) => {

  for (const node of tree) {

    if (node.id === nodeId) {
      return node;
    }

    if (node.children) {

      const foundNode =
        findNodeById(
          node.children,
          nodeId
        );

      if (foundNode) {
        return foundNode;
      }
    }
  }

  return null;
};

export const updateNodeContent = (
  tree,
  nodeId,
  newContent
) => {

  return tree.map((node) => {

    if (node.id === nodeId) {

      return {
        ...node,

        content: {
          ...node.content,
          value: newContent,
        },
      };
    }

    if (node.children) {

      return {
        ...node,

        children: updateNodeContent(
          node.children,
          nodeId,
          newContent
        ),
      };
    }

    return node;
  });
};