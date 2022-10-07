import axios from 'axios';

export const API_BASE = 'https://ailandswebapi.azurewebsites.net';

export default {
  random: {
    query: async (color: string) => {
      const response = await axios.get(`${API_BASE}/card/random/${color}`);
      if (response.data?.url != null) {
        const { url } = response.data;
        return `${API_BASE}/${url}`;
      }
      throw new Error('Error fetching card.');
    },
  },
};
