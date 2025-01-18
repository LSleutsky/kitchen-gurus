interface Props {
  className?: string;
  text: string;
}

export default function Button({ className, text }: Props) {
  return (
    <button className={`${className} mx-4 mt-10 p-4 border-2 border-[#F98500] w-max bg-[#F98500] hover:bg-transparent font-['Open_Sans']`}>
      {text}
    </button>
  );
}