import { StatsRow } from "@/app/_components/stats-row";

const statBoxOverrides = {
  className: "group-hover:border-purple-100",
  titleClassName: "text-purple-100",
  dividerClassName: "group-hover:bg-purple-100/[.5]",
};

export async function StatsSection() {
  return (
    <section className="container mx-auto -mt-48 flex flex-col px-4 sm:-mt-16 md:-mt-48">
      <StatsRow
        volumeBoxProps={statBoxOverrides}
        transactionBoxProps={statBoxOverrides}
        avgFillTimeBoxProps={statBoxOverrides}
        bridgeFeeBoxProps={statBoxOverrides}
      />
    </section>
  );
}
