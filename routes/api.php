<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\BookController;
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

Route::post('login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest');

Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth');

Route::get('me', [AuthenticatedSessionController::class, 'me'])->middleware('auth');
