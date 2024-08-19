interface ISocialIconsProps {
  handleClick: (value: string) => void;
  path: string;
  title: string;
  value: string;
}

export const SocialsIcon = ({
  handleClick,
  path,
  title,
  value,
}: ISocialIconsProps) => {
  return (
    <div
      className="custom-focus p-2"
      tabIndex={0}
      onClick={() => handleClick(value)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="white"
        className="cursor-pointer hover:scale-110"
        role="img"
      >
        {" "}
        <title>{title}</title>
        <path d={path} />
      </svg>
    </div>
  );
};
