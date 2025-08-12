export const Statistic = ({
  valStr,
  title,
  description,
}: {
  valStr: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <h1 className="text-7xl font-light">{valStr}</h1>
      <h3 className="text-xl font-semibold">{title}</h3>
      <h4>{description}</h4>
    </div>
  );
};
