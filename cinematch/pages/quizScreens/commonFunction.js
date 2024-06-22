import axios from 'axios';

const fetchDados = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    }
  };


export default fetchDados;