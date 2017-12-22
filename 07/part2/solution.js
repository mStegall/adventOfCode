const regex = /(\w*)\s\((\d*)\)( -> )?((\w*,? ?)*)/;

function createNodeMap(treeDescription) {
  const nodeDescriptions = treeDescription.split("\n");
  const nodes = new Map();

  nodeDescriptions.forEach(nodeDescription => {
    const [_, name, weight, _1, children] = regex.exec(nodeDescription);
    const node = {
      name,
      weight: parseInt(weight, 10)
    };

    if (children) {
      node.children = children.split(",").map(child => child.trim());
    }

    nodes.set(name, node);
  });

  return nodes;
}

function createTree(node, nodeMap) {
  const tree = Object.assign({}, nodeMap.get(node));

  if (!tree.children) {
    (tree.totalWeight = tree.weight), 10;
    return tree;
  }

  tree.children = tree.children.map(child => createTree(child, nodeMap));
  const childrenWeight = tree.children.reduce(
    (acc, child) => acc + child.totalWeight,
    0
  );
  tree.totalWeight = childrenWeight + tree.weight;
  if (
    tree.children.some(
      child => child.totalWeight !== tree.children[0].totalWeight
    )
  ) {
    console.log(
      "Found Balance Issue. Node: ",
      tree.name,
      tree.totalWeight,
      tree.children
    );
  }

  return tree;
}

function findWeightError(treeDescription) {
  const rootNode = "uownj";
  const nodeMap = createNodeMap(treeDescription);

  return createTree(rootNode, nodeMap);
}

module.exports = findWeightError;
