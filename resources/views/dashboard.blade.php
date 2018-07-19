@extends('main') 
@section('header')
<link href="{{ URL::asset('css/dashboard.css') }}" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
@stop 
@section('content')
<div class="wrapper">
    <div class="dashboard-container">
        <div class="header">
            <div class="left">
                <a id="burger-toggle"><i id="burger" class="fas fa-bars"></i></a><h2>KokkaShoes Admin Panel</h2>
            </div>
            <div class="right">
                <a href="/logout">
                    <h5>Αποσύνδεση</h5>
                    <i class="fas fa-power-off fa-2x" style="color: #e4e3e6"></i>
                </a>
            </div>
        </div>
        <div class="drawer" id="drawer" style="opacity:1;">
            <a class="drawer-a" href="/dashboard">Αρχική</a>
            <a class="drawer-a" href="/products">Προϊόντα</a>
            <a class="drawer-a" href="/categories">Κατηγορίες</a>
            <a class="drawer-a" href="/newsletter">Ενημερωτικό email</a>
        </div>
        <div class="main-content" id="main-content">
            @yield('main-content')
        </div>
    </div>
</div>
@stop

@section('scripts')
    <script>
        detectResponsive();
        
        function detectResponsive(){
            var w = document.documentElement.clientWidth;
            if (w < 1150) {
                document.getElementById('drawer').classList.add('drawer-close');
                document.getElementById('main-content').classList.add('main-content-full');
            }
        }

        document.getElementById('burger-toggle').onclick = function(){
            document.getElementById('drawer').classList.toggle('drawer-close');
            if(window.innerWidth > 1150){
                  document.getElementById('main-content').classList.toggle('main-content-full')
            }
            else if(!document.getElementById('drawer').classList.contains('main-content-full') && window.innerWidth < 1150){
                  document.getElementById('main-content').classList.add('main-content-full')
            }
        }

        
    </script>
    @yield('product-script')
    @yield('add-product-script')
    @yield('edit-product-script')
    @yield('view-product-script')
    @yield('edit-category-script')
    @yield('edit-product-script')
    @yield('analytics-script')
@stop