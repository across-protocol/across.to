import {
  documentToReactComponents,
  RenderMark,
  RenderNode,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import { isExternal } from "util/types";
import Divider from "./divider";
import { IframeContainer } from "./iFrameContainer";
import { Text } from "@/app/_components/text";
import { Asset, EntryFieldTypes } from "contentful";
import Image from "next/image";
import ContentfulImage from "./ContentfulImage";

// Map text-format types to custom components

const markRenderers: RenderMark = {
  [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  [MARKS.ITALIC]: (text) => <em>{text}</em>,
  [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
  [MARKS.CODE]: (text) => <code>{text}</code>,
  [MARKS.SUPERSCRIPT]: (text) => <sup>{text}</sup>,
  [MARKS.SUBSCRIPT]: (text) => <sub>{text}</sub>,
};

const nodeRenderers: RenderNode = {
  [INLINES.HYPERLINK]: (node, children) => {
    const href = node.data.uri as string;
    if (
      href.includes("youtube.com/embed") ||
      href.includes("player.vimeo.com") ||
      children?.toString().toLowerCase().includes("iframe") // to handle uncommon cases, creator can set the text to "iframe"
    ) {
      return (
        <IframeContainer>
          <iframe
            width="100%"
            height="100%"
            src={href}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              clipPath: "inset(0% 0% 0% 0% round 16px)",
            }}
          ></iframe>
        </IframeContainer>
      );
    }
    return (
      <Link
        target={isExternal(href) ? "_blank" : undefined}
        className="hover:text-text underline"
        href={href}
        type="external"
      >
        {children}
      </Link>
    );
  },
  [BLOCKS.DOCUMENT]: (_, children) => children,
  [BLOCKS.PARAGRAPH]: (_, children) => (
    <Text variant="body">
      <p>{children}</p>
    </Text>
  ),
  [BLOCKS.HEADING_1]: (_, children) => (
    <Text variant="heading-1" className="py-4">
      <h1>{children}</h1>
    </Text>
  ),
  [BLOCKS.HEADING_2]: (_, children) => (
    <Text variant="heading-3" className="py-4">
      <h2>{children}</h2>
    </Text>
  ),
  [BLOCKS.HEADING_3]: (_, children) => (
    <Text variant="heading-4">
      <h3>{children}</h3>
    </Text>
  ),
  [BLOCKS.HEADING_4]: (_, children) => (
    <Text variant="body">
      <h4>{children}</h4>
    </Text>
  ),
  [BLOCKS.HEADING_5]: (_, children) => (
    <Text variant="body">
      <h5>{children}</h5>
    </Text>
  ),
  [BLOCKS.HEADING_6]: (_, children) => (
    <Text variant="body">
      <h6>{children}</h6>
    </Text>
  ),
  [BLOCKS.EMBEDDED_RESOURCE]: (_, children) => <div>{children}</div>,
  [BLOCKS.UL_LIST]: (_, children) => <ul className="list-disc pl-8">{children}</ul>,
  [BLOCKS.OL_LIST]: (_, children) => <ol className="list-decimal pl-8">{children}</ol>,
  [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
  [BLOCKS.QUOTE]: (_, children) => <blockquote>{children}</blockquote>,
  [BLOCKS.HR]: () => <Divider />,
  [BLOCKS.TABLE]: (_, children) => (
    <table>
      <tbody>{children}</tbody>
    </table>
  ),
  [BLOCKS.TABLE_ROW]: (_, children) => <tr>{children}</tr>,
  [BLOCKS.TABLE_HEADER_CELL]: (_, children) => <th>{children}</th>,
  [BLOCKS.TABLE_CELL]: (_, children) => <td>{children}</td>,
  [BLOCKS.EMBEDDED_ASSET]: (node) => {
    const data = node.data.target as Asset<"WITHOUT_UNRESOLVABLE_LINKS", string>;
    const { file, description, title } = data.fields;
    const mimeGroup = file?.contentType.split("/")[0]; // image / video etc
    switch (mimeGroup) {
      case "image":
        return <ContentfulImage image={data} />;
      // TODO: test this, make custom component if necessary
      case "video":
        return (
          <video title={title} aria-description={description} src={file?.url}>
            {description}
          </video>
        );
      // TODO: add other asset types, handle them
      default:
        return <p>unknown file type</p>;
    }
  },
};

const options = {
  renderNode: nodeRenderers,
  renderMark: markRenderers,
  preserveWhitespace: true,
};

export default function ArticleContent({ content }: { content: Document }) {
  return (
    <article className="flex flex-col gap-4">
      {documentToReactComponents(content, options)}
    </article>
  );
}
