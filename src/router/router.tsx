import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import DashboardView from '@/views/DashboardView'
import EditProjectView from '@/views/EditProjectView';
import CreateProjectView from '@/views/CreateProjectView';
import ProjectDetailsView from '@/views/ProjectDetailsView';
import LoginView from '@/views/LoginView';
import RegisterView from '@/views/RegisterView';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardView />} index />
                    <Route path="/projects/create" element={<CreateProjectView />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailsView />} />
                    <Route path="/projects/:projectId/edit" element={<EditProjectView />} />
                </Route>

             ////  <Route element = {<AppLayout/>}>
              ////  <Route path='/auth/login' element={<LoginView/>} />  
               //// <Route path='/auth/register' element={<RegisterView/>} /> 
               //// </Route>
            </Routes>
        </BrowserRouter>
    )
}