// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './App.css';

// // const API_URL = 'http://localhost:5000/api/students';

// // function App() {
// //   const [students, setStudents] = useState([]);
// //   const [form, setForm] = useState({ name: '', email: '', phone: '' });
// //   const [editingId, setEditingId] = useState(null);

// //   // Fetch students
// //   const fetchStudents = async () => {
// //     const res = await axios.get(API_URL);
// //     setStudents(res.data);
// //   };

// //   useEffect(() => {
// //     fetchStudents();
// //   }, []);

// //   // Handle form input change
// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   // Create or Update student
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (editingId) {
// //         await axios.put(`${API_URL}/${editingId}`, form);
// //       } else {
// //         await axios.post(API_URL, form);
// //       }
// //       setForm({ name: '', email: '', phone: '' });
// //       setEditingId(null);
// //       fetchStudents();
// //     } catch (err) {
// //       console.error(err.response.data.message);
// //     }
// //   };

// //   // Delete student
// //   const handleDelete = async (id) => {
// //     if (confirm('Are you sure you want to delete this student?')) {
// //       await axios.delete(`${API_URL}/${id}`);
// //       fetchStudents();
// //     }
// //   };

// //   // Edit student
// //   const handleEdit = (student) => {
// //     setForm({ name: student.name, email: student.email, phone: student.phone });
// //     setEditingId(student._id);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
// //         <h1 className="text-2xl font-bold text-center mb-6">
// //           Student Management System 📚
// //         </h1>

// //         {/* Form */}
// //         <form onSubmit={handleSubmit} className="mb-8 space-y-4">
// //           <div className="flex flex-col">
// //             <label className="font-semibold">Name</label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={form.name}
// //               onChange={handleChange}
// //               className="border rounded p-2"
// //               required
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label className="font-semibold">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               className="border rounded p-2"
// //               required
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label className="font-semibold">Phone</label>
// //             <input
// //               type="text"
// //               name="phone"
// //               value={form.phone}
// //               onChange={handleChange}
// //               className="border rounded p-2"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
// //           >
// //             {editingId ? 'Update Student' : 'Add Student'}
// //           </button>
// //         </form>

// //         {/* Students List */}
// //         <div className="space-y-4">
// //           {students.length === 0 ? (
// //             <p className="text-center text-gray-500">No students found.</p>
// //           ) : (
// //             students.map((student) => (
// //               <div
// //                 key={student._id}
// //                 className="flex justify-between items-center bg-gray-50 p-4 rounded shadow"
// //               >
// //                 <div>
// //                   <p className="font-bold">{student.name}</p>
// //                   <p className="text-sm text-gray-600">{student.email}</p>
// //                   <p className="text-sm text-gray-600">{student.phone}</p>
// //                 </div>
// //                 <div className="flex space-x-2">
// //                   <button
// //                     onClick={() => handleEdit(student)}
// //                     className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
// //                   >
// //                     Edit
// //                   </button>
// //                   <button
// //                     onClick={() => handleDelete(student._id)}
// //                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// const API_URL = 'http://localhost:6890/api/students';

// function App() {
//   const [students, setStudents] = useState([]);
//   const [form, setForm] = useState({ name: '', email: '', phone: '' });
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch students
//   const fetchStudents = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(API_URL);
//       setStudents(res.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch students. Please try again.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   // Handle form input change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Create or Update student
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await axios.put(`${API_URL}/${editingId}`, form);
//       } else {
//         await axios.post(API_URL, form);
//       }
//       setForm({ name: '', email: '', phone: '' });
//       setEditingId(null);
//       fetchStudents();
//     } catch (err) {
//       console.error(err.response?.data?.message || err.message);
//     }
//   };

//   // Delete student
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this student?')) {
//       try {
//         await axios.delete(`${API_URL}/${id}`);
//         fetchStudents();
//       } catch (err) {
//         console.error(err.response?.data?.message || err.message);
//       }
//     }
//   };

//   // Edit student
//   const handleEdit = (student) => {
//     setForm({ name: student.name, email: student.email, phone: student.phone });
//     setEditingId(student._id);
//     // Scroll to form
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   // Cancel editing
//   const handleCancel = () => {
//     setForm({ name: '', email: '', phone: '' });
//     setEditingId(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="bg-indigo-700 text-white p-4 shadow-md">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-2xl font-bold">Student Management System</h1>
//         </div>
//       </nav>

//       <div className="max-w-6xl mx-auto py-8 px-4">
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Form Card */}
//           <div className="md:col-span-1">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <span className="mr-2">
//                   {editingId ? '✏️ Edit Student' : '➕ Add New Student'}
//                 </span>
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="Enter student name"
//                     required
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="email@example.com"
//                     required
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="(123) 456-7890"
//                     required
//                   />
//                 </div>
                
//                 <div className="flex space-x-3 pt-2">
//                   <button
//                     type="submit"
//                     className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
//                   >
//                     {editingId ? 'Update' : 'Add Student'}
//                   </button>
                  
//                   {editingId && (
//                     <button
//                       type="button"
//                       onClick={handleCancel}
//                       className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
//                     >
//                       Cancel
//                     </button>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* Students List */}
//           <div className="md:col-span-2">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
//                 <span>📋 Student Records</span>
//                 <span className="text-sm text-gray-500 font-normal">
//                   {students.length} {students.length === 1 ? 'student' : 'students'}
//                 </span>
//               </h2>

//               {loading ? (
//                 <div className="flex justify-center items-center h-40">
//                   <div className="text-center text-gray-500">
//                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto mb-2"></div>
//                     <p>Loading students...</p>
//                   </div>
//                 </div>
//               ) : error ? (
//                 <div className="bg-red-50 text-red-600 p-4 rounded-md text-center">
//                   {error}
//                 </div>
//               ) : students.length === 0 ? (
//                 <div className="bg-yellow-50 text-yellow-700 p-6 rounded-md text-center">
//                   <p className="text-lg mb-2">No students found</p>
//                   <p className="text-sm">Add your first student using the form</p>
//                 </div>
//               ) : (
//                 <div className="space-y-3">
//                   {students.map((student) => (
//                     <div
//                       key={student._id}
//                       className="bg-white border border-gray-200 rounded-md p-4 hover:shadow-md transition duration-200"
//                     >
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h3 className="font-semibold text-lg text-gray-800">{student.name}</h3>
//                           <div className="mt-1 space-y-1">
//                             <p className="text-sm flex items-center text-gray-600">
//                               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                               </svg>
//                               {student.email}
//                             </p>
//                             <p className="text-sm flex items-center text-gray-600">
//                               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                               </svg>
//                               {student.phone}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEdit(student)}
//                             className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition duration-200 flex items-center"
//                             title="Edit"
//                           >
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
//                             </svg>
//                           </button>
//                           <button
//                             onClick={() => handleDelete(student._id)}
//                             className="px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition duration-200 flex items-center"
//                             title="Delete"
//                           >
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <footer className="bg-white border-t mt-12 py-4">
//         <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
//           Student Management System &copy; {new Date().getFullYear()}
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import StudentDetails from './pages/StudentDetails';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddStudent />} />
          <Route path="edit/:id" element={<EditStudent />} />
          <Route path="students/:id" element={<StudentDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
