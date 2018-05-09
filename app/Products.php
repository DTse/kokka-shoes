<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Categories;

class Products extends Model
{
    
    protected $table = 'products';

    public function category() {
        return $this->belongsTo(Categories::class, 'category_id');
      }
}
