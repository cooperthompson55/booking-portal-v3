import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { AlertCircle } from 'lucide-react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, label, helperText, fullWidth = true, ...props }, ref) => {
    const textareaClassName = cn(
      'px-3 py-2 border rounded-md focus:outline-none focus:ring-1 transition-colors resize-none',
      error
        ? 'border-red-300 focus:ring-red-500 bg-red-50'
        : 'border-gray-300 focus:ring-blue-500',
      fullWidth && 'w-full',
      className
    );

    return (
      <div className={cn('space-y-1', fullWidth && 'w-full')}>
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            className={textareaClassName}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          />
          {error && (
            <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
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

TextArea.displayName = 'TextArea';

export default TextArea; 