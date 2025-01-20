interface Props {
  className?: string;
  onClick?: () => void;
  text: string;
  type?: any;
}

export default function Button({ className, onClick, text, type = 'button' }: Props) {
  return (
    <button
      className={`${className} border-2 border-[#F98500] w-max bg-[#F98500] hover:bg-transparent font-['Open_Sans']`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}