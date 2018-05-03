@extends('dashboard')

@section('header')
    <link href="{{ URL::asset('css/categories/view-category.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ URL::asset('css/dashboard.css') }}" rel="stylesheet" type="text/css" >
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
@stop

@section('main-content')
<div class="wrapper">
    <div class="wrap-table">
        <div class="table">
            <table>
                <thead>
                    <tr class="table-head">
                        <th class="column1">{{$category->name_gr}}</th>
                        <th class="column2"></th>
                    </tr>
                </thead>
                <tbody>
                        <tr><td class="column1"><label class="newcategory-label">Ονομα ΕΝ</label></td><td class="column2">{{$category->name_en}}</td></tr>
                        <tr><td class="column1"><label class="newcategory-label">Κωδικός</label></td><td class="column2">{{$category->category_id}}</td></tr>
                        <tr><td class="column1"><label class="newcategory-label">Slug</label></td><td class="column2">{{$category->slug}}</td></tr>
                        <tr><td class="column1"></td><td class="column2"><a href="/edit-category/{{$category->category_id}}" id="edit-button" class="edit-button">Επεξεργασία</a></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
@stop