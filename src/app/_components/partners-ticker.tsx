import { Partner1Icon } from "./icons";

// TODO: Replace with actual partner logos
const partners = [
  {
    name: "Partner 1",
    Logo: Partner1Icon,
  },
  {
    name: "Partner 2",
    Logo: Partner1Icon,
  },
  {
    name: "Partner 3",
    Logo: Partner1Icon,
  },
  {
    name: "Partner 4",
    Logo: Partner1Icon,
  },
  {
    name: "Partner 5",
    Logo: Partner1Icon,
  },
  {
    name: "Partner 6",
    Logo: Partner1Icon,
  },
];

// Duplicate partners to simulate infinite scrolling
const partnersToRender = [...partners, ...partners];

export function PartnersTicker() {
  return (
    <>
      <div className="mb-8 text-center text-xs uppercase lining-nums tabular-nums tracking-wide-4 text-grey-400">
        trusted by top tier applications
      </div>
      <div className="w-[calc(2 * var(--no-of-slides))] group relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid">
            <div className="w-[calc(var(--slides-in-view) * var(--slide-width))] flex flex-row overflow-hidden">
              {partnersToRender.map((partner, index) => (
                <div
                  key={index}
                  className="flex h-[var(--slide-height)] w-[var(--slide-width)] flex-auto flex-shrink-0 flex-grow-0 animate-scroll flex-col items-center"
                >
                  {/* Note: partner.name only for testing purposes */}
                  {/* FIXME: remove before deploying to prod */}
                  <div>{partner.name}</div>
                  <partner.Logo className="h-8 w-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Fade in/out overlay */}
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-grey-dark via-transparent via-50% to-grey-dark bg-fixed sm:from-10% sm:to-90% xl:from-25% xl:to-75%" />
      </div>
    </>
  );
}
