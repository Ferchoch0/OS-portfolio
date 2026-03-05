import { useState, useEffect, useCallback } from 'react';
import { projectsService } from '../services/projectService';

export const useProjectData = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProjects = useCallback(async () => {
        try {
            const response = await projectsService.getAllProjects();
            setProjects(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchProjectsByPosition = useCallback(async () => {
        try {
            const response = await projectsService.getProjectsByPosition();
            setProjects(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchProjectsById = useCallback(async (id) => {
        try {
            const response = await projectsService.getProjectById(id);
            setProjects(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);


    return { projects, loading, error, fetchProjects, fetchProjectsByPosition, fetchProjectsById };
}