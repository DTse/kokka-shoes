@extends('dashboard')

@section('header')
    <link href="{{ URL::asset('css/categories/edit-category.css') }}" rel="stylesheet" type="text/css" >
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
                        <th class="column1">Επεξεργασία κατηγορίας</th>
                        <th class="column2"></th>
                    </tr>
                </thead>
                <tbody>
                <form method="POST" action="/edit-category/{{$category->category_id}}" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        <tr><td class="column1"><label class="newcategory-label">Κωδικός</label></td><td class="column2"><input id="category_id" type="text" name="category_code" class="used newcategory-input" value="{{$category->category_id}}"></td></tr>
                        <tr><td class="column1"><label class="newcategory-label">Όνομα GR</label></td> <td class="column2"><input id="name_gr" type="text" name="name_gr" class="used newcategory-input" value="{{$category->name_gr}}"></td></tr>
                        <tr><td class="column1"><label class="newcategory-label">Όνομα EN</label></td> <td class="column2"><input id="name_en" type="text" name="name_en" class="used newcategory-input" value="{{$category->name_en}}"></td></tr>
                        <tr><td class="column1"><label class="newcategory-label">Slug</label></td><td class="column2"><input id="slug" type="text" name="slug" class="used newcategory-input" value="{{$category->slug}}"></td></tr>
                        <tr><td class="column1"></td><td class="column2"><button type="submit" value="Υποβολη" id="submit" name="submit" class="submit-button">Υποβολη</button></td></tr>
                    </form>
                </tbody>
            </table>
        </div>
    </div>
</div>
@stop

@section('edit-category-script')
<script>
    var element = document.getElementById('main_img');
    element.onchange = function(){
        console.log(element.files);
        var file = element.files[0].name;
        //document.getElementById('image-name').innerHTML = file;
        document.getElementById('image-name').style.display = 'none';
        document.getElementById('upload-label').style.backgroundColor ='unset';
        var el = document.getElementById('upload-icon');

        var newEl = document.createElement('img');
        newEl.src = URL.createObjectURL(element.files[0]);
        // replace el with newEL
        el.parentNode.replaceChild(newEl, el);

        
    };
    </script>
@stop