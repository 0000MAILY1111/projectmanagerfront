
import { z  } from "zod";


/** auth y login */
const authSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    email: z.string().email(),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmedPassword: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

type Auth = z.infer<typeof authSchema>

export type UserLoginForm = Pick<Auth, 'email' | 'password'>;
export type UserRegistrationForm = Pick<Auth, 'name' | 'email' | 'password' | 'confirmedPassword'>;


/** proyects */

export const projectSchema = z.object({
    _id: z.string(),
    projectName: z.string(),
    clientName: z.string(),
    description: z.string(),
});

export const dashboardProjectSchema = z.array (
    
    projectSchema.pick({
        _id: true,
        projectName: true,
        clientName: true,
        description: true,
    })

    
)






export type Project = z.infer<typeof projectSchema>;

export type ProjectFormData = Pick <Project ,'clientName' | 'description' | 'projectName'>;


