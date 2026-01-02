import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { FaTrashAlt } from 'react-icons/fa';
import Task from './Task';

export default function Column({ id, title, tasks, onAddTask, onRemoveColumn, onRemoveTask, onToggleDone, onUpdateTitle }) {
  const [text, setText] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);

  const { setNodeRef } = useDroppable({ id });

  const handleTitleSubmit = (e) => {
    if (e) e.preventDefault();
    if (tempTitle.trim() !== "") {
      onUpdateTitle(id, tempTitle);
    } else {
      setTempTitle(title);
    }
    setIsEditingTitle(false);
  };

  return (
    <div ref={setNodeRef} className="bg-[#ebecf0] w-72 rounded-xl flex flex-col h-fit max-h-[90vh] shadow-lg">
      <div className="p-4 flex justify-between items-center group">
        {isEditingTitle ? (
          <input 
            autoFocus
            className="bg-white px-2 py-1 rounded border-blue-500 border-2 w-full text-sm font-bold outline-none text-gray-800"
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
            onBlur={handleTitleSubmit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleTitleSubmit(e);
              if (e.key === 'Escape') { setTempTitle(title); setIsEditingTitle(false); }
            }}
          />
        ) : (
          <>
            <h2 
              onClick={() => setIsEditingTitle(true)}
              className="font-bold text-gray-700 truncate cursor-pointer hover:bg-gray-300 px-2 py-1 rounded transition-colors w-full"
            >
              {title}
            </h2>
            <button onClick={() => onRemoveColumn(id)} className="text-gray-400 hover:text-red-500 transition-colors ml-2">
              <FaTrashAlt size={14} />
            </button>
          </>
        )}
      </div>

      <div className="p-2 flex flex-col gap-2 overflow-y-auto">
        <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <Task 
              key={task.id} 
              task={task} 
              onRemove={() => onRemoveTask(task.id, id)} 
              onToggle={() => onToggleDone(task.id)} 
            />
          ))}
        </SortableContext>
      </div>

      {isAdding ? (
        <div className="p-2">
          <textarea 
            className="w-full p-2 rounded shadow-sm border-none focus:ring-2 focus:ring-blue-400 text-sm"
            placeholder="Título do cartão..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          <div className="flex gap-2 mt-2">
            <button 
              onClick={() => { if(text.trim()) onAddTask(id, text); setText(''); setIsAdding(false); }} 
              className="bg-[#1976d2] hover:bg-[#1565c0] text-white px-3 py-1 rounded text-sm font-bold"
            >
              Adicionar
            </button>
            <button onClick={() => setIsAdding(false)} className="text-gray-500 font-bold px-2">×</button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsAdding(true)} 
          className="m-2 p-2 text-gray-600 hover:bg-gray-300 rounded-lg text-left text-sm font-medium transition-colors"
        >
          + Adicionar um cartão
        </button>
      )}
    </div>
  );
}