<?php

//Pages
Route::get('/', 'Pages\HomeController@index');
Route::get('/login', [ 'as' => 'login', 'uses' => 'SessionController@create']);
Route::get('/logout', [ 'as' => 'logout', 'uses' => 'SessionController@destroy']);
Route::post('/login', [ 'as' => 'login', 'uses' => 'SessionController@store']); 
Route::get('/dashboard', 'Pages\DashboardController@index');
Route::get('/frontpage', 'Pages\FrontpageController@index');

//Products
Route::get('/products', 'ProductsController@index');
Route::get('/add-product', 'ProductsController@storeView');
Route::post('/add-product', 'ProductsController@store');
Route::get('/view-product/{id}', 'ProductsController@viewProduct'); 
Route::get('/edit-product/{id}', 'ProductsController@editProductView');
Route::post('/edit-product/{id}', 'ProductsController@editProduct');
Route::get('/delete-product/{id}', 'ProductsController@deleteProduct');

//Categories
Route::get('/categories', 'CategoriesController@index');
Route::get('/add-category', 'CategoriesController@storeView');
Route::post('/add-category', 'CategoriesController@store'); 
Route::get('/view-category/{id}', 'CategoriesController@viewCategory'); 
Route::get('/edit-category/{id}', 'CategoriesController@editCategoryView');
Route::post('/edit-category/{id}', 'CategoriesController@editCategory');

Route::post('/enable-product/{id}', 'RequestController@enableRequest');
Route::post('/sticky-product/{id}', 'RequestController@orderRequest');