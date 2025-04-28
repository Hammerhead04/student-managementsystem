import StudentForm from '../components/StudentForm';
import api from '../services/api';

function AddStudent() {
  const handleSubmit = async (studentData) => {
    return await api.createStudent(studentData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <span className="mr-2">➕ Add New Student</span>
      </h2>
      <StudentForm onSubmit={handleSubmit} buttonText="Add Student" />
    </div>
  );
}

export default AddStudent;