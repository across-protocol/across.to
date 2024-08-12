import { Asset } from "contentful";
import Image from "next/image";

export default function ContentfulImage({
  image,
  borderless,
  displayDescription,
}: {
  image: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string>;
  borderless?: boolean;
  displayDescription?: boolean;
}) {
  const { file, description, title } = image.fields;
  const url = file?.url;
  if (!url) {
    return null;
  }
  const urlWithProtocol = `https:${url}`;

  const classes = borderless ? "" : "rounded-3xl border border-white-translucent";

  return (
    <div className="relative flex w-full flex-col items-center gap-4">
      <Image
        src={urlWithProtocol}
        alt={description ?? "description"}
        title={title}
        height={file.details.image?.height}
        width={file.details.image?.width}
        className={classes}
      />
      {description && displayDescription && <p>{description}</p>}
    </div>
  );
}
