<?php

namespace App\Http\Controllers;

use Validator;
use Session;
use Redirect;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Categories;

class CategoriesController extends Controller {

   public function __construct() {
        $this->middleware('auth');
  }

  public function index() {

    $categories = Categories::all();

    return view('categories.categories')->with('categories', $categories);
  }

  public function storeView() {

    return view('categories.add-category');
  }


  public function store(Request $request)
    {
        // validate
        $rules = array(
            'name_en'       => 'string|required',
            'name_gr'       => 'string|required',
            'slug'          => 'string|nullable',
        );
        $validator = Validator::make($request->all(), $rules);

        // process the login
        if ($validator->fails()) {
            return view('categories.categories')
                ->withErrors($validator)
                ->withInput();
        } else {
            // store
            $category = new Categories;

            $category->name_en     = $request->name_en;
            $category->name_gr     = $request->name_gr;
            if($request->slug == null){$category->slug = str_slug($request->name_en, '-');}
            $category->save();

            // redirect
            Session::flash('message', 'Successfully created category!');
            $categories = Categories::all();
            return view('categories.categories')->with('categories', $categories);
        }
    }

    public function viewCategory($category_id){
        
        $category = Categories::find($category_id);

        return view('categories.view-category')->with('category', $category);
    }

    public function editCategoryView($id){
        
        $category = Categories::find($id);
        
        return view('categories.edit-category')->with('category', $category);
    }

    public function editCategory(Request $request, $id)
    {

        // validate
        $rules = array(
            'name_gr'       => 'string|nullable',
            'name_en'       => 'string|nullable',
            'slug'          => 'string|nullable'
        );
        $validator = Validator::make($request->all(), $rules);

        // process the login
        if ($validator->fails()) {
            return view('categories.edit-category')
                ->withErrors($validator)
                ->withInput();
        } else {
            // store
            $category = Categories::findOrFail($id);

            if($category->name_gr != $request->name_gr && $request->name_gr != null) {$category->name_gr = $request->name_gr;}
            if($category->name_en != $request->name_en && $request->name_en != null) {$category->name_en = $request->name_en;}
            if($category->slug != $request->slug && $request->slug != null) {$category->slug = $request->slug;}
            $category->save();

            // redirect
            Session::flash('message', 'Successfully created category!');
            $categories = Categories::all();
            return view('categories.categories')->with('categories', $categories);
        }
    }

}