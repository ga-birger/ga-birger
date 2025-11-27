interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-sans font-medium text-[#1A1A1A]">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full bg-transparent border-b border-[#1A1A1A]/20 focus:border-[#C4836D] py-3 outline-none transition-colors placeholder:text-[#1A1A1A]/30 resize-none"
        rows={5}
      />
      {error && (
        <p className="text-sm text-[#C4836D]">{error}</p>
      )}
    </div>
  );
}

