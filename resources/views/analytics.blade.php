@extends('dashboard')

@section('header')
    <link href="{{ URL::asset('css/dashboard.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ URL::asset('css/analytics.css') }}" rel="stylesheet" type="text/css" >
    <script src="{{ URL::asset('js/Chart.bundle.js') }}"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
@stop

@section('main-content')
<div class="wrapper">
    <div id="headerData">
        <div class="panels"><span>Ενεργοί χρήστες</span><span>{!!$activeUsers!!}</span></div>
        {{-- <div class="panels"><span>Μέσος όρος παραμονής στην σελίδα</span><span>{!!number_format((float)($avgTimeOnPage/60), 2, '.', '');!!} λεπτά</span></div> --}}
        <div class="panels"><span>Μέσος όρος παραμονής στην σελίδα</span><span>{!!gmdate('H:i:s', $avgTimeOnPage)!!} λεπτά</span></div>
    </div>
    <div id="pageViews">
        <canvas id="canvasPageViews"></canvas>
    </div>
    <div id="visitorsGraph">
        <canvas id="canvasVisitorsGraph"></canvas>
    </div>
</div>
@stop

@section('analytics-script')
    <script>
        var mostVisited = {!! json_encode($mostVisited) !!};
		var color = Chart.helpers.color;
        var labels = mostVisited.map(page => page.url);
        var data = mostVisited.map(page => page.pageViews);
		var horizontalBarChartData = {
			labels: labels,
			datasets: [{
				label: 'Επισκέψεις',
				backgroundColor: color('#gainsboro').alpha(0.5).rgbString(),
				borderColor: '#121015',
				borderWidth: 1,
				data: data
			}]
		};
        var totalVisitors = {!! json_encode($totalVisitors) !!};

		var config = {
			type: 'line',
			data: {
				labels: totalVisitors.map(day => day.date.date.substring(0,10)),
				datasets: [{
					label: 'Ημερήσιοι επισκέπτες',
					backgroundColor: color('#BBDEFB').alpha(0.5).rgbString(),
					borderColor: color('#42A5F5').alpha(0.5).rgbString(),
					data: totalVisitors.map(day => day.visitors),
					fill: true,
				}]
			},
			options: {
				responsive: true,
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Επισκέπτες'
						}
					}]
				}
			}
		};



		window.onload = function() {
            var ctxLine = document.getElementById('canvasVisitorsGraph').getContext('2d');
			window.myLine = new Chart(ctxLine, config);
			var ctx = document.getElementById('canvasPageViews').getContext('2d');
			window.myHorizontalBar = new Chart(ctx, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
					// In this case, we are setting the border of each horizontal bar to be 2px wide
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
					responsive: true,
					legend: {
						position: 'right',
					},
					title: {
						display: true,
						text: 'Σελίδες με την περισσότερη επισκεψιμότητα'
					}
				}
			});
		};
    </script>
@stop