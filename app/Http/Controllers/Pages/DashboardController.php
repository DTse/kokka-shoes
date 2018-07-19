<?php

namespace App\Http\Controllers\Pages;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Analytics;
use Spatie\Analytics\Period;

class DashboardController extends Controller {
   public function __construct() {
        $this->middleware('auth');
  }
  public function index() {
    $mostVisited = Analytics::fetchMostVisitedPages(Period::months(1), 10);

    $activeUsers = Analytics::getAnalyticsService()->data_realtime->get('ga:177237934', 'rt:activeVisitors')->totalsForAllResults['rt:activeVisitors'];

    $totalVisitors = Analytics::fetchTotalVisitorsAndPageViews(Period::months(1));

    $avgTimeOnPage = Analytics::performQuery(Period::months(1), 'ga:avgSessionDuration')->totalsForAllResults['ga:avgSessionDuration'];

    return view('analytics')->with(compact('activeUsers', 'mostVisited', 'totalVisitors','avgTimeOnPage'));
  }
}