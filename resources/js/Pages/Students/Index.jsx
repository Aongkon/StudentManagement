import { Link, router, usePage } from "@inertiajs/react"
import Sidebar from "@/Components/Sidebar";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useTranslation } from "react-i18next";
import { Button } from "@headlessui/react";
import { useState } from "react";
// import Router from "vendor/tightenco/ziggy/src/js/Router";
// import route from 'ziggy-js';

export default function Students(){
    // const { abc, bb, user_name, father_name } = usePage().props;
    
    const { students, search:initialSearch, sort, direction } = usePage().props;
    const {t, i18n} = useTranslation();


    const [search, setSearch] = useState(initialSearch || "")

    const handleSort = (field) =>{
        const newDirection = sort === field && direction === 'asc' ? 'desc' : 'asc';

        router.get('/students', {
            search,
            sort: field,
            direction: newDirection
        }, {
            preserveState: true,
            replace: true
        })
    }

    const renderSortArrow = (field) =>{
        if(sort !== field) return null;
        return direction === 'asc' ? '↑':'↓';
    }

    //handle pagination links
    const handlePageChange = (url) =>{
        if (url) router.visit(url);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/students', {search}, {
            preserveState: true,
            replace: true

        })
    }
    return (
      //composition layout
      <DashboardLayout>
<main className="flex-1 p-6">
    <header className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">{t('Students Page')}</h1>
        <p className="text-sm text-gray-500">{t('Welcome to the student management section.')}</p>
    </header>
    <form onSubmit={handleSearch}>
        <input type="text" placeholder={t('Search Students')}
             value={search}
             onChange={(e) => setSearch(e.target.value)}
         />
        <button type="submit">Search</button>
    </form>

    <div className="overflow-x-auto bg-white rounded shadow p-4">
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
                    <th className="p-2 cursor-pointer" onClick={()=>handleSort('id')}># {renderSortArrow('id')}</th>
                    <th className="p-2 cursor-pointer" onClick={()=>handleSort('name')}>Name {renderSortArrow('name')}</th>
                    <th className="p-2 cursor-pointer" onClick={()=>handleSort('email')}>Email {renderSortArrow('email')}</th>
                    <th className="p-2 cursor-pointer" onClick={()=>handleSort('gender')}>Gender {renderSortArrow('gender')}</th>
                    <th className="p-2 cursor-pointer" onClick={()=>handleSort('score')}>Score {renderSortArrow('Score')}</th>
                </tr>
            </thead>

            <tbody>
              {students.data.map((student, index) => (
                <tr key={index}>
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.email}</td>
                  <td className="p-2">{student.gender}</td>
                  <td className="p-2">{student.score}</td>
                </tr>
              ))}
            </tbody>
        </table>
        <div className="flex justify-between">
            <div></div>
            <div>
            {students.links.map((link, idx) => (
                <Button
                  key={idx}
                  onClick={ () => handlePageChange(link.url)}
                  disabled={!link.url}
                  dangerouslySetInnerHTML={{__html: link.label}}
                  className={`px-4 py-4 active:bg-red-400`}
                />
            ))}
            </div>
        </div>
    </div>
</main>
  </DashboardLayout>
    )
}