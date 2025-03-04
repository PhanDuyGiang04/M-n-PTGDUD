import React, { useState, useEffect, useRef, useReducer } from 'react';
import './App.css';

const studentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map(student =>
        student.id === action.payload.id ? action.payload : student
      );
    case 'DELETE':
      return state.filter(student => student.id !== action.payload);
    case 'SET':
      return action.payload;
    default:
      return state;
  }
};

const App = () => {
  const [students, dispatch] = useReducer(studentReducer, []);
  const [name, setName] = useState('');
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [subject3, setSubject3] = useState('');
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
      dispatch({ type: 'SET', payload: storedStudents });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleAddStudent = () => {
    if (!name || !subject1 || !subject2 || !subject3) return;
    const scores = [parseFloat(subject1), parseFloat(subject2), parseFloat(subject3)];
    const averageScore = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);
    const newStudent = {
      id: Date.now(),
      name,
      scores,
      averageScore,
    };
    dispatch({ type: 'ADD', payload: newStudent });
    setName('');
    setSubject1('');
    setSubject2('');
    setSubject3('');
    inputRef.current.focus();
  };

  const handleEditStudent = (student) => {
    setEditingId(student.id);
    setName(student.name);
    setSubject1(student.scores[0]);
    setSubject2(student.scores[1]);
    setSubject3(student.scores[2]);
  };

  const handleUpdateStudent = () => {
    if (!name || !subject1 || !subject2 || !subject3 || editingId === null) return;
    const scores = [parseFloat(subject1), parseFloat(subject2), parseFloat(subject3)];
    const averageScore = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);
    const updatedStudent = {
      id: editingId,
      name,
      scores,
      averageScore,
    };
    dispatch({ type: 'UPDATE', payload: updatedStudent });
    setEditingId(null);
    setName('');
    setSubject1('');
    setSubject2('');
    setSubject3('');
    inputRef.current.focus();
  };

  const handleDeleteStudent = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const calculateOverallAverage = () => {
    if (students.length === 0) return 0;
    const totalAverage = students.reduce((sum, student) => sum + parseFloat(student.averageScore), 0);
    return (totalAverage / students.length).toFixed(2);
  };

  return (
    <div className="App">
      <h1>Quản lý sinh viên</h1>
      <div className="input-container">
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên sinh viên"
        />
      </div>
      <div className="input-container">
        <input
          type="number"
          value={subject1}
          onChange={(e) => setSubject1(e.target.value)}
          placeholder="Toán"
        />
      </div>
      <div className="input-container">
        <input
          type="number"
          value={subject2}
          onChange={(e) => setSubject2(e.target.value)}
          placeholder="Văn"
        />
      </div>
      <div className="input-container">
        <input
          type="number"
          value={subject3}
          onChange={(e) => setSubject3(e.target.value)}
          placeholder="Anh"
        />
      </div>
      <div className="button-container">
        {editingId ? (
          <button onClick={handleUpdateStudent}>Sửa điểm</button>
        ) : (
          <button onClick={handleAddStudent}>Thêm sinh viên</button>
        )}
      </div>
      <h2>Danh sách sinh viên</h2>
      <table>
        <thead>
          <tr>
            <th>Tên sinh viên</th>
            <th>Toán</th>
            <th>Văn</th>
            <th>Anh</th>
            <th>Điểm trung bình</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.scores[0]}</td>
              <td>{student.scores[1]}</td>
              <td>{student.scores[2]}</td>
              <td>{student.averageScore}</td>
              <td>
                <button onClick={() => handleEditStudent(student)}>Sửa</button>
                <button onClick={() => handleDeleteStudent(student.id)}>Xoá</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4"><strong>Điểm trung bình của tất cả sinh viên:</strong></td>
            <td>{calculateOverallAverage()}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;