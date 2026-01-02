import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FaTrash, FaCheck, FaGripLines } from 'react-icons/fa';

export default function Task({ task, onRemove, onToggle }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className={`group bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex flex-col gap-2 hover:border-blue-400 transition-all ${task.done ? 'bg-green-50 border-green-200' : ''}`}
    >
      <div className="flex justify-between items-center">
        <div {...attributes} {...listeners} className="cursor-grab text-gray-300 hover:text-gray-500 p-1">
          <FaGripLines size={12} />
        </div>
        <div className="flex gap-2">
          <button 
            onClick={onToggle} 
            className={`p-1 rounded transition-colors ${task.done ? 'text-green-600' : 'text-gray-300 hover:text-green-500'}`}
          >
            <FaCheck size={12} />
          </button>
          <button 
            onClick={onRemove} 
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            <FaTrash size={12} />
          </button>
        </div>
      </div>
      <p className={`text-sm text-gray-800 break-words ${task.done ? 'line-through text-gray-400' : ''}`}>
        {task.title}
      </p>
    </div>
  );
}