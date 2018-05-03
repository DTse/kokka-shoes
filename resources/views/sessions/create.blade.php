@extends('main')

@section('header')
    <link href="{{ URL::asset('css/index.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ URL::asset('css/categories/add-category.css') }}" rel="stylesheet" type="text/css" >
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
@stop

@section('content')
<div class="wrapper">
    <div class="wrap-table">
        <form method="POST" action="/login">
            {{ csrf_field() }}
            <div class="table">
                <table>
                    <thead>
                        <tr class="table-head">
                            <th class="column1" colspan="2">KOKKA Shoes CMS</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr style='display: none'><td class="column1"><label>KOKKA Shoes CMS</label></td><td class="column2"></td></tr>
                            <tr><td class="column1"><label class="newcategory-label">Χρήστης</label></td> <td class="column2"><input id="email" placeholder="Email" type="text" name="email" class="used newcategory-input"></td></tr>
                            <tr><td class="column1"><label class="newcategory-label">Κωδικός</label></td> <td class="column2"><input id="password" type="password" name="password" placeholder="Κωδικός" class="used newcategory-input"></td></tr>
                            <tr><td class="column1"></td><td class="column2"><button type="submit" value="Υποβολη" id="submit" name="submit" class="submit-button">Υποβολη</button></td></tr>
                    </tbody>
                </table>
            </div>
                <div class="is-hidden" id="error-message">
                    @foreach ($errors->all() as $error)
                        <span>{{ $error }}</span>
                    @endforeach
                </div>
        </form>
    </div>
</div>
@stop

@section('scripts')
    <script>
        var error = {!! $errors !!};
            if (error.hasOwnProperty('message'))
            {
                
                setTimeout(()=>{
                    document.getElementById('error-message').classList.remove('is-hidden')
                    document.getElementById('error-message').classList.add('is-visible')
                    }, 1000)
                setTimeout(()=>{
                    document.getElementById('error-message').classList.remove('is-visible')
                    document.getElementById('error-message').classList.add('is-hidden')
                }, 5000)
            }
    </script>
@stop