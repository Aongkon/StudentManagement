<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(StudentsController::class)->group(function(){
    Route::get('students', 'index')->name('students.list');
    // Route::get('students', 'index');
    // Route::get('students','withData');
    // Route::get('students/{name}/{last_name}', 'withRouteParameters');
    // Route::get('students/{name?}/{last_name?}', 'withOptionalRouteParameters');
    Route::get('/students/create', 'create')->name('students.create');
    Route::post('/students', 'store')->name('students.store');
    
});

// Route::inertia('create', 'Students/Create')->name('create');

Route::inertia('teachers', 'Teachers/Index')->name('teachers.list');
// Route::inertia('teachers', 'Teachers/Index');

// Route::inertia('students', 'Students/Index', [
//     'abc' => 'bbc',
//     'bb' => 'bb'
// ]);
// Route::inertia('students', 'Students/Index', [
//     'abc' => 'bbc',
//     'bb' => 'bb'
// ]);
// Route::get('students/{name?}/{last_name?}', function($name ='Guest', $last_name = 'User') {
//     return Inertia::render('Students/Index',[
//         'name' => $name,
//         'last_name' => $last_name
//     ]);
// });

Route::fallback(function(){
    return inertia::render('Errors/NotFound');
});