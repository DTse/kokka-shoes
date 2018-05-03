<?php

namespace App\Http\Controllers\Pages;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PagesController extends Controller{

    public function loginForm(){
        return view('sessions.create');
    }
}