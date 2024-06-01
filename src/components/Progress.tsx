import React from 'react';

interface ProgressProps {
  label: string;
  quantity: number;
}

const Progress: React.FC<ProgressProps> = ({ label, quantity }) => {

  const toPercentage = (quantity: number) => {
    return `${(quantity / 5) * 100}%`;
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700">{label}</span>
        <span className="text-sm font-medium text-blue-700">{quantity} / 5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: toPercentage(quantity) }}></div>
      </div>
    </div>
  );
};

export default Progress;
