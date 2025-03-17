import { useEffect, useState } from "react";
import { getModulos } from "../services/api";
import { useNavigate } from "react-router-dom";

const Modulos = () => {
    const [modulos, setModulos] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchModulos = async () => {
            const token = localStorage.getItem('token');
            if(!token){
                navigate('/');
                return
            }

            try {
                const data = await getModulos(token);
                setModulos(data)
            } catch {
                navigate('/')
            }
        };

        fetchModulos();
    },[navigate]);

    useEffect(() => {
    const fetchModulos = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
        return;
      }

      try {
        const data = await getModulos(token);
        setModulos(data);
      } catch {
        navigate('/');
      }
    };

    fetchModulos();
  }, [navigate]);

    return (
        <div className="modulos-container">
      <h2>Módulos de Cursos</h2>
      {modulos.map((modulo, index) => (
        <div key={index} className="modulo-card">
          <h3>{modulo.titulo}</h3>
          <p>{modulo.descripcion}</p>
          <ul>
            {modulo.clases.map((clase: any, idx: number) => (
              <li key={idx}>
                <h4>{clase.titulo}</h4>
                <p>{clase.descripcion}</p>
                <a href={clase.video} target="_blank" rel="noopener noreferrer">Ver Video</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    );
};

export default Modulos;