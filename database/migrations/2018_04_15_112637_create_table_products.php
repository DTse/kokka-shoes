<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('product_code', 255)->unique()->index();
            $table->string('name_gr', 255)->unique();
            $table->string('name_en', 255)->unique()->nullable();
            $table->string('slug')->unique()->nullable();
            $table->text('description_gr')->nullable();
            $table->text('description_en')->nullable();
            $table->decimal('price', 10, 2)->default(1.0);
            $table->integer('height')->nullable()->unsinged();
            $table->integer('fiapa_height')->nullable()->unsinged();
            $table->integer('takouni_height')->nullable()->unsinged();
            $table->integer('category_id')->nullable()->unsinged();
            $table->string('colors_gr', 255)->nullable();
            $table->string('colors_en', 255)->nullable();
            $table->string('sizes', 255)->nullable();
            $table->integer('visits')->default(0)->unsinged();
            $table->integer('order')->default(0)->unsinged();
            $table->string('images', 255)->unique()->nullable();
            $table->boolean('hidden')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
