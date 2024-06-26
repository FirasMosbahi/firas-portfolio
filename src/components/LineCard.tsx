type LineCardProps = {
  number: string;
  title: string;
  subtitle: string;
  content: string;
};

export default function LineCard({
  number,
  subtitle,
  title,
  content,
}: LineCardProps) {
  return (
    <div className="sm:grid flex flex-col items-start sm:grid-cols-12 gap-x-[20px] max-w-[860px] justify-center sm:items-center">
      <p className="text-[#374151] sm:block hidden xl:text-[28px] lg:text-[24px] md:text-[18px] font-[700]">
        {number}
      </p>
      <div className="h-[4px] sm:block hidden bg-[#D1D5DB] w-full col-span-3" />
      <p className="text-[#374151] sm:col-span-8 md:text-[20px] lg:text-[20px] font-[700]">
        {title}
      </p>
      <div className="col-span-4" />
      <p className="text-[#374151] sm:col-span-8 xl:text-[17px] md:text-[14px] font-[500]">
        {subtitle}
      </p>
      <div className="col-span-4" />
      <p className="text-[#D1D5DB] sm:col-span-8 xl:text-[17px] text-[14px]">
        {content}
      </p>
    </div>
  );
}
/*
    <div className="grid grid-cols-11 gap-x-[20px] max-w-[520px] justify-center items-center">
      <p className="text-[#374151] text-[32px] font-[700]">{number}</p>
      <div className="h-[4px] bg-[#D1D5DB] w-full" />
      <p className="text-[#374151] col-span-4">{title}</p>
      <div className="col-span-2" />
      <p className="text-[#374151] col-span-4">{subtitle}</p>
      <div className="col-span-2" />
      <p className="text-[#D1D5DB] col-span-4">{content}</p>
    </div>
 */
