function Updater({ add, title, setTitle, description, setDescription, addTask, updateTask, editId, setAdd }) {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '300px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
  
    const inputStyle = {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      outline: 'none',
    };
  
    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: add ? '#28a745' : '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };
  
    buttonStyle[':hover'] = {
      backgroundColor: add ? '#218838' : '#0056b3',
    };

    async function handleSubmit(e) {
      e.preventDefault();
      if (!title || !description) {
        alert('Please fill in all fields');
        return;
      }
      if(add){
        try{
          await addTask({title, description});
          setTitle('');
          setDescription('');
        }catch(e){
          alert('There seems to be a problem');
          console.log(e);
        }
      }else{
        try{
          await updateTask(editId, {title, description})
          setTitle('');
          setDescription('');
          setAdd(true);
        }catch(e){
          alert('There seems to be a problem');
          console.log(e);
        }
      }
    }
  
    return (
      <div style={containerStyle}>
        <input
          name="title"
          type="text"
          value={title}
          onInput={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          style={inputStyle}
        />
        <input
          name="description"
          type="text"
          value={description}
          onInput={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          style={inputStyle}
        />
        <button style={buttonStyle} onClick={(e)=>{
          handleSubmit(e)
        }}>{add ? 'Add' : 'Edit'}</button>
      </div>
    );
  }
  
  export default Updater;