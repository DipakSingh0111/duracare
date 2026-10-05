type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className="px-3 sm:px-6 lg:px-10">
      <div className={`mx-auto max-w-[1400px] px-6 sm:px-9 lg:px-[54px] ${className}`}>
        {children}
      </div>
    </div>
  );
}
