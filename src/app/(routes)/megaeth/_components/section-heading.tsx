import { Text } from '@/app/_components/text'

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-4xl text-center py-12">
      <Text variant="heading-3" className="font-normal bg-clip-text text-transparent leading-tight text-heading-1  text-[#E0F3FF] inline-block sm:text-heading-2">
        {title}
      </Text>
    </div>
  )
}

export default SectionHeading
