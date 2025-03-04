import { Link } from "react-router-dom";
const users = [
    { id: 1, name: "Phan Duy Giang"},
    { id: 2, name: "Trần Văn Nam"},
    { id: 3, name: "Lê Văn C"},
];
function UseList() {
    return (
        <div style={{
            padding: '20px',
            maxWidth: '400px',
            margin: 'auto',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: '#333',
            }}>
                Danh sách người dùng
            </h2>
            <ul style={{
                listStyleType: 'none',
                padding: 0,
            }}>
                {users.map((user) => (
                    <li key={user.id} style={{
                        margin: '10px 0',
                        backgroundColor: '#e7f3ff',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        transition: 'background-color 0.3s',
                    }}>
                        <Link to={`/user/${user.id}`} style={{
                            display: 'block',
                            textDecoration: 'none',
                            color: '#007BFF',
                            padding: '10px',
                            transition: 'background-color 0.3s',
                        }}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default UseList;