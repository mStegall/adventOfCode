function findRoot(treeDescription) {
  const nodeDescriptions = treeDescription.split("\n");
  const nodes = new Set();
  const nonRootNodes = new Set();

  nodeDescriptions.forEach(nodeDescription => {
    const [nodeShort, children] = nodeDescription.split(" -> ");
    const [nodeName] = nodeShort.split(" ");

    if (children) {
      children.split(",").forEach(child => nonRootNodes.add(child.trim()));
    }
  });

  // nonRootNodes.forEach(console.log)

  nodes.forEach(node => {
    if (!nonRootNodes.has(node)) {
      console.log(node);
    }
  });
}

module.exports = findRoot;
