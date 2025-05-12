import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { AlertCircle, ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  error?: string;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, label, helperText, fullWidth = true, options, onChange, ...props }, ref) => {
    const selectClassName = cn(
      'appearance-none px-3 py-2 border rounded-md focus:outline-none focus:ring-1 transition-colors bg-white',
      error
        ? 'border-red-300 focus:ring-red-500 bg-red-50'
        : 'border-gray-300 focus:ring-blue-500',
      fullWidth && 'w-full',
      className
    );

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={cn('space-y-1', fullWidth && 'w-full')}>
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={selectClassName}
            onChange={handleChange}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
          {error && (
            <AlertCircle className="absolute right-8 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
          )}
        </div>
        {(error || helperText) && (
          <p
            id={error ? `${props.id}-error` : undefined}
            className={cn(
              'text-sm',
              error ? 'text-red-600' : 'text-gray-500'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select; 