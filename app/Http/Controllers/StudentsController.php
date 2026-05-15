<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Student;

class StudentsController extends Controller
{
    //
    public function index(Request $request){
        $search = $request->input('search');
        $sortField = $request->input('sort','id');
        $sortDirection = $request->input('direction','desc');
        $students = Student::with('user:id,name')
         ->when($search, function($query, $search){
            $query->where('name', 'like', "%{$search}%")
            ->orWhere('email', 'like',"%{$search}%");
        })
        ->orderby($sortField, $sortDirection)
        ->paginate(10)
        ->withQueryString();
        
        // $students = Students::all();
        return Inertia::render('Students/Index', [
            'students' => $students,
            'search' => $search,
            'sort' => $sortField,
            'direction' =>  $sortDirection                          
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
