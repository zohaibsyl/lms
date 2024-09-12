import React from 'react';

function StudentList({ students }) {
  return (
    <div style={{ justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Student List</h1>
      {students && students.length > 0 ? (
        <table
          style={{
            width: '60%',
            margin: '10px auto',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>First Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Last Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Class</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Gender</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.firstName}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.lastName}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.email}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.className}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>No students available</p>
      )}
    </div>
  );
}

export default StudentList;
