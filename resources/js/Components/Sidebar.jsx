import { Link, usePage } from "@inertiajs/react";

const Sidebar = () => {
    const { url } = usePage();
    const baseLinkClasses = 'block p-2 transitions-colors duration-200';
    const activeClasses = 'bg-blue-100 text-blue-700 font-semibold';
    const inactiveClasses  = 'text-gray-700 hover:bg-gray-200'
    const lang = localStorage.getItem('lang') || 'en'
  return (
    <aside className="w-64 bg-gray-100 p-4 min-h-screen">
        <ul className="space-y-2">
            <li>
                {/* <Link href="/students" className={`${baseLinkClasses} ${url === '/students'?activeClasses:inactiveClasses}`}>Student</Link> */}
                {/* <Link href={route('students.list')} className={`${baseLinkClasses} ${url === '/students'?activeClasses:inactiveClasses}`}>Student</Link> */}

                <Link href={`/students?lang=${lang}`}
                 className={`${baseLinkClasses} ${url === '/students'?activeClasses:inactiveClasses}`}>Student</Link>
            </li>
            <li>
                {/* <Link href="/teachers" className={`${baseLinkClasses} ${url === '/teachers'?activeClasses:inactiveClasses}`}>Teacher</Link> */}
                {/* <Link href={route('teachers.list')} className={`${baseLinkClasses} ${url === '/teachers'?activeClasses:inactiveClasses}`}>Teacher</Link> */}

                <Link href={`/teachers?lang=${lang}`} className={`${baseLinkClasses} ${url === '/teachers'?activeClasses:inactiveClasses}`}>Teacher</Link>
            </li>
        </ul>

    </aside>
  )
}

export default Sidebar