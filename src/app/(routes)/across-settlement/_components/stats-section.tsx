import { StatsRow } from "@/app/_components/stats-row";

const statBoxOverrides = {
  className: "group-hover:border-purple-100",
  titleClassName: "text-purple-100",
  dividerClassName: "group-hover:bg-purple-100/[.5]",
};

export async function StatsSection() {
  return (
    <section className="container mx-auto flex flex-col px-4">
      <StatsRow
        volumeBoxProps={statBoxOverrides}
        transactionBoxProps={statBoxOverrides}
        avgFillTimeBoxProps={statBoxOverrides}
        bridgeFeeBoxProps={statBoxOverrides}
      />
    </section>
  );
}
