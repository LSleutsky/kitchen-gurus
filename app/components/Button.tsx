interface Props {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  text?: string;
  type?: any;
}

export default function Button({ className, disabled, onClick, text, type = `button` }: Props) {
  return (
    <button
      className={`
        ${disabled
          ? `border-2 border-gray-300 bg-gray-200 text-gray-400`
          : `border-2 border-[#F98500] bg-[#F98500] hover:bg-transparent`
        }
        ${className}
        font-['Open_Sans']
      `}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
