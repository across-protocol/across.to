import { twMerge } from "tailwind-merge";

import { Text } from "./text";

type Feature = {
  title: string;
  body: string;
  Icon: React.ReactNode;
};

type Props = React.ComponentProps<"div"> & {
  features: Feature[];
};

export function FeaturesGrid({ className, features, children, ...props }: Props) {
  return (
    <div
      className={twMerge("grid grid-cols-1 gap-12 sm:gap-y-16 md:grid-cols-2", className)}
      {...props}
    >
      {features.map((feature) => (
        <div key={feature.title}>
          {feature.Icon}
          <Text variant="heading-4" className="mb-4 mt-8 capitalize text-light-200">
            {feature.title}
          </Text>
          <Text className="max-w-100 text-light-300">{feature.body}</Text>
        </div>
      ))}
      {children}
    </div>
  );
}
