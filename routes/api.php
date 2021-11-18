<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AdminArticleController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('books', [BookController::class, 'index']);
Route::post('books', [BookController::class, 'store']);

Route::get('authors', [AuthorController::class, 'index']);
Route::get('categories', [CategoryController::class, 'index']);

Route::post('remove-book', [AccountController::class, 'removeBook']);
Route::put('account/{account}', [AccountController::class, 'update']);

Route::post('login', [AuthenticatedSessionController::class, 'store'])->middleware('guest');
Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])->middleware('auth');
Route::post('register', [RegisteredUserController::class, 'store'])->middleware('guest');
Route::get('me', [AuthenticatedSessionController::class, 'me'])->middleware('auth');
