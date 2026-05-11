<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentsController extends Controller
{
    //
    public function index(){
        return inertia('Students/Index');
    }
    public function withData()
    {
        sleep(7);
        return inertia('Students/Index', [
            'abc' => '476575',
            'bb' => 'abcde'
            ]);
    }

    public function withRouteParameters($name, $last_name){
        return inertia('Students/Index', [
            'abc' => $name,
            'bb' => $last_name
        ]);
    }
    public function withOptionalRouteParameters($name = 'Guest', $last_name = 'Users'){
        return Inertia::render('Students/Index', [
            'abc' => $name,
            'bb' => $last_name
        ]);
    }
}
