import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const hanleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = await login(username, password);
            localStorage.setItem('token', token);
            navigate('/modulos');
        } catch (error) {
           setError('Las Credenciales son Incorrectas') 
        }
    };

    return (
        <div className="login-container">
            <h2 style={{textAlign: 'center'}}>Iniciar Sesion</h2>
            <form onSubmit={hanleLogin}> 
                <input style={{width:'90%', height: '29px', padding:  '7px', fontSize:'14px',
                border:'0', marginLeft:'13px', borderRadius:'7px'
            }} type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input style={{width:'90%', height: '29px', padding:  '7px', fontSize:'14px',
                border:'0', marginLeft:'13px', borderRadius:'7px'
            }} type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {error && <p className="error">{error}</p>}
                <button style={{backgroundColor: 'blue', color: 'white',
                width:'300px', height: '49px', fontSize:'15px',
                   borderRadius:'12px', marginTop:'12px', marginLeft: '8%'
            }} type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default Login