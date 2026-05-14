<?php

namespace App\Http\Controllers;
use App\Models\Students;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Student;

class StudentsController extends Controller
{
    //
    public function index(){
        $students = Student::paginate(10);
        // $students = Students::all();
        return Inertia::render('Students/Index', [
            'students' => $students                                         
        ]);
    }
    public function withData()
    {
        sleep(7);
        return inertia('Students/Index', [
            'abc' => 'Name',
            'bb' => 'Last Name'
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
