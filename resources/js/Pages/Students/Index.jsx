import { usePage } from "@inertiajs/react"
import Sidebar from "@/Components/Sidebar";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Students(){
    const { abc, bb, user_name, father_name } = usePage().props;
    return (
      //composition layout
      <DashboardLayout>
  <main className="flex-1 p-6">
    <header className="mb-6 border-b pb-4">
      <h1 className="text-2xl font-bold text-gray-800">Students Page</h1>
      <p className="text-sm text-gray-500">
        Welcome to the Students management
      </p>
    </header>

    <section className="space-y-4">
      <div className="bg-white p-6 rounded shadow">
        <p className="text-gray-700">
          Here you can manage Students data,
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow text-sm text-gray-600">
        <p>
          <strong>abc:</strong>
        </p>
        <p>
          <strong>bb:</strong>
        </p>
        <p>User name is {user_name}</p>
        <p>Father name is {father_name}</p>
      </div>
    </section>
  </main>
  </DashboardLayout>
    )
}