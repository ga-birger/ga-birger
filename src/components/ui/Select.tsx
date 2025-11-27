interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, error, options, ...props }: SelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-sans font-medium text-[#1A1A1A]">
        {label}
      </label>
      <select
        {...props}
        className="w-full bg-transparent border-b border-[#1A1A1A]/20 focus:border-[#C4836D] py-3 outline-none transition-colors"
      >
        <option value="">Selecione...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-[#C4836D]">{error}</p>
      )}
    </div>
  );
}

