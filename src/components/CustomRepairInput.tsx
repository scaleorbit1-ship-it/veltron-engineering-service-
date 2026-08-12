import React, { useState } from 'react';

const REPAIR_PRESETS = [
  { value: 'mechanical_repair', label: 'Mechanical Systems (On-Site Repair, Removal, Overhaul, Servicing)' },
  { value: 'hydraulic_repair', label: 'Hydraulic Systems (350-Bar Cylinders, Pumps, Valves, Servicing)' },
  { value: 'brake_repair', label: 'Brake Systems (Heavy Air/Hydraulic Brake Overhaul & Calipers)' },
  { value: 'fuel_repair', label: 'Fuel Systems (Diesel Injection Pump, Common Rail & Overhaul)' },
  { value: 'pneumatic_repair', label: 'Pneumatic Systems (Compressors, Solenoid Control & Servicing)' },
  { value: 'custom_equipment', label: 'Other / Custom Equipment Issue (Specify custom problem below)' },
];

interface CustomRepairInputProps {
  value: string;
  onChange: (repairRequirement: string) => void;
}

export const CustomRepairInput: React.FC<CustomRepairInputProps> = ({ value, onChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('mechanical_repair');
  const [customText, setCustomText] = useState<string>('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedCategory(val);
    if (val === 'custom_equipment') {
      onChange(customText || 'Custom Equipment Issue');
    } else {
      const preset = REPAIR_PRESETS.find((p) => p.value === val);
      if (preset) {
        onChange(preset.label);
      }
    }
  };

  const handleCustomTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setCustomText(text);
    onChange(text);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <select
        id="serviceCategory"
        value={selectedCategory}
        onChange={handleSelectChange}
        style={{
          width: '100%',
          padding: '12px 14px',
          fontSize: '14px',
          fontWeight: 500,
          color: '#0b1a2e',
          border: '1px solid #c0c8d0',
          borderRadius: '4px',
          background: '#ffffff',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        {REPAIR_PRESETS.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>

      {/* Show custom problem text input right at the bottom of the dropdown if "Other / Custom Equipment Issue" is selected */}
      {selectedCategory === 'custom_equipment' && (
        <input
          type="text"
          value={customText}
          onChange={handleCustomTextChange}
          placeholder="Type your custom problem or equipment breakdown details here..."
          required
          style={{
            width: '100%',
            padding: '10px 12px',
            fontSize: '14px',
            border: '1px solid #1d588f',
            borderRadius: '4px',
            background: '#ffffff',
            outline: 'none',
            marginTop: '2px'
          }}
        />
      )}
    </div>
  );
};
