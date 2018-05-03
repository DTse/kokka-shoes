@extends('main')

@section('header')
    <link href="{{ URL::asset('css/home.css') }}" rel="stylesheet" type="text/css" >
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
@stop

@section('content')
    <div class="doubleMenu">
        <div class="dashboardBtn">
            <a href="{{ url('/dashboard') }}">
                <i class="fas fa-columns fa-10x"></i>
            </a>
        </div>
        <div class="frontpageBtn">
            <a href="{{ url('/frontpage') }}">
                <i class="far fa-newspaper fa-10x"></i>
            </a>
        </div>
    </div>
@stop