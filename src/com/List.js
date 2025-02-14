import React from 'react';

function List({ setAdd, setTitle, setDescription, tasks, setEditId, deleteTask }) {
  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
  };

  const buttonStyle = {
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  buttonStyle[':hover'] = {
    backgroundColor: '#0056b3',
  };

  function edit(e, task) {
    e.preventDefault();
    setAdd(false);
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task._id);
  }
  function deleteElement(e, task) {
    e.preventDefault();
    deleteTask(task._id);
  }

  return (
    <div style={containerStyle}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((el) => (
          <li key={el._id} style={listItemStyle}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'start'}}>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{el.title}</h1>
              <p style={{ margin: 0, color: '#555' }}>{el.description}</p>
            </div>
            <button onClick={(e) => edit(e, el)} style={buttonStyle}>
              Edit
            </button>
            <button onClick={(e) => deleteElement(e, el)} style={buttonStyle}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;