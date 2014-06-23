function createTree() {

    var cluster = d3.layout.cluster()
                    .size([900, 800 - 160]);

    var diagonal = d3.svg.diagonal()
        .projection(function(d) { return [d.x, d.y]; });

    var svg = d3.select("#tree-container").append("svg")
        .attr("width", "100%")
        .attr("height", "900px")
      .append("g")
        .attr("transform", "translate(0,0)");

    d3.json("js/flare.json", function(error, root) {


      var nodes = cluster.nodes(root),
          links = cluster.links(nodes);
      nodes.forEach(function(d) { d.y = d.depth * 100; });

      var link = svg.selectAll(".link")
          .data(links)
        .enter().append("path")
          .attr("class", "link")
          .attr("d", diagonal);

      var node = svg.selectAll(".node")
          .data(nodes)
        .enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })

      node.append("circle")
          .attr("r", 4.5);

      node.append("text")
          .attr("dx", function(d) { return d.children ? -8 : 8; })
          .attr("dy", 3)
          .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
          .text(function(d) { return d.name; });
    });
}