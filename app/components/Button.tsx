interface Props {
  autoFocus?: boolean,
  className?: string;
  onClick?: () => void;
  text?: string;
  type?: any;
}

export default function Button({ autoFocus, className, onClick, text, type = `button` }: Props) {
  return (
    <button
      autoFocus={autoFocus}
      className={`${className} border-2 border-[#F98500] bg-[#F98500] font-['Open_Sans'] hover:bg-transparent`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
