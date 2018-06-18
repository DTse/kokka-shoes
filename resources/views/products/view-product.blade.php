@extends('dashboard')

@section('header')
    <link href="{{ URL::asset('css/products/view-product.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ URL::asset('css/dashboard.css') }}" rel="stylesheet" type="text/css" >
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
@stop

@section('main-content')
<div class="wrapper">
    <div class="wrap-table">
        <div class="table">
            <table>
                <thead>
                    <tr class="table-head">
                        <th class="column1">{{$product->name_gr}} - {{$product->name_en}}</th>
                        <th class="column2"></th>
                    </tr>
                </thead>
                <tbody>
                        @if($product->images != '')<tr><td class="column1"><label class="newproduct-label">Εικόνα</label></td><td class="column2">
                                @php $images = json_decode($product->images, true)@endphp
                                @foreach($images as $color_image)
                                    @foreach($color_image as $image)
                                        <img src="{{ url('images/shoes/'.$product->product_code.'/'.$image) }}" alt="shoe">
                                    @endforeach
                                @endforeach
								</td></tr>
                                @else
                                <tr><td class="column1"><label class="newproduct-label">Εικόνα</label></td><td class="column2"><img src="{{url('images/shoes/shoe.svg')}}" alt="shoe"></td></tr>
                                @endif
                        <tr><td class="column1"><label class="newproduct-label">Κωδικός προίόντος</label></td><td class="column2">{{$product->product_code}}</td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Slug</label></td><td class="column2">{{$product->slug}}</td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Περιγραφή GR</label></td><td class="column2">{{$product->description_gr}}</td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Περιγραφή EN</label></td><td class="column2">{{$product->description_en}}</td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Ύψος</label></td><td class="column2">{{$product->height}}</td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Ύψος Φιάπας</label></td><td class="column2">{{$product->fiapa_height}}</td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Ύψος τακουνίου</label></td><td class="column2">{{$product->takouni_height}}</td></tr>
                        @if($product->sizes != null)<tr><td class="column1"><label class="newproduct-label">Μεγέθη</label></td><td class="column2">
                            @php $sizes = json_decode($product->sizes, true)@endphp
                            @foreach($sizes as $size)    
                                @if($size != ''){{$size.','}}@endif
                            @endforeach
                            </td></tr>@endif
						<tr><td class="column1"><label class="newproduct-label">Τιμή</label></td><td class="column2">{{$product->price}}</td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Κατηγορία</label></td><td class="column2">{{$category->name_gr}}</td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Σειρά Sticky</label></td><td class="column2"><select name="order" id="order" class="used newproduct-input" onchange="changeOrder('{!! $product->product_code !!}', this.value)">@for($i = 0; $i < 17; $i++)<option type="text" value="{{$i}}" {{$product->order == $i ? 'selected' : ''}}>{{$i}}</option>@endfor</select></td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Ενεργό</label></td> <td class="column2"><label id="hide-checkbox" class="container"><input id="hidden" type="checkbox" name="hidden" {{$product->hidden == 1 ? 'checked' : ''}} onchange="changeVisible('{!! $product->product_code !!}')"> <span class="checkmark"></span></label></td></tr>
                        @if($product->colors_gr != '')<tr><td class="column1"><label class="newproduct-label">Χρώματα GR</label></td><td class="column2">
                        @php $colors = json_decode($product->colors_gr, true)@endphp
                        @foreach($colors as $color)    
                            {{$color.','}}
                        @endforeach
                        </td></tr>
                        <tr><td class="column1"><label class="newproduct-label">Χρώματα EN</label></td><td class="column2">
                        @php $colors = json_decode($product->colors_en, true)@endphp
                        @foreach($colors as $color)    
                            {{$color.','}}
                        @endforeach
                        </td></tr>@endif
                        <tr><td class="column1"></td><td class="column2"><a href="/edit-product/{{$product->product_code}}" id="edit-button" class="edit-button">Επεξεργασία</a><a href="/delete-product/{{$product->product_code}}" id="delete-button" class="delete-button">Διαγραφή</a></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
@stop

@section('view-product-script')
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