export function Ticker(props: {
  title: string;
  items: {
    logo: React.ReactNode;
  }[];
}) {
  const notEnoughItems = props.items.length < 10;
  return (
    <div className="group relative overflow-hidden">
      <div className="mb-8 text-center text-xs uppercase lining-nums tabular-nums tracking-wide-4 text-grey-400">
        {props.title}
      </div>
      <div className="inline-flex w-full flex-nowrap">
        <div className="flex animate-infinite-scroll items-center justify-center md:justify-start">
          {props.items.map((item, index) => (
            <div key={index} className="w-52">
              {item.logo}
            </div>
          ))}
        </div>
        {/* Duplicate for infinite scroll */}
        <div className="flex animate-infinite-scroll items-center justify-center md:justify-start">
          {props.items.map((item, index) => (
            <div key={index + props.items.length} className="w-52">
              {item.logo}
            </div>
          ))}
        </div>
        {/* Multiply again if not enough items for large screen */}
        {notEnoughItems && (
          <div className="flex animate-infinite-scroll items-center justify-center md:justify-start">
            {props.items.map((item, index) => (
              <div key={index + 2 * props.items.length} className="w-52">
                {item.logo}
              </div>
            ))}
          </div>
        )}
        {/* Fade in/out overlay */}
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-grey-dark via-transparent via-50% to-grey-dark bg-fixed sm:from-5% sm:to-95%" />
      </div>
    </div>
  );
}
