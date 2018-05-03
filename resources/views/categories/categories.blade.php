@extends('dashboard')

@section('header')
    <link href="{{ URL::asset('css/categories/categories.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ URL::asset('css/products/products.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ URL::asset('css/dashboard.css') }}" rel="stylesheet" type="text/css" >
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
@stop

@section('main-content')
<div class="wrapper">
    <a class="add-button" href="/add-category"><i style="padding-right: 10px;" class="fas fa-plus"></i>Προσθήκη</a>
    <div class="wrap-table">
        <div class="table">
            <table>
                <thead>
                    <tr class="table-head">
                        <th class="column1">Κωδικός</th>
                        <th class="column2">Ονομα GR</th>
                        <th class="column3">Όνομα EN</th>
                        <th class="column4">Slug</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($categories as $row)
                        <tr>
                            <td class="column1">{{ $row->category_id }}</td>
                            <td class="column2">{{ $row->name_gr }}</td>
                            <td class="column3">{{ $row->name_en }}</td>
                            <td class="column4">{{ $row->slug }}</td>
                            <td class="column5"><a class="view-button" href="/view-category/{{$row->category_id}}"><i class="fas fa-eye" style="padding-right: 10px;"></i>Προβολή</a><a class="edit-button" href="/edit-category/{{$row->category_id}}"><i class="fas fa-edit" style="padding-right: 10px;"></i>Επεξεργασία</a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@stop