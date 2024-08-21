import { Text } from "@/app/_components/text";
import BackToTopButton from "./_components/back-to-top-button";
import BackgroundBanner from "./background-banner";
import Filter from "./_components/filter";

export default async function BlogHomePage() {
  return (
    <>
      <BackgroundBanner offsetTop={-127} />
      <main className="relative z-[1] mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-10 lg:gap-8 lg:px-0">
        <Text variant="heading-2" className="-mb-6 lg:-mb-8">
          Across Protocol
        </Text>
        <Filter />
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex w-full flex-col items-center gap-6">
            <Text variant="heading-3">Blog Post</Text>
            <Text variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, mi
              nec tincidunt bibendum, mi odio tincidunt purus, a ultricies nisl odio nec
              nunc. Donec nec turpis sed metus tincidunt efficitur. Donec in erat in nunc
              tincidunt vehicula. Nullam et nisl in sapien lacinia efficitur. Nullam
              auctor, nunc nec aliquam ultricies, sapien erat rhoncus eros, nec mollis
              libero justo a libero. Sed nec eros auctor, tincidunt nibh nec, ultricies
              nunc. Donec nec turpis sed metus tincidunt efficitur. Donec in erat in nunc
              tincidunt vehicula. Nullam et nisl in sapien lacinia efficitur. Nullam
              auctor, nunc nec aliquam ultricies, sapien erat rhoncus eros, nec mollis
              libero justo a libero. Sed nec eros auctor, tincidunt nibh nec, ultricies
              nunc.
            </Text>
          </div>
        ))}
        <BackToTopButton />
      </main>
    </>
  );
}
