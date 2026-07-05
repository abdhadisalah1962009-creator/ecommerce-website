<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\Auth\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Categories Routes
Route::get("/categories", [CategoryController::class, "index"]);
Route::get("/categories/{id}", [CategoryController::class, "show"]);

// Products Routes
Route::get("/products", [ProductController::class, "index"]);
Route::get("/products/{id}", [ProductController::class, "show"]);

// Auth Routes
Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);

Route::group(["middleware" => "auth:sanctum"], function () {

    // Categories Routes
    Route::post("/categories", [CategoryController::class, "store"]);
    Route::patch("/categories/{id}", [CategoryController::class, "update"]);
    Route::delete("/categories/{id}", [CategoryController::class, "destroy"]);

    // Products Routes
    Route::post("/products", [ProductController::class, "store"]);
    Route::patch("/products/{id}", [ProductController::class, "update"]);
    Route::delete("/products/{id}", [ProductController::class, "destroy"]);

    // Auth Routes
    Route::get("/user", [AuthController::class, "user"]);
    Route::post("/logout", [AuthController::class, "logout"]);
});