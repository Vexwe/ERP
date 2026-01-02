import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { 
  DndContext, 
  closestCorners, 
  KeyboardSensor, 
  PointerSensor, 
  useSensor, 
  useSensors,
} from '@dnd-kit/core';
import { 
  arrayMove, 
  SortableContext, 
  sortableKeyboardCoordinates, 
} from '@dnd-kit/sortable';
import Column from './Column';

const initialData = {
  columns: [
    { id: 'col-1', title: 'A Fazer', taskIds: ['1', '2'] },
    { id: 'col-2', title: 'Em Progresso', taskIds: ['3'] }
  ],
  tasks: {
    '1': { id: '1', title: 'Configurar ERP', done: false },
    '2': { id: '2', title: 'Estilizar Kanban', done: false },
    '3': { id: '3', title: 'Reunião de Alinhamento', done: true }
  }
};

export default function KanbanBoard() {
    // Inicializa o estado buscando do LocalStorage ou usando o initialData
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('kanban-data');
        return savedData ? JSON.parse(savedData) : initialData;
    });
    
    // Salva no LocalStorage sempre que 'data' mudar
    useEffect(() => {
        localStorage.setItem('kanban-data', JSON.stringify(data));
    }, [data]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );
    
    const addColumn = () => {
        const newColId = `col-${Date.now()}`;
        setData(prev => ({
            ...prev,
            columns: [...prev.columns, { id: newColId, title: 'Nova Lista', taskIds: [] }]
        }));
    };
    
    const removeColumn = (colId) => {
        setData(prev => ({
            ...prev,
            columns: prev.columns.filter(col => col.id !== colId)
        }));
    };
    
    const updateColumnTitle = (colId, newTitle) => {
        setData(prev => ({
            ...prev,
            columns: prev.columns.map(col => col.id === colId ? { ...col, title: newTitle } : col)
        }));
    };
    
    const addTask = (colId, title) => {
        const newId = Date.now().toString();
        setData(prev => ({
            ...prev,
            tasks: { ...prev.tasks, [newId]: { id: newId, title, done: false } },
            columns: prev.columns.map(col => 
                col.id === colId ? { ...col, taskIds: [...col.taskIds, newId] } : col
            )
        }));
    };
    
    const removeTask = (taskId, colId) => {
        setData(prev => {
            const newTasks = { ...prev.tasks };
            delete newTasks[taskId];
            return {
                ...prev,
                tasks: newTasks,
                columns: prev.columns.map(col => 
                    col.id === colId ? { ...col, taskIds: col.taskIds.filter(id => id !== taskId) } : col
                )
            };
        });
    };
    
    const toggleDone = (taskId) => {
        setData(prev => ({
            ...prev,
            tasks: {
                ...prev.tasks,
                [taskId]: { ...prev.tasks[taskId], done: !prev.tasks[taskId].done }
            }
        }));
    };
    
    function findContainer(id) {
        if (data.columns.some(c => c.id === id)) return id;
        return data.columns.find(c => c.taskIds.includes(id)) ? data.columns.find(c => c.taskIds.includes(id)).id : null;
    }
    
    const handleDragOver = (event) => {
        const { active, over } = event;
        if (!over) return;
        const activeContainer = findContainer(active.id);
        const overContainer = findContainer(over.id);
        if (!activeContainer || !overContainer || activeContainer === overContainer) return;
        
        setData(prev => {
            const activeItems = prev.columns.find(c => c.id === activeContainer).taskIds;
            const overItems = prev.columns.find(c => c.id === overContainer).taskIds;
            const activeIndex = activeItems.indexOf(active.id);
            const overIndex = overItems.indexOf(over.id);
            
            return {
                ...prev,
                columns: prev.columns.map(col => {
                    if (col.id === activeContainer) {
                        return { ...col, taskIds: col.taskIds.filter(id => id !== active.id) };
                    }
                    if (col.id === overContainer) {
                        const newTasks = [...col.taskIds];
                        newTasks.splice(overIndex >= 0 ? overIndex : newTasks.length, 0, active.id);
                        return { ...col, taskIds: newTasks };
                    }
                    return col;
                })
            };
        });
    };
    
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return;
        const activeContainer = findContainer(active.id);
        const overContainer = findContainer(over.id);
        
        if (activeContainer && overContainer && activeContainer === overContainer) {
            const colIndex = data.columns.findIndex(c => c.id === activeContainer);
            const oldIndex = data.columns[colIndex].taskIds.indexOf(active.id);
            const newIndex = data.columns[colIndex].taskIds.indexOf(over.id);
            if (oldIndex !== newIndex) {
                setData(prev => ({
                    ...prev,
                    columns: prev.columns.map(col => 
                        col.id === activeContainer ? { ...col, taskIds: arrayMove(col.taskIds, oldIndex, newIndex) } : col
                    )
                }));
            }
        }
    };

    return (
        <div className="flex flex-col h-screen bg-[#f0f2f5]">
            <Header />
            
            <main className="flex-1 overflow-x-auto p-6 font-sans">
                <DndContext 
                    sensors={sensors} 
                    collisionDetection={closestCorners}
                    onDragOver={handleDragOver}
                    onDragEnd={handleDragEnd}
                >
                    <div className="flex gap-4 items-start">
                        {data.columns.map((col) => (
                            <Column 
                                key={col.id} 
                                id={col.id} 
                                title={col.title} 
                                tasks={col.taskIds.map(id => data.tasks[id])}
                                onAddTask={addTask}
                                onRemoveColumn={removeColumn}
                                onUpdateTitle={updateColumnTitle}
                                onRemoveTask={removeTask}
                                onToggleDone={toggleDone}
                            />
                        ))}
                        <button 
                            onClick={addColumn} 
                            className="min-w-[272px] bg-[#1976d2] hover:bg-[#1565c0] text-white p-3 rounded-xl font-bold transition-all text-left shadow-md"
                        >
                            + Adicionar uma nova lista
                        </button>
                    </div>
                </DndContext>
            </main>

            <Footer />
        </div>
    );
}