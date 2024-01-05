import { useState } from 'react';
import labelsData from '../Dataset.json';

const TagList = ({ onLabelSelect }) => {
  const [selectedLabel, setSelectedLabel] = useState('all'); 

  const handleLabelClick = (labelId) => {
    setSelectedLabel(labelId);
    onLabelSelect(labelId); 
  };

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {/* All Button */}
      <div
        className={`text-md font-semibold border rounded-xl border-black px-3 py-1 cursor-pointer text-center ${
          selectedLabel === 'all' ? 'bg-blue-300 text-black' : ''
        }`}
        onClick={() => handleLabelClick('all')}
      >
        All
      </div>
      {/* Other Labels */}
      {labelsData.labels.map((label) => (
        <div
          key={label.id}
          className={`text-md font-semibold border rounded-xl border-black px-3 py-1 cursor-pointer text-center ${
            selectedLabel === label.id ? 'bg-blue-300 text-black' : ''
          }`}
          onClick={() => handleLabelClick(label.id)}
        >
          {label.label}
        </div>
      ))}
    </div>
  );
};

export default TagList;
