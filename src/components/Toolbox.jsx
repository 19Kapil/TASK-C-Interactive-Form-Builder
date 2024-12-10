import { useState } from 'react';
import React from 'react';
import DraggableTool from './DraggableTool';
import PreviewModal from './PreviewModal';

const Toolbox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  return (
    <div className="flex flex-col flex-1 gap-4 w-full max-w-xs min-w-[20rem]">
      <h1 className="text-center text-2xl">Drag From Here</h1>

      {/* Text Input */}
      <DraggableTool type="text-input">
        <div className="cursor-pointer m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center">
          Text Input
        </div>
      </DraggableTool>

      {/* Text Area */}
      <DraggableTool type="text-area">
        <div className="cursor-pointer m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center">
          Text Area
        </div>
      </DraggableTool>

      {/* Dropdown */}
      <DraggableTool type="dropdown">
        <div className="cursor-pointer m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center">
          Dropdown
        </div>
      </DraggableTool>

      {/* Preview Modal */}
      {isModalOpen && <PreviewModal onClose={() => setIsModalOpen(false)} />}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded"
      >
        Preview
      </button>
    </div>
  );
};

export default Toolbox;
