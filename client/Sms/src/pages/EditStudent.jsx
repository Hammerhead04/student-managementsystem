import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';
import LoadingSpinner from '../components/LoadingSpinner';
import api from '../services/api';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await api.getStudent(id);
        setStudent(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch student information.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (studentData) => {
    return await api.updateStudent(id, studentData);
  };

  if (loading) return <LoadingSpinner message="Loading student information..." />;
  
  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-md text-center">
        {error}
        <button 
          onClick={() => navigate('/')}
          className="block mx-auto mt-4 bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <span className="mr-2">✏️ Edit Student</span>
      </h2>
      {student && (
        <StudentForm 
          initialData={student} 
          onSubmit={handleSubmit} 
          buttonText="Update Student" 
        />
      )}
    </div>
  );
}

export default EditStudent;