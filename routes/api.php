<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Pagination\LengthAwarePaginator as Paginator;


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
    $page = Input::get('page', 1);
    $paginate = 16;

    $order = App\Products::where([['order', '<>', '0'],['hidden', '=', '1']])->orderBy('order', 'ASC')->get();
    $anarchy = App\Products::where([['order', '=', '0'],['hidden', '=', '1']])->orderBy('updated_at', 'DESC')->get();

    $final=$order->merge($anarchy);

    $slice = array_slice($final->toArray(), $paginate * ($page - 1), $paginate);
    $paginate = new Paginator ($slice, count($final), $paginate);

    return $paginate;
});
Route::get('products/{slug}', function ($slug) {
    $slug = (string)$slug;
    return App\Products::where('slug', $slug)->get();
});
Route::get('products/category/{slug}', function ($slug) {

    $category = App\Categories::where('slug', $slug)->first();

    $page = Input::get('page', 1);
    $paginate = 16;

    $order = $category->products()->where([['order', '<>', '0'],['hidden', '=', '1'] ])->orderBy('order', 'ASC')->get();
    $anarchy = $category->products()->where([['order', '=', '0'],['hidden', '=', '1'] ])->orderBy('updated_at', 'DESC')->get();

    $final=$order->merge($anarchy);

    $slice = array_slice($final->toArray(), $paginate * ($page - 1), $paginate);
    $paginate = new Paginator ($slice, count($final), $paginate);

    return $paginate;
});
Route::get('product/pagination/{slug}', function ($slug) {

    $category = App\Categories::where('slug', $slug)->first();
    
    return $category == null ? App\Products::where('hidden', '1')->select(['id', 'slug', 'product_code'])->orderBy('category_id','DESC')->get() : $category->products()->select(['id', 'slug', 'product_code'])->where('hidden', '1')->orderBy('category_id','DESC')->get();
});
Route::get('product/category/{id}', function ($id) {

    $product = App\Products::where('id', $id)->first();
    
    return $product->category()->get();
});
Route::get('sitemap', function () {

    $product = App\Products::pluck('slug');
    
    return $product;
});

