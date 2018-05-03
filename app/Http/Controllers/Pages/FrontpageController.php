<?php

namespace App\Http\Controllers\Pages;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class FrontpageController extends Controller {
   public function __construct() {
        $this->middleware('auth');
  }
  public function index() {
      return view('frontpage');
  }
}