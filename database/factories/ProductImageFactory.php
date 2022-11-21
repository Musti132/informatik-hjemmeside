<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductImage>
 */
class ProductImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        //Get a random product
        $productId = Product::all()->random()->id;

        return [
            'path' => 'images/robot_product.png',
            'product_id' => $productId,
        ];
    }
}
