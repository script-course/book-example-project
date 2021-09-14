<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = Category::count();
        $users = User::count();

        $books = Book::factory(150)->create();

        $books->each(function (Book $book) use ($categories, $users) {
            for ($i = 0; $i < rand(1, $categories); $i++) {
                $book->categories()->syncWithoutDetaching(rand(1, $categories));
                $book->users()->syncWithoutDetaching(rand(1, $users));
            }
        });
    }
}
