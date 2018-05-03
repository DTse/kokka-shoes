<?php

namespace App\Http\Controllers;

use Validator;
use Session;
use Redirect;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Products;
use App\Categories;

class ProductsController extends Controller {

   public function __construct() {
        $this->middleware('auth');
  }

  public function boot()
{
    Route::pattern('id', '[0-9]+');

    parent::boot();
}

  public function index() {

    $products = Products::limit(25)->get();
    $categories = Categories::all();
    
    return view('products.products')->with(compact('products', 'categories'));
  }
  public function storeView() {

    $categories = Categories::all();
    return view('products.add-product')->with('categories', $categories);
  }


  public function store(Request $request)
    {
        // validate
        $rules = array(
            "name_gr"        => 'required',
            "name_en"        => 'string|nullable',
            "product_code"   => 'required',
            "category_id"    => 'required|numeric',
            "slug"           => 'string|nullable',
            "description_en" => 'string|nullable',
            "description_gr" => 'string|nullable',
            "height"         => 'numeric|nullable',
            "price"          => 'numeric|nullable',
            "fiapa_height"   => 'numeric|nullable',
            "takouni_height" => 'numeric|nullable',
            "category_id"    => 'numeric|nullable',
            "hidden"         => 'accepted|nullable',
            "colors_gr"      => 'array|nullable',
            "colors_en"      => 'array|nullable',
            "images"         => 'array|nullable',
            "order"          => 'numeric|nullable',
            "sizes"          => 'array|nullable'
        );
        $validator = Validator::make($request->all(), $rules);

        // process the login
         if ($validator->fails()) {
             return view('products.add-product')
                ->withErrors($validator)
                ->withInput();
         } else {
            // store
            $product = new Products;
            if ($request->slug == null){
                $product->slug = str_slug($request->name_en, '-');
                $product->slug = $product->slug.'-'.$request->product_code;
            }
            else{
                $product->slug = $request->slug;
            }

            if($request->colors_gr[0] !=""){
            $colors_gr = $request->colors_gr;

            //echo '<pre>'; print_r($colors_gr); echo '</pre>'; exit;
            $colors_en = $request->colors_en;
            //echo '<pre>'; print_r($colors_en); echo '</pre>'; exit;
            $images=$request->images;
            $i =0;
            foreach($images as $color){
                foreach($color as $image){
                    $name = $colors_en[$i].'-'.$request->product_code.'-'.str_slug($request->name_en, '-').'.'.$image->getClientOriginalExtension();
                    $file = $image->storeAs('/images/shoes/'.$request->product_code, $name);
                    $imageArr[$i][] = $name;
                }
                $i++;
            }
                    

            $colors_en_json = json_encode($colors_en); 
            $colors_gr_json = json_encode($colors_gr);
            $images_json    = json_encode($imageArr);
            $product->colors_gr       = $colors_gr_json;
            $product->colors_en       = $colors_en_json;
            $product->images          = $images_json;
        }

            $product->name_en         = $request->name_en;
            $product->name_gr         = $request->name_gr;
            $product->product_code    = $request->product_code;
            $product->description_en  = $request->description_en;
            $product->description_gr  = $request->description_gr;
            $product->height          = $request->height;
            $product->fiapa_height    = $request->fiapa_height;
            $product->sizes           = json_encode($request->sizes);
            $product->takouni_height  = $request->takouni_height;
            $product->category_id     = $request->category_id;
            $product->order           = $request->order;
			if($request->price !==null){$product->price = $request->price;}
            $product->hidden = ($request->hidden != null ? 1 : 0);
            $product->save();

            // redirect
            Session::flash('message', 'Successfully created category!');

            $products = Products::limit(25)->get();
            $categories = Categories::all();
            
            return view('products.products')->with(compact('products', 'categories'));
        }
    }
    public function viewProduct($id){
        
        $product = Products::where('product_code', $id)->first();
        $category = Categories::find($product->category_id);
        //echo '<pre>'; print_r($product); echo '</pre>'; exit;
        
        return view('products.view-product')->with(compact('product', 'category'));
    }

