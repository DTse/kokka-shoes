@extends('dashboard')

@section('header')
    <link href="{{ URL::asset('css/categories/add-category.css') }}" rel="stylesheet" type="text/css" >
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
                        <th class="column1">Προσθήκη Κατηγορίας</th>
                        <th class="column2"></th>
                    </tr>
                </thead>
                <tbody>
                    <form method="POST" action="/add-category">
                        {{ csrf_field() }}
                        <tr><td class="column1"><label class="newcategory-label">Όνομα GR</label></td> <td class="column2"><input id="name_gr" type="text" name="name_gr" class="used newcategory-input"></td></tr>
                        <tr><td class="column1"><label class="newcategory-label">Όνομα EN</label></td> <td class="column2"><input id="name_en" type="text" name="name_en" class="used newcategory-input"></td></tr>
                        <tr><td class="column1"><label class="newcategory-label">Slug</label></td><td class="column2"><input id="slug" type="text" name="slug" class="used newcategory-input"></td></tr>
                        {{-- <tr><td class="column1"><label class="newcategory-label">Εικόνα</label></td><td class="column2"><input id="main_img" type="text" name="main_img" class="used newcategory-input"></td></tr> --}}
                        <tr><td class="column1"></td><td class="column2"><button type="submit" value="Υποβολη" id="submit" name="submit" class="submit-button">Υποβολη</button></td></tr>
                    </form>
                </tbody>
            </table>
        </div>
    </div>
</div>
@stop