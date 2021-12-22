import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = () => {
  return (
    <div>
      <textarea></textarea>
    </div>
  );
};

export default Textarea;
