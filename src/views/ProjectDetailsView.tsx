import { getProjectById } from "@/api/ProjectApi";
import AddTaskModal from "@/components/AddTaskModal";
import EditProjectForm from "@/components/EditProjectForm";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams, useNavigate } from "react-router-dom";

export default function ProjectDetailsView() {
    const params = useParams();
    const navigate = useNavigate();
    const projectId = params.projectId!
    
    const { data, isLoading, isError } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false,        
    });

    if (isLoading) return 'Cargando...'
    if (isError) return <Navigate to="/404" />   
    if (data) return (
            <>
                <h1 className="text-5xl font-black ">{data.projectName}</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">{data.description}</p>
                <nav className="my-5 flex gap-x-3">
                    <button
                    type="button"
                    className="bg-cyan-400 hover:bg-cyan-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                    onClick={() => navigate('?newTask=true')}
                    >Agregar Tarea</button>
                </nav>
                <AddTaskModal/>
            </>
        )
      
}

