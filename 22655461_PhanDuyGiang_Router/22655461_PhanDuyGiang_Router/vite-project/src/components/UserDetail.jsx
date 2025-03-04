import { useParams } from "react-router-dom";
const users = [
    { 
        id: 1, 
        name: "Phan Duy Giang", 
        age: 21, 
        email: "giangphan004.com", 
        gender: "Nam", 
        image: "/public/anh1.jpg", // Hình ảnh trong thư mục public 
        status: "Đang hoạt động" 
    },
    { 
        id: 2, 
        name: "Trần Văn Nam", 
        age: 30, 
        email: "b@example.com", 
        gender: "Nam", 
        image: "/public/anh2.jpg", 
        status: "Ngưng hoạt động" 
    },
    { 
        id: 3, 
        name: "Lê Văn C", 
        age: 28, 
        email: "c@example.com", 
        gender: "Nam", 
        image: "/public/anh3.jpg", 
        status: "Đang hoạt động" 
    },
];
function UseDetail(){
    const {id} = useParams();
    const user = users.find((u) => u.id === parseInt(id));
    if(!user){
        return <h2>Người dùng không tồn tại</h2>
    }
    return (
        <div>
             <h1>{user.name}</h1>
             <img 
                src={user.image} 
                alt={user.name} 
                style={{
                    width: '100px', // Kích thước hình ảnh
                    height: '100px',
                    borderRadius: '50%', // Bo tròn hình ảnh
                    objectFit: 'cover', // Cắt hình ảnh nếu cần
                    marginBottom: '20px' // Khoảng cách dưới hình ảnh
                }} 
             />
            <p>Tuổi: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Giới tính: {user.gender}</p>
            <p>Tình trạng: {user.status}</p>
        </div>
    );
}

export default UseDetail;