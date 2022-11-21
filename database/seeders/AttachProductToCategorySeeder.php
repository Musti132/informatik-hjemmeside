<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttachProductToCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(\App\Models\Product::all() as $product) {
            $product->categories()->attach(\App\Models\Category::inRandomOrder()->first());
        }
    }
}
