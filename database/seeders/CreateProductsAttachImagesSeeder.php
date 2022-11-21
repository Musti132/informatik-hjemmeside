<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CreateProductsAttachImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::factory(100)->create()->each(function ($product) {
            $product->image()->save(ProductImage::factory()->make());
        });
    }
}
