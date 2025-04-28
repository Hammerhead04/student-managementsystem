import { useState, useEffect } from 'react';
import StudentCard from '../components/StudentCard';
import LoadingSpinner from '../components/LoadingSpinner';
import api from '../services/api';

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch students
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const data = await api.getStudents();
      setStudents(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch students. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete student
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await api.deleteStudent(id);
        fetchStudents();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
        <span>📋 Student Records</span>
        <span className="text-sm text-gray-500 font-normal">
          {students.length} {students.length === 1 ? 'student' : 'students'}
        </span>
      </h2>

      {loading ? (
        <LoadingSpinner message="Loading students..." />
      ) : error ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-md text-center">
          {error}
        </div>
      ) : students.length === 0 ? (
        <div className="bg-yellow-50 text-yellow-700 p-6 rounded-md text-center">
          <p className="text-lg mb-2">No students found</p>
          <p className="text-sm">Add your first student using the form</p>
        </div>
      ) : (
        <div className="space-y-3">
          {students.map((student) => (
            <StudentCard 
              key={student._id} 
              student={student} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;