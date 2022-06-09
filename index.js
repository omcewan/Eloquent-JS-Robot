// This is the project from Chapter 7 of Eloquent JavaScript.
// The project is the creation of a mail delivery robot

// These are the 14 roads of the town Meadowfield
const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

function buildGraph(edges) {
  // create an object with a empty prototype
  let graph = Object.create(null);

  function addEdge(from, to) {
    // check if the graph object has the from property if it doesn't we set its value to an array of [to]. If it does then we just push to it.
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  console.log(graph);
  return graph;
}

const roadGraph = buildGraph(roads);
