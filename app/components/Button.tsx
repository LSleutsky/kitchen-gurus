interface Props {
  className?: string;
  onClick?: () => void;
  text: string;
  type?: any;
}

export default function Button({ className, onClick, text, type = `button` }: Props) {
  return (
    <button
      className={`${className} w-max border-2 border-[#F98500] bg-[#F98500] font-['Open_Sans'] hover:bg-transparent`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
