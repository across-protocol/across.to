import { Asset } from "contentful";
import Image from "next/image";
import { object } from "zod";

export default function ContentfulImage({
  image,
  borderless,
  displayDescription,
  fillDisplay,
}: {
  image?: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string>;
  borderless?: boolean;
  displayDescription?: boolean;
  fillDisplay?: boolean;
}) {
  if (!image) {
    return null;
  }

  const { file, description, title } = image.fields;
  const url = file?.url;
  if (!url) {
    return null;
  }
  const urlWithProtocol = `https:${url}`;

  const classes = borderless ? "" : "rounded-3xl border border-white-translucent";

  const props = fillDisplay
    ? { fill: true, objectFit: "cover" }
    : {
        height: file.details.image?.height,
        width: file.details.image?.width,
      };

  return (
    <div className="relative flex h-full w-full flex-col items-center gap-4">
      <Image
        src={urlWithProtocol}
        alt={description ?? "description"}
        title={title}
        className={classes}
        aria-description={description}
        {...props}
      />
      {description && displayDescription && <p>{description}</p>}
    </div>
  );
}
