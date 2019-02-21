<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('clinic','ClinicController@index');
Route::get('clinic/{id}','ClinicController@show');
Route::post('clinic','ClinicController@store');
Route::put('clinic/{id}','ClinicController@update');
Route::delete('clinic/{id}','ClinicController@delete');
Route::post('booking','requestController@store');