    public function editProductView($id){
        
        $product = Products::where('product_code', $id)->first();
        $categories = Categories::all();
        
        return view('products.edit-product')->with(compact('product', 'categories'));
    }
    public function deleteProduct($id){
        
        $product = Products::where('product_code', $id)->first();
        if($product->images != null || $product->images != ''){File::deleteDirectory('images/shoes/'.$id);}
        $product->delete();
        $categories = Categories::all();
        $products = Products::limit(25)->get();

        Session::flash('message', 'Successfully deleted product!');
        return view('products.products')->with(compact('products', 'categories'));
    }

    public function editProduct(Request $request, $id)
    {
        $categories = Categories::all();

        // validate
        $rules = array(
            "name_gr"        => 'string|nullable',
            "name_en"        => 'string|nullable',
            "product_code"   => 'string|nullable',
            "category_id"    => 'numeric|nullable',
            "slug"           => 'string|nullable',
            "description_en" => 'string|nullable',
            "description_gr" => 'string|nullable',
            "height"         => 'numeric|nullable',
            "fiapa_height"   => 'numeric|nullable',
            "takouni_height" => 'numeric|nullable',
            "category_id"    => 'numeric|nullable',
            "hidden"         => 'accepted|nullable',
            "order"          => 'numeric|nullable',
			"price"          => 'numeric|nullable'
        );
        $validator = Validator::make($request->all(), $rules);

        // process the login
        if ($validator->fails()) {
            return view('products.edit-product')
                ->withErrors($validator)
                ->withInput();
        } else {
            // store
            $product = Products::where('product_code', $id)->firstOrFail();
            
            // if($request->colors_gr[0] !=""){
            //     $colors_gr = $request->colors_gr;

            // $colors_en = $request->colors_en;
            
            // $images = $request->images;
            // $i = 0;
            // foreach($images as $color){
            //     foreach($color as $image){
            //         $name = $colors_en[$i].'_'.$request->product_code.'_'.$image->getClientOriginalName();
            //         $file = $image->storeAs('/images/shoes/'.$request->product_code, $name);
            //         $imageArr[$i][] = $name;
            //     }
            //     $i++;
            // }
            
            // $imageFiles = Storage::allFiles($directory);
            // $oldImages = json_decode($product->images);
            // foreach($imageFiles as $imageFile){
            //     $result = false;
            //     foreach($oldImages as $color){
            //         foreach($color as $image){
            //             if($imageFile == $image){
            //                 $result = true;
            //             }
            //         }
            //     }
            //     if($result){
            //         Storage::delete('images/shoes/'.$product->product_code);
            //     }
            // }
            // $images_json    = json_encode($imageArr);

            // $colors_en_json = json_encode($colors_en); 
            // $colors_gr_json = json_encode($colors_gr);
            // if($request->colors_gr[0] != ''){$product->colors_gr           = $colors_gr_json;}
            // if($request->colors_en[0] != ''){$product->colors_en           = $colors_en_json;}
            //if($request->images['name'][0] != ''){$product->images                 = $images_json;}
            // }

            if($request->slug != null || $request->name_en !=$products->name_en){
                $product->slug            = str_slug($request->name_en, '-');
                $product->slug            = $product->slug.'-'.$product->product_code;
            }
            $sizes = json_encode($request->sizes); 
            if($request->name_en != null){$product->name_en                = $request->name_en;}
            if($request->name_gr != null){$product->name_gr                = $request->name_gr;}
            if($request->product_code != null){$product->product_code      = $request->product_code;}
            if($request->description_en != null){$product->description_en  = $request->description_en;}
            if($request->description_gr != null){$product->description_gr  = $request->description_gr;}
            if($request->height != null){$product->height                  = $request->height;}
            if($request->fiapa_height != null){$product->fiapa_height      = $request->fiapa_height;}
            if($request->takouni_height != null){$product->takouni_height  = $request->takouni_height;}
            if($request->category_id != null){$product->category_id        = $request->category_id;}
			if($request->price != null){$product->price        = $request->price;}
			if($request->sizes != null){$product->sizes        = $sizes;}
            if($request->hidden == "on"){$product->hidden = 1;}
            else{$product->hidden = 0;}
            if($request->order != null){$product->order                    = $request->order;}
            $product->update();

            // redirect
            Session::flash('message', 'Successfully created product!');
            $products = Products::limit(25)->get();
            return view('products.products')->with(compact('products', 'categories'));
        }
    }

    
}