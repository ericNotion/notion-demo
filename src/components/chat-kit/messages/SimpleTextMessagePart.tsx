import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function TextPartComponent({ text }: { text: string }) {
  return (
    <div className="prose dark:prose-invert prose-neutral prose-sm flex-col self-start rounded-lg text-sm text-[15px]">
      <Markdown rehypePlugins={[rehypeRaw]}>{text}</Markdown>
    </div>
  );
}
