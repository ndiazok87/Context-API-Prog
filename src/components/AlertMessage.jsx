const AlertMessage = ({ type, message }) => {
    const color = type === 'success' ? 'green' : 'red';
  
    return (
        <div style={{
        padding: '1rem',
        margin: '1rem 0',
        border: `1px solid ${color}`,
        backgroundColor: `${color}20`,
        color: color,
        borderRadius: '5px',
        position: 'absolute',
        bottom: '10px',
        right: '10px',  
        zIndex: 1000,    
        }}>
        {message}
        </div>
    );
};

export default AlertMessage;
