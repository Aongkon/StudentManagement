import { usePage } from "@inertiajs/react"
import Sidebar from "@/Components/Sidebar";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useTranslation } from "react-i18next";

export default function Students(){
    // const { abc, bb, user_name, father_name } = usePage().props;
    const { students } = usePage().props;
    const {t, i18n} = useTranslation();
    return (
      //composition layout
      <DashboardLayout>
<main className="flex-1 p-6">
    <header className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">{t('Students Page')}</h1>
        <p className="text-sm text-gray-500">{t('Welcome to the student management section.')}</p>
    </header>

    <div className="overflow-x-auto bg-white rounded shadow p-4">
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
                    <th className="p-2">#</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Gender</th>
                    <th className="p-2">Score</th>
                </tr>
            </thead>

            <tbody>
              {students.map((students, index) => (
                <tr>
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{students.name}</td>
                  <td className="p-2">{students.email}</td>
                  <td className="p-2">{students.gender}</td>
                  <td className="p-2">{students.score}</td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
</main>
  </DashboardLayout>
    )
}