@extends('dashboard')

@section('header')
    <link href="{{ URL::asset('css/products/products.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ URL::asset('css/dashboard.css') }}" rel="stylesheet" type="text/css" >
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
@stop

@section('main-content')
<div class="wrapper">
    <a class="add-button" href="/add-product"><i style="padding-right: 10px;" class="fas fa-plus"></i>Προσθήκη</a>
    <div class="wrap-table">
        <div class="table">
            <table>
                <thead>
                    <tr class="table-head">
                        <th class="column1">Εικόνα</th>
                        <th class="column2">Κωδικός</th>
                        <th class="column2">Σειρά</th>
                        <th class="column2">Ενεργό</th>
                        <th class="column3">Όνομα</th>
                        <th class="column4">Κατηγορία</th>
                        <th class="column5">Επισκέψεις</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($products as $cell)
                        <tr>
                            <td class="column1"><img src="{{ !empty(json_decode($cell->images, true)[0][0]) && file_exists('images/shoes/'.$cell->product_code.'/'.json_decode($cell->images, true)[0][0]) ? url('images/shoes/'.$cell->product_code.'/'.json_decode($cell->images, true)[0][0]) : url('images/shoes/shoe.svg')}}" alt="shoe"></td>
                            <td class="column2">{{ $cell->product_code }}</td>
                            <td class="column2"><select name="order" id="order" class="used newproduct-input" onchange="changeOrder('{!! $cell->product_code !!}', this.value)">@for($i = 0; $i < 17; $i++)<option type="text" value="{{$i}}" {{$cell->order == $i ? 'selected' : ''}}>{{$i}}</option>@endfor</select></td>
                            <td class="column2"><label id="hide-checkbox" class="container"><input id="hidden" type="checkbox" name="hidden" {{$cell->hidden == 1 ? 'checked' : ''}} onchange="changeVisible('{!! $cell->product_code !!}')"> <span class="checkmark"></span></label></td>
                            <td class="column3">{{ $cell->name_gr }}</td>
                                @foreach($categories as $category)
                                    @if($cell->category_id === $category->category_id)
                                    <td class="column4">{{$category->name_gr}}</td>
                                    @endif
                                @endforeach
                            <td class="column5">{{ $cell->visits }}</td>
                            <td colspan="2" class="column6"><a class="view-button" href="/view-product/{{$cell->product_code}}"><i class="fas fa-eye"></i><label>Προβολή</label></a><a class="edit-button" href="/edit-product/{{$cell->product_code}}"><i class="fas fa-edit"></i><label>Επεξεργασία</label></a><a class="copy-button" href="/copy-product/{{$cell->product_code}}"><i class="fas fa-copy"></i><label>Αντιγραφή<label></a><a class="delete-button" href="/delete-product/{{$cell->product_code}}"><i class="fas fa-trash-alt"></i><label>Διαγραφη<label></a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        {!! $products->appends(request()->query())->render() !!}
    </div>
</div>
@stop

@section('product-script')
    <script>
        changeVisible=(id)=>{
            var checkbox = document.getElementById('hidden');
            
            axios.post('/enable-product/'+id, {
                enabled: checkbox.checked
            })
            .catch(function (error) {
                console.log(error);
            });

        }
        changeOrder=(id, value)=>{
            axios.post('/sticky-product/'+id, {
                order: value
            })
            .catch(function (error) {
                console.log(error);
            });

        }
    </script>
@stop