<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::get('products', function () {
    return App\Products::where('hidden', '1')->paginate(16);
});
Route::get('products/{slug}', function ($slug) {
    $slug = (string)$slug;
    return App\Products::where('slug', $slug)->get();
});
Route::get('products/category/{slug}', function ($slug) {

    $category = App\Categories::where('slug', $slug)->first();
    
    return $category->products()->where('hidden', '1')->orderBy('order', 'DESC')->paginate(16);
});
Route::get('product/category/{id}', function ($id) {

    $product = App\Products::where('id', $id)->first();
    
    return $product->category()->get();
});