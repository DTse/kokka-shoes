<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Products;

class Categories extends Model
{
    protected $table = 'categories';

    protected $primaryKey = 'category_id';

    public function products() {
        return $this->hasMany(Products::class,'category_id');
    }
}
