@extends('dashboard')

@section('header')
    <link href="{{ URL::asset('css/products/add-product.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ URL::asset('css/dashboard.css') }}" rel="stylesheet" type="text/css" > 
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
@stop

@section('main-content')
<div class="wrapper">
    <div class="wrap-table">
        <form method="POST" action="/add-product" enctype="multipart/form-data" >
            {{ csrf_field() }}
            <div class="table">
                <table>
                    <thead>
                        <tr class="table-head">
                            <th class="column1">Προσθήκη προϊόντος</th>
                            <th class="column2"></th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr><td class="column1"><label class="newproduct-label">Όνομα GR</label></td> <td class="column2"><input id="name_gr" type="text" name="name_gr" class="used newproduct-input"></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Όνομα EN</label></td> <td class="column2"><input id="name_en" type="text" name="name_en" class="used newproduct-input"></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Slug</label></td><td class="column2"><input id="slug" type="text" name="slug" class="used newproduct-input"></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Κωδικός προίόντος</label></td><td class="column2"><input id="product_code" type="text" name="product_code" class="used newproduct-input"></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Περιγραφή GR</label></td><td class="column2"><textarea row="5" id="description_gr" name="description_gr" class="used newproduct-input"></textarea></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Περιγραφή EN</label></td><td class="column2"><textarea row="5" id="description_en" name="description_en" class="used newproduct-input"></textarea></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Ύψος</label></td><td class="column2"><input id="height" type="text" name="height" class="used newproduct-input"></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Ύψος Φιάπας</label></td><td class="column2"><input id="fiapa_height" type="text" name="fiapa_height" class="used newproduct-input"></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Ύψος Τακουνιού</label></td><td class="column2"><input id="takouni_height" type="text" name="takouni_height" class="used newproduct-input"></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Μεγέθη</label></td><td class="column2" id="sizesContainer"><input id="size" type="text" name="sizes[]" class="used newproduct-input" maxlength="2"><div id="add-size" onclick="addNewSize()"><i class="fas fa-plus"></i></div><div id="remove-size" onclick="removeSize()"><i class="fas fa-minus"></i><div></td></tr>
							<tr><td class="column1"><label class="newproduct-label">Τιμή</label></td><td class="column2"><input id="price" type="text" name="price" class="used newproduct-input"></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Κατηγορία</label></td><td class="column2"><select name="category_id" id="category_id" class="used newproduct-input">@foreach($categories as $cell)<option type="text" value="{{$cell->category_id}}">{{$cell->name_gr}}</option>@endforeach</select></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Σειρά Sticky</label></td><td class="column2"><select name="order" id="order" class="used newproduct-input">@for($i = 0; $i < 17; $i++)<option type="text" value="{{$i}}">{{$i}}</option>@endfor</select></td></tr>
                            <tr><td class="column1"><label class="newproduct-label">Χρώματα</label></td>
                                <td class="column2" id="colors-container">
                                    <label id="colors" for="colors" class="colors">
                                        <fieldset id="color_1" class="color-fields">
                                            <legend>Χρώμα 1<div id="delete-color" class="delete-color" onclick="colorDelete(1)"><i class="fas fa-trash-alt"></i></div></legend>
                                            Όνομα GR<input id="color_1_gr" type="text" name="colors_gr[]" class="" style="background-color: white; margin-left: 0px; margin-right: 0px">
                                            Όνομα EN<input id="color_1_en" type="text" name="colors_en[]" class="" style="background-color: white; margin-left: 0px; margin-right: 0px">
                                            <div id="images-upload-1" class="images-upload" style="overflow-x: hidden; max-height: 250px">
                                            <div id="upload-1-1">
                                                <label id="color-1-upload-label-1" for="image_color_1_1" class="custom-file-upload" onclick="imagePreview(1,1)" style="overflow-x:hidden; max-height: 115px;">
                                                <i id="color-1-upload-icon-1" style="margin: 0 auto; padding: 0px 20px" class="fas fa-upload"></i>
                                                <span id="color-1-image-name-1" class="color-image-span">Image Upload</span>
                                            </label>
                                            <input id="image_color_1_1" name="images[0][]" accept="image/*" type="file"/>
                                        </div>
                                    </div>
                                        </fieldset>
                                        <div id="add-color" onclick="addNewColor()"><i style="padding: 0px 20px;" class="fas fa-plus"></i> <span id="image-name">Προσθήκη χρώματος</span><div>
                                    </label></td></tr> 
                                    <tr><td class="column1"><label class="newproduct-label">Ενεργό</label></td> <td class="column2"><label id="hide-checkbox" class="container"><input id="hidden" type="checkbox" name="hidden" checked> <span class=" checkmark"></span></label></td></tr>
                            <tr><td class="column1"></td><td class="column2"><button type="submit" value="Υποβολη" id="submit" name="submit" class="submit-button">Υποβολη</button></td></tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
@stop

