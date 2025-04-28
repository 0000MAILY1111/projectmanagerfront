import { Fragment } from "react";   
import { Dialog, Transition,  } from "@headlessui/react";
export default function AddTaskModal() { 
    return(
        <>
            <Transition appear show={true} as={Fragment}  >
                <Dialog as="div" className="relative z-10" onClose={() => {}}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 "
                                leaveTo="opacity-0 "
                            >
                                <div className="fixed inset-0 bg-black/60" />
                            
                            </Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto"/>
                                <div className="flex min-h-full-item-center justify-center p-4 text-center">
                                    <Transition.Child 
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                                            <Dialog.Title as="h3" className=" font-black text-4xl my-5">
                                                Nueva Tarea
                                            </Dialog.Title>
                                            
                                                <p className="text-xl font-bold">
                                                    Llena el Formulario y crea {''}
                                                    <span className="text-cyan-500"> una tarea</span>
                                                </p>                                       
                                        </Dialog.Panel> 
                                    </Transition.Child>    
                                <div/>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )

}