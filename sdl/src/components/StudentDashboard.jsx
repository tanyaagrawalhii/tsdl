import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf'; // Import jsPDF
import './StudentDashboard.css';

const StudentDashboard = () => {
  const { state } = useLocation();
  const { firstName, lastName } = state || {};

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNote = () => {
    const timestamp = new Date().toLocaleString();
    const newNote = { title, description, files, timestamp, pinned: false };
    setNotes([...notes, newNote]);
    resetForm();
  };

  const handleEditNote = (index) => {
    const noteToEdit = notes[index];
    setTitle(noteToEdit.title);
    setDescription(noteToEdit.description);
    setFiles(noteToEdit.files || []);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleUpdateNote = () => {
    const updatedNotes = [...notes];
    updatedNotes[editIndex] = {
      ...updatedNotes[editIndex],
      title,
      description,
      files,
      timestamp: new Date().toLocaleString(),
    };
    setNotes(updatedNotes);
    resetForm();
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handlePinNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].pinned = !updatedNotes[index].pinned;
    setNotes(updatedNotes);
  };

  const handleDeleteFile = (fileIndex) => {
    const updatedFiles = files.filter((_, i) => i !== fileIndex);
    setFiles(updatedFiles);
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setFiles([]);
    setIsModalOpen(false);
    setEditIndex(null);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to download the note as a PDF
  const handleDownloadPDF = (note) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(note.title, 10, 10);
    doc.setFontSize(12);
    doc.text(`Description: ${note.description}`, 10, 20);
    doc.text(`Timestamp: ${note.timestamp}`, 10, 30);
    
    // Add files if any (just the file names for this example)
    if (note.files.length > 0) {
      doc.text('Uploaded Files:', 10, 40);
      note.files.forEach((file, index) => {
        doc.text(file.name, 10, 50 + index * 10); // Adjust positioning
      });
    }

    doc.save(`${note.title}.pdf`); // Name the file based on the note title
  };

  return (
    <div className="student-dashboard-container">
      {/* Navbar */}
      <nav className="student-dashboard-navbar">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="student-dashboard-search-bar"
        />
        <div className="student-dashboard-user-info">
          <div className="student-dashboard-avatar">
            {firstName && firstName.charAt(0)}
          </div>
          <span className="student-dashboard-user-name">
            {firstName} {lastName}
          </span>
        </div>
      </nav>

      {/* Notes Section */}
      <div className="student-dashboard-notes-container">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div className={`student-dashboard-note-card ${note.pinned ? 'pinned' : ''}`} key={index}>
              <h3>{note.title}</h3>
              <p className="note-timestamp">{note.timestamp}</p>
              <i 
                className="fa-solid fa-thumbtack note-pin-icon"
                onClick={() => handlePinNote(index)} 
                style={{ cursor: 'pointer' }} 
              />
              <div className="student-dashboard-note-actions">
                <button onClick={() => handleEditNote(index)}>Edit</button>
                <button onClick={() => handleDeleteNote(index)}>Delete</button>
                
                <button onClick={() => handleDownloadPDF(note)}>Download PDF</button> {/* Download button */}
              </div>
            </div>
          ))
        ) : (
          <p className="student-dashboard-no-notes-text">No notes yet. Click the plus button to add notes.</p>
        )}
      </div>

      {/* Floating Plus Button */}
      <button
        className="student-dashboard-add-note-button"
        onClick={() => {
          setIsModalOpen(true);
          setEditIndex(null);
        }}
      >
        +
      </button>

      {/* Modal for Adding Notes */}
      {isModalOpen && (
        <div className="student-dashboard-modal">
          <div className="student-dashboard-modal-content">
            <h2>{editIndex !== null ? 'Edit Note' : 'Add Note'}</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="student-dashboard-modal-input"
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="student-dashboard-modal-textarea"
              required
            />
            <input
              type="file"
              onChange={(e) => setFiles(Array.from(e.target.files))}
              className="student-dashboard-modal-file-input"
              multiple
            />
            {files.length > 0 && (
              <div className="uploaded-files">
                <h4>Currently Uploaded Files:</h4>
                <ul>
                  {files.map((file, fileIndex) => (
                    <li key={fileIndex}>
                      {file.name}
                      <button onClick={() => handleDeleteFile(fileIndex)}>Delete</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                onClick={editIndex !== null ? handleUpdateNote : handleAddNote}
                className="student-dashboard-modal-button"
              >
                {editIndex !== null ? 'Update Note' : 'Add Note'}
              </button>
              <button
                onClick={resetForm}
                className="student-dashboard-cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
