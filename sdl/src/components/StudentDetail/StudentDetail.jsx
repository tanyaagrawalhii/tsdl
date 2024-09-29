import React from 'react';
import { useLocation } from 'react-router-dom';
import './StudentDetail.css'; // Import your styling here

const StudentDetails = () => {
  const { state } = useLocation(); // Access the student data passed from the dashboard

  if (!state) {
    return <div>No student data found.</div>; // Handle the case when no data is found
  }

  // Dummy data for the student including notes
  const studentData = {
    name: state.name,
    image: state.image,
    phone: state.phone || '9589748002',
    address: state.address || '123 Main St, Ujjain',
    email: state.email || 'tanya.522354@gmail.com',
    notes: state.notes || [
      {
        title: 'Math Homework',
        description: 'Completed exercises from Chapter 5.',
        file: 'https://example.com/file1.pdf',
      },
      {
        title: 'Science Project',
        description: 'Worked on the solar system model.',
        file: 'https://example.com/file2.pdf',
      },
      {
        title: 'History Essay',
        description: 'Essay on the French Revolution.',
        file: 'https://example.com/file3.pdf',
      },
    ],
  };

  const { name, image, phone, address, email, notes } = studentData; // Destructure student data

  return (
    <div className="student-details-container">
      <div className="student-info">
        <img src={image} alt={name} className="student-profile-image" />
        <h2>{name}</h2>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Send Message:</strong>
          <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fa-brands fa-whatsapp"></i> Send via WhatsApp
          </a>
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Send Email:</strong>
          <a href={`mailto:${email}`} className="contact-link">
            <i className="fa-solid fa-envelope"></i> Send via Email
          </a>
        </p>
      </div>

      {/* Main Content Area for Notes */}
      <div className="notes-section">
        <h3>Notes</h3>
        {notes && notes.length > 0 ? (
          notes.map((note, index) => (
            <div className="note" key={index}>
              <h4>{note.title}</h4>
              <p>{note.description}</p>
              {note.file && <a href={note.file} target="_blank" rel="noopener noreferrer">View File</a>}
            </div>
          ))
        ) : (
          <p>No notes available for this student.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