@section('add-product-script')
     <script>
        imagePreview = (colorIncr,imageInput)=>{
            var colorsChange = document.getElementById('image_color_'+colorIncr+'_'+imageInput);

            colorsChange.onchange = function(){
                var newInput = document.createElement('input');
                var parent = document.getElementById('colors');
                console.log(colorsChange.files);
                document.getElementById('color-'+colorIncr+'-image-name-'+imageInput).style.display = 'none';
                document.getElementById('color-'+colorIncr+'-upload-label-'+imageInput).style.backgroundColor ='unset';
                Array.prototype.forEach.call(colorsChange.files, function(file) { 
                    
                    var newImage = document.createElement('img');
                    newImage.src = URL.createObjectURL(file);
                    var el = document.getElementById('color-'+colorIncr+'-upload-icon-'+imageInput);
                    el.style.display ="none"
                    el.parentNode.appendChild(newImage, el);                  
                });
                
                var deleteDiv = document.getElementById('upload-'+colorIncr+'-'+imageInput);
                    var deleteButton = document.createElement('div');
                    deleteButton.id="delete-color";
                    deleteButton.className="delete-color";
                    deleteButton.innerHTML = `<i onclick='imageDelete(${colorIncr},${imageInput})' class="fas fa-trash-alt">`;
                    deleteDiv.insertBefore(deleteButton, deleteDiv.firstChild);
                    var uploadMore = document.createElement('div');
                    uploadMore.id = 'upload-'+colorIncr+'-'+(imageInput+1);
                    uploadMore.innerHTML = `<label id="color-${colorIncr}-upload-label-${imageInput+1}" for="image_color_${colorIncr}_${imageInput+1}" class="custom-file-upload" onclick="imagePreview(${colorIncr},${imageInput+1})" style="overflow-x:hidden; max-height: 115px;">
                                                <i id="color-${colorIncr}-upload-icon-${imageInput+1}" style="margin: 0 auto; padding: 0px 20px" class="fas fa-upload"></i>
                                                <span id="color-${colorIncr}-image-name-${imageInput+1}" class="color-image-span">Image Upload</span>
                                            </label>
                                            <input id="image_color_${colorIncr}_${imageInput+1}" name="images[0][]" accept="image/*" type="file"/>`;
                    var colorInput = document.getElementById('images-upload-'+colorIncr);
                    colorInput.insertBefore(uploadMore, colorInput.firstChild);  
            } 
        }

        imageDelete =(color, image)=>{
            var imageDiv = document.getElementById('upload-'+color+'-'+image);
            var deleteImage = document.getElementById(`image_color_${color}_${image}`);
            deleteImage.value ="";
            imageDiv.parentElement.removeChild(imageDiv);
        }

        addNewColor = () =>{
            var addColorContainer = document.getElementById('add-color');
            if(addColorContainer.previousElementSibling == null){
               var colorID = 0;
            }
            else{
                var colorID = addColorContainer.previousElementSibling.id.match(/\d/g)[0];
            }
            colorID++
            
            var newColor = document.createElement('fieldset');
            newColor.id = 'color_' + colorID
            newColor.className="color-fields"
            newColor.innerHTML = `<legend>Χρώμα ${colorID}<div id="delete-color" class="delete-color" onclick="colorDelete(${colorID})"><i class="fas fa-trash-alt"></i></div></legend>
                                    Όνομα GR<input id="color_${colorID}_gr" type="text" name="colors_gr[]" class="" style="background-color: white; margin-left: 0px; margin-right: 0px">
                                    Όνομα EN<input id="color_${colorID}_en" type="text" name="colors_en[]" class="" style="background-color: white; margin-left: 0px; margin-right: 0px">
                                    <div id="images-upload-${colorID}" class="images-upload" style="overflow-x: hidden; max-height: 250px">
                                    <div id="upload-${colorID}-1">
                                    <label id="color-${colorID}-upload-label-1" for="image_color_${colorID}_1" class="custom-file-upload" onclick="imagePreview(${colorID},1)" style="overflow-x:hidden; max-height: 115px;">
                                        <i id="color-${colorID}-upload-icon-1" style="margin: 0 auto; padding: 0px 20px" class="fas fa-upload"></i>
                                        <span id="color-${colorID}-image-name-1" class="color-image-span">Image Upload</span>
                                    </label>
                                    <input id="image_color_${colorID}_1" name="images[${colorID-1}][]" accept="image/*" type="file" multiple/>
                                </div>
                                    </div>`
                                 
            document.getElementById('colors').insertBefore(newColor, addColorContainer)
        }
        addNewSize = () =>{
            var addSizeContainer = document.getElementById('add-size');
            
           var newSize = document.createElement('input');
           newSize.id="size" 
           newSize.type="text" 
           newSize.name="sizes[]" 
           newSize.class="used newproduct-input" 
           newSize.maxlength="2"
           
           document.getElementById('size').parentNode.insertBefore(newSize, addSizeContainer);
        }

        removeSize = () =>{
            var removeContainer = document.getElementById('add-size');
            removeContainer.previousElementSibling.remove();
        }

        colorDelete=(id)=>{
            var element = document.getElementById('color_'+id);
            element.parentNode.removeChild(element);
        }    
    </script>
@stop