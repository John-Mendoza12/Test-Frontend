import axios from "axios";

const API_URL = "https://test-frontend-dev.onrender.com";

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { username, password },
      { headers: { "Content-Type": "application/json" } } // Asegura que el header sea JSON
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error en login", error);
    throw error;
  }
};

export const getModulos = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/api/modulos`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los módulos", error);
    throw error;
  }
};
