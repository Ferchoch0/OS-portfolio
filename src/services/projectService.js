const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const headers = { "ngrok-skip-browser-warning": "true" };

export const projectsService = {
    getAllProjects: async () => {
        const response = await fetch(`${API_BASE_URL}/projectController.php?action=getAllProjects`, { headers });
        return response.json();
    },
    getProjectsByPosition: async () => {
        const response = await fetch(`${API_BASE_URL}/projectController.php?action=getProjectHome`, { headers });
        return response.json();
    },
    getProjectById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/projectController.php?action=getProjectById&id=${id}`, { headers });
        return response.json();
    },
}
