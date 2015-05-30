'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:ChartsCtrl
 * @description
 * # ChartsCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('ChartsCtrl', function ($scope) {

    $scope.page = {
      title: 'Charts & Graphs',
      subtitle: 'Place subtitle here...'
    };

    $scope.basicData = [
      { year: '2009', a: 15,  b: 5 },
      { year: '2010', a: 20,  b: 10 },
      { year: '2011', a: 35,  b: 25 },
      { year: '2012', a: 40, b: 30 }
    ];

    $scope.donutData = [
      {label: 'Download Sales', value: 12},
      {label: 'In-Store Sales', value: 30},
      {label: 'Mail-Order Sales', value: 20}
    ];

    $scope.areaData = [
      { year: '2009', a: 10,  b: 3 },
      { year: '2010', a: 14,  b: 5 },
      { year: '2011', a: 8,  b: 2 },
      { year: '2012', a: 20, b: 15 }
    ];

  })

  .controller('LineChartCtrl', function ($scope) {

    $scope.dataset = [{
      data: [[1,5.3],[2,5.9],[3,7.2],[4,8],[5,7],[6,6.5],[7,6.2],[8,6.7],[9,7.2],[10,7],[11,6.8],[12,7]],
      label: 'Sales',
      points: {
        show: true,
        radius: 6
      },
      splines: {
        show: true,
        tension: 0.45,
        lineWidth: 5,
        fill: 0
      }
    }, {
      data: [[1,6.6],[2,7.4],[3,8.6],[4,9.4],[5,8.3],[6,7.9],[7,7.2],[8,7.7],[9,8.9],[10,8.4],[11,8],[12,8.3]],
      label: 'Orders',
      points: {
        show: true,
        radius: 6
      },
      splines: {
        show: true,
        tension: 0.45,
        lineWidth: 5,
        fill: 0
      }
    }];

    $scope.options = {
      colors: ['#a2d200', '#cd97eb'],
      series: {
        shadowSize: 0
      },
      xaxis:{
        font: {
          color: '#ccc'
        },
        position: 'bottom',
        ticks: [
          [ 1, 'Jan' ], [ 2, 'Feb' ], [ 3, 'Mar' ], [ 4, 'Apr' ], [ 5, 'May' ], [ 6, 'Jun' ], [ 7, 'Jul' ], [ 8, 'Aug' ], [ 9, 'Sep' ], [ 10, 'Oct' ], [ 11, 'Nov' ], [ 12, 'Dec' ]
        ]
      },
      yaxis: {
        font: {
          color: '#ccc'
        }
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        color: '#ccc'
      },
      tooltip: true,
      tooltipOpts: {
        content: '%s: %y.4',
        defaultTheme: false,
        shifts: {
          x: 0,
          y: 20
        }
      }
    };
  })

  .controller('BarChartCtrl', function ($scope) {

    $scope.data2 = [];

    for (var i = 0; i < 20; ++i) {
      $scope.data2.push([i, Math.sin(i+0.1)]);
    }

    $scope.dataset = [{
      data: $scope.data2,
      label: 'Satisfaction',
      color: '#e05d6f'
    }];

    $scope.options = {
      series: {
        shadowSize: 0
      },
      bars: {
        show: true,
        barWidth: 0.6,
        lineWidth: 0,
        fillColor: {
          colors: [{ opacity:0.8 }, { opacity:0.8}]
        }
      },
      xaxis: {
        font: {
          color: '#ccc'
        }
      },
      yaxis: {
        font: {
          color: '#ccc'
        },
        min: -2,
        max: 2
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        color: '#ccc'
      },
      tooltip: true
    };
  })

  .controller('OrderedChartCtrl', function ($scope) {

    $scope.dataset = [{
      data: [[10, 50], [20, 80], [30, 60], [40, 40]],
      label: 'A'
    }, {
      data: [[10, 30], [20, 50], [30, 70], [40, 50]],
      label: 'B'
    }, {
      data: [[10, 40], [20, 60], [30, 90], [40, 60]],
      label: 'C'
    }];

    $scope.options = {
      series: {
        shadowSize: 0
      },
      bars: {
        show: true,
        fill: true,
        lineWidth: 0,
        fillColor: {
          colors: [{ opacity:0.6 }, { opacity:0.8}]
        },
        order: 1, // order bars
        colors: ['#428bca','#d9534f','#A40778']
      },
      xaxis: {
        font: {
          color: '#ccc'
        }
      },
      yaxis: {
        font: {
          color: '#ccc'
        }
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        color: '#ccc'
      },
      tooltip: true
    };
  })

  .controller('StackedChartCtrl', function ($scope) {

    $scope.dataset = [{
      data: [[10, 50], [20, 80], [30, 60], [40, 40]],
      label: 'A'
    }, {
      data: [[10, 30], [20, 50], [30, 70], [40, 50]],
      label: 'B'
    }, {
      data: [[10, 40], [20, 60], [30, 90], [40, 60]],
      label: 'C'
    }];

    $scope.options = {
      series: {
        shadowSize: 0,
        stack: true // stack bars
      },
      bars: {
        show: true,
        fill: true,
        lineWidth: 0,
        fillColor: {
          colors: [{ opacity:0.6 }, { opacity:0.8}]
        },
        colors: ['#428bca','#d9534f','#A40778']
      },
      xaxis: {
        font: {
          color: '#ccc'
        }
      },
      yaxis: {
        font: {
          color: '#ccc'
        }
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        color: '#ccc'
      },
      tooltip: true
    };
  })

  .controller('CombinedChartCtrl', function ($scope) {

    $scope.dataset = [{
      data: [[0, 8], [1, 15], [2, 16], [3, 14], [4,16], [5,18], [6,17], [7,15], [8,12], [9,13]],
      label: 'Unique Visits',
      points: {
        show: true,
        radius: 3
      },
      splines: {
        show: true,
        tension: 0.45,
        lineWidth: 4,
        fill: 0
      }
    }, {
      data: [[0, 5], [1, 9], [2, 10], [3, 8], [4,9], [5, 12], [6, 14], [7, 13], [8, 10], [9, 12]],
      label: 'Page Views',
      bars: {
        show: true,
        barWidth: 0.4,
        lineWidth: 0,
        fillColor: { colors: [{ opacity: 0.6 }, { opacity: 0.8}] }
      }
    }];

    $scope.options = {
      colors: ['#16a085','#FF0066'],
      series: {
        shadowSize: 0
      },
      xaxis: {
        font: {
          color: '#ccc'
        }
      },
      yaxis: {
        font: {
          color: '#ccc'
        }
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        color: '#ccc'
      },
      tooltip: true,
      tooltipOpts: { content: '%s of %x.1 is %y.4',  defaultTheme: false, shifts: { x: 0, y: 20 } }
    };
  })

  .controller('PieChartCtrl', function ($scope) {

    $scope.dataset = [
      { label: 'Chrome', data: 30 },
      { label: 'Firefox', data: 15 },
      { label: 'Safari', data: 15 },
      { label: 'IE', data: 10 },
      { label: 'Opera', data: 5 },
      { label: 'Other', data: 10}
    ];

    $scope.options = {
      series: {
        pie: {
          show: true,
          innerRadius: 0,
          stroke: {
            width: 0
          },
          label: {
            show: true,
            threshold: 0.05
          }
        }
      },
      colors: ['#428bca','#5cb85c','#f0ad4e','#d9534f','#5bc0de','#616f77'],
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        color: '#ccc'
      },
      tooltip: true,
      tooltipOpts: { content: '%s: %p.0%' }
    };
  })

  .controller('DonutChartCtrl', function ($scope) {

    $scope.dataset = [
      { label: 'Chrome', data: 30 },
      { label: 'Firefox', data: 15 },
      { label: 'Safari', data: 15 },
      { label: 'IE', data: 10 },
      { label: 'Opera', data: 5 },
      { label: 'Other', data: 10}
    ];

    $scope.options = {
      series: {
        pie: {
          show: true,
          innerRadius: 0.5,
          stroke: {
            width: 0
          },
          label: {
            show: true,
            threshold: 0.05
          }
        }
      },
      colors: ['#428bca','#5cb85c','#f0ad4e','#d9534f','#5bc0de','#616f77'],
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        color: '#ccc'
      },
      tooltip: true,
      tooltipOpts: { content: '%s: %p.0%' }
    };
  })

  .controller('RealtimeChartCtrl', function ($scope, $interval) {

    var data = [],
        totalPoints = 300;

    function getRandomData() {

      if (data.length > 0) {
        data = data.slice(1);
      }

      // Do a random walk

      while (data.length < totalPoints) {

        var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }

        data.push(y);
      }

      // Zip the generated y values with the x values

      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
      }

      return res;
    }

    var updateInterval = 300;

    $interval(function() {
      $scope.dataset = [{
        data: getRandomData()
      }];
      getRandomData();
    }, updateInterval);

    $scope.dataset = [{
      data: getRandomData()
    }];

    $scope.options = {
      colors: ['#a2d200'],
      series: {
        shadowSize: 0,
        lines: {
          show: true,
          fill: 0.1
        }
      },
      xaxis:{
        font: {
          color: '#ccc'
        },
        tickFormatter: function() {
          return '';
        }
      },
      yaxis: {
        font: {
          color: '#ccc'
        },
        min: 0,
        max: 110
      },
      grid: {
        hoverable: true,
        clickable: true,
        borderWidth: 0,
        color: '#ccc'
      },
      tooltip: true,
      tooltipOpts: {
        content: '%y%',
        defaultTheme: false,
        shifts: {
          x: 0,
          y: 20
        }
      }
    };

  })

  .controller('RickshawChartCtrl', function($scope){

    $scope.renderers = [{
      id: 'area',
      name: 'Area'
    }, {
      id: 'line',
      name: 'Line'
    }, {
      id: 'bar',
      name: 'Bar'
    }, {
      id: 'scatterplot',
      name: 'Scatterplot'
    }];

    $scope.palettes = [
      'spectrum14',
      'spectrum2000',
      'spectrum2001',
      'colorwheel',
      'cool',
      'classic9',
      'munin'
    ];

    $scope.rendererChanged = function(id) {
      $scope['options' + id] = {
        renderer: $scope['renderer' + id].id
      };
    };

    $scope.paletteChanged = function(id) {
      $scope['features' + id] = {
        palette: $scope['palette' + id]
      };
    };

    $scope.changeSeriesData = function(id) {
      var seriesList = [];
      for (var i = 0; i < 3; i++) {
        var series = {
          name: 'Series ' + (i + 1),
          data: []
        };
        for (var j = 0; j < 10; j++) {
          series.data.push({x: j, y: Math.random() * 20});
        }
        seriesList.push(series);
        $scope['series' + id][i] = series;
      }
      //$scope['series' + id] = seriesList;
    };

    $scope.options1 = {
      renderer: 'area'
    };
    $scope.series1 = [{
      name: 'Series 1',
      color: 'steelblue',
      data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
    }, {
      name: 'Series 2',
      color: 'lightblue',
      data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
    }];

    $scope.options2 = {
      renderer: 'line'
    };
    $scope.features2 = {
      hover: {
        xFormatter: function(x) {
          return 't=' + x;
        },
        yFormatter: function(y) {
          return '$' + y;
        }
      }
    };
    $scope.series2 = [{
      name: 'Series 1',
      color: 'steelblue',
      data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
    }, {
      name: 'Series 2',
      color: 'lightblue',
      data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
    }];

    $scope.options3 = {
      renderer: 'bar'
    };
    $scope.features3 = {
      palette: 'colorwheel'
    };
    $scope.series3 = [{
      name: 'Series 1',
      data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
    }, {
      name: 'Series 2',
      data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
    }];

    $scope.options4 = {
      renderer: 'bar'
    };
    $scope.features4 = {
      palette: 'colorwheel',
      xAxis: {
      }
    };
    $scope.series4 = [{
      name: 'Series 1',
      data: [{x: 0, y: 230}, {x: 1, y: 1500}, {x: 2, y: 790}, {x: 3, y: 310}, {x: 4, y: 600}]
    }, {
      name: 'Series 2',
      data: [{x: 0, y: 300}, {x: 1, y: 2000}, {x: 2, y: 640}, {x: 3, y: 500}, {x: 4, y: 150}]
    }];

    $scope.options5 = {
      renderer: 'bar'
    };
    $scope.features5 = {
      palette: 'colorwheel',
      yAxis: {
        tickFormat: 'formatKMBT'
      }
    };
    $scope.series5 = [{
      name: 'Series 1',
      data: [{x: 0, y: 230}, {x: 1, y: 1500}, {x: 2, y: 790}, {x: 3, y: 310}, {x: 4, y: 600}]
    }, {
      name: 'Series 2',
      data: [{x: 0, y: 300}, {x: 1, y: 2000}, {x: 2, y: 640}, {x: 3, y: 500}, {x: 4, y: 150}]
    }];

    $scope.options6 = {
      renderer: 'line'
    };
    $scope.features6 = {
      palette: 'colorwheel',
      legend: {
        toggle: true,
        highlight: true
      }
    };
    $scope.series6 = [{
      name: 'Series 1',
      data: [{x: 0, y: 230}, {x: 1, y: 1500}, {x: 2, y: 790}, {x: 3, y: 310}, {x: 4, y: 600}]
    }, {
      name: 'Series 2',
      data: [{x: 0, y: 300}, {x: 1, y: 2000}, {x: 2, y: 640}, {x: 3, y: 500}, {x: 4, y: 150}]
    }];

    $scope.series0 = [];

    $scope.renderer0 = $scope.renderers[0];
    $scope.palette0 = $scope.palettes[0];

    $scope.rendererChanged(0);
    $scope.paletteChanged(0);
    $scope.changeSeriesData(0);
  })

  .controller('RickshawRealtimeChartCtrl', function($scope, $interval){

    $scope.options1 = {
      renderer: 'area'
    };

    var seriesData = [ [], []];
    var random = new Rickshaw.Fixtures.RandomData(50);

    for (var i = 0; i < 50; i++) {
      random.addData(seriesData);
    }

    var updateInterval = 800;

    $interval(function() {
      random.removeData(seriesData);
      random.addData(seriesData);
    }, updateInterval);

    $scope.series1 = [{
      name: 'Series 1',
      color: 'steelblue',
      data: seriesData[0]
    }, {
      name: 'Series 2',
      color: 'lightblue',
      data: seriesData[1]
    }];

    $scope.features1 = {
      hover: {
        xFormatter: function(x) {
          return new Date(x * 1000).toUTCString();
        },
        yFormatter: function(y) {
          return Math.floor(y) + '%';
        }
      }
    };
  })

  .controller('SparklineChartCtrl', function($scope){
    $scope.lineChart = {
      data: [15,16,18,17,16,18,25,26,23],
      options: {
        type: 'line',
        width: '100%',
        height:'250px',
        fillColor: 'rgba(34, 190, 239, .3)',
        lineColor: 'rgba(34, 190, 239, .5)',
        lineWidth: 2,
        spotRadius: 5,
        valueSpots:[5,6,8,7,6,8,5,4,7],
        minSpotColor: '#eaf9fe',
        maxSpotColor: '#00a3d8',
        highlightSpotColor: '#00a3d8',
        highlightLineColor: '#bec6ca',
        normalRangeMin: 0
      }
    };
    $scope.barChart = {
      data: [5,6,7,2,1,-4,-2,4,6,8],
      options: {
        width:'100%',
        type: 'bar',
        height: '250px',
        barWidth: '30px',
        barSpacing: 10,
        barColor: '#16a085',
        negBarColor: '#FF0066'
      }
    };
    $scope.pieChart = {
      data: [5,10,20,15],
      options: {
        type: 'pie',
        width: 'auto',
        height: '250px',
        sliceColors: ['#22beef','#a2d200','#ffc100','#ff4a43']
      }
    };
  })

  .controller('EasypiechartCtrl',function($scope){
    $scope.easypiechart = {
      percent: 65,
      options: {
        animate: {
          duration: 3000,
          enabled: true
        },
        barColor: '#1693A5',
        lineCap: 'round',
        size: 180,
        lineWidth: 5
      }
    };
    $scope.easypiechart2 = {
      percent: 30,
      options: {
        animate: {
          duration: 3000,
          enabled: true
        },
        barColor: '#A40778',
        scaleColor: false,
        lineCap: 'round',
        size: 180,
        lineWidth: 5
      }
    };
    $scope.easypiechart3 = {
      percent: 78,
      options: {
        animate: {
          duration: 3000,
          enabled: true
        },
        barColor: '#e05d6f',
        lineCap: 'butt',
        size: 220,
        lineWidth: 10
      }
    };
    $scope.easypiechart4 = {
      percent: 60,
      options: {
        animate: {
          duration: 3000,
          enabled: true
        },
        barColor: '#5cb85c',
        lineCap: 'round',
        scaleColor: false,
        size: 220,
        lineWidth: 10
      }
    };
  })

  .controller('GaugeChartCtrl', function($scope){

    $scope.gaugeChart1 = {
      data: {
        maxValue: 3000,
        animationSpeed: 40,
        val: 658
      },
      options: {
        lines: 12,
        // The number of lines to draw
        angle: 0.15,
        // The length of each line
        lineWidth: 0.44,
        // The line thickness
        pointer: {
          length: 1,
          // The radius of the inner circle
          strokeWidth: 0.035,
          // The rotation offset
          color: '#000000' // Fill color
        },
        limitMax: 'false',
        // If true, the pointer will not go past the end of the gauge
        colorStart: '#6FADCF',
        // Colors
        colorStop: '#8FC0DA',
        // just experiment with them
        strokeColor: '#f2f2f2',
        // to see which ones work best for you
        generateGradient: true,
        percentColors: [
          [0.0, '#1693A5'],
          [1.0, '#1693A5']
        ]
      }
    };

    $scope.gaugeChart2 = {
      data: {
        maxValue: 3000,
        animationSpeed: 40,
        val: 1258
      },
      options: {
        lines: 12,
        // The number of lines to draw
        angle: 0.10,
        // The length of each line
        lineWidth: 0.40,
        // The line thickness
        pointer: {
          length: 0.9,
          // The radius of the inner circle
          strokeWidth: 0.035,
          // The rotation offset
          color: '#000000' // Fill color
        },
        limitMax: 'false',
        // If true, the pointer will not go past the end of the gauge
        colorStart: '#6FADCF',
        // Colors
        colorStop: '#8FC0DA',
        // just experiment with them
        strokeColor: '#f2f2f2',
        // to see which ones work best for you
        generateGradient: true,
        percentColors: [
          [0.0, '#FF0066'],
          [1.0, '#FF0066']
        ]
      }
    };

    $scope.gaugeChart3 = {
      data: {
        maxValue: 3000,
        animationSpeed: 40,
        val: 1485
      },
      options: {
        lines: 12,
        // The number of lines to draw
        angle: 0.05,
        // The length of each line
        lineWidth: 0.34,
        // The line thickness
        pointer: {
          length: 0.8,
          // The radius of the inner circle
          strokeWidth: 0.035,
          // The rotation offset
          color: '#000000' // Fill color
        },
        limitMax: 'false',
        // If true, the pointer will not go past the end of the gauge
        colorStart: '#6FADCF',
        // Colors
        colorStop: '#8FC0DA',
        // just experiment with them
        strokeColor: '#f2f2f2',
        // to see which ones work best for you
        generateGradient: true,
        percentColors: [
          [0.0, '#428bca'],
          [1.0, '#428bca']
        ]
      }
    };

    $scope.gaugeChart4 = {
      data: {
        maxValue: 3000,
        animationSpeed: 40,
        val: 2514
      },
      options: {
        lines: 12,
        // The number of lines to draw
        angle: 0,
        // The length of each line
        lineWidth: 0.3,
        // The line thickness
        pointer: {
          length: 0.7,
          // The radius of the inner circle
          strokeWidth: 0.035,
          // The rotation offset
          color: '#000000' // Fill color
        },
        limitMax: 'false',
        // If true, the pointer will not go past the end of the gauge
        colorStart: '#6FADCF',
        // Colors
        colorStop: '#8FC0DA',
        // just experiment with them
        strokeColor: '#f2f2f2',
        // to see which ones work best for you
        generateGradient: true,
        percentColors: [
          [0.0, '#f0ad4e'],
          [1.0, '#f0ad4e']
        ]
      }
    };

  });
