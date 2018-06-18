<?php

namespace App\Http\Controllers;

use Validator;
use Session;
use Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Products;
use App\Categories;

class RequestController extends Controller {

    public function __construct()
    {
    $this->middleware('auth');
    }

    public function boot()
    {
        Route::pattern('id', '[0-9]+');
    
        parent::boot();
    }


  public function enableRequest(Request $request, $id){
      
        $product = Products::where('product_code', (string)$id)->first();
    
        $product->hidden = $request->enabled;
    
        $product->update();
    
        return response()->json([
            'result' => 'success' 
          ]);
      }
  public function orderRequest(Request $request, $id){

        $product = Products::where('product_code', $id)->first();
    
        $product->order = $request->order;
    
        $product->update();
    
        return response()->json([
            'result' => 'success' 
          ]);
      }
}