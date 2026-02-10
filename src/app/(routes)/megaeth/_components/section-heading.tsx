import { Text } from "@/app/_components/text";

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-4xl py-12 text-center">
      <Text
        variant="heading-3"
        className="inline-block bg-clip-text text-heading-1 font-normal leading-tight  text-[#E0F3FF] sm:text-heading-2"
      >
        {title}
      </Text>
    </div>
  );
}

export default SectionHeading;
