<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Book::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'author_id' => $this->faker->numberBetween(1, 20),
            'title' => $this->faker->sentence(5, true),
            'image' => $this->faker->imageUrl(200, 200, 'sports'),
            'description' => $this->faker->text(200),
        ];
    }
}
