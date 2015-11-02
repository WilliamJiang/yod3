'use strict';

angular.module('yod3App')
  .controller('MainCtrl', function ($scope, $http, socket, localStorageService) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    /**
     * william from: http://bl.ocks.org/mbostock/4063269
     */
    $scope.createGraph = function() {
      var d3 = d3 || window.d3;
      var diameter = 960,
        format = d3.format(",d"),
        color = d3.scale.category20c();

      var bubble = d3.layout.pack()
        .sort(null)
        .size([diameter, diameter])
        .padding(1.5);

      /**
       * select('#chart') instead of 'body'.
       */
      var svg = d3.select("body").append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

      d3.json("data/flare.json", function(error, root) {
        if (error) {
          throw error;
        }

        var node = svg.selectAll(".node")
          .data(bubble.nodes(classes(root))
            .filter(function(d) { return !d.children; }))
          .enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("title")
          .text(function(d) { return d.className + ": " + format(d.value); });

        node.append("circle")
          .attr("r", function(d) { return d.r; })
          .style("fill", function(d) { return color(d.packageName); });

        node.append("text")
          .attr("dy", ".3em")
          .style("text-anchor", "middle")
          .text(function(d) { return d.className.substring(0, d.r / 3); });
      });

// Returns a flattened hierarchy containing all leaf nodes under the root.
      function classes(root) {
        var classes = [];

        function recurse(name, node) {
          if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
          else classes.push({packageName: name, className: node.name, value: node.size});
        }

        recurse(null, root);
        return {children: classes};
      }

      d3.select(self.frameElement).style("height", diameter + "px");
    };

    if('#chart.length' && '#chart.text()'===0) {
      $scope.createGraph();
    }

    /**
     * potentially use localStorageService
     * http://yeoman.io/codelab/local-storage.html
     *
     * var todosInStore = localStorageService.get('todos');
     * $scope.$watch('todos', function () {
     *   localStorageService.set('todos', $scope.todos);
     * }, true);
     */

  });
