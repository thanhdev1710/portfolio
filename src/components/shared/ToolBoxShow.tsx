import {
  Eye,
  Bookmark,
  MessageCircleMore,
  ArrowBigDown,
  ArrowBigUp,
} from "lucide-react";

export default function ToolBoxShow({
  numView,
  numBookmark,
  numMess,
  numVoteUp,
  numVoteDown,
  sizeIcon,
  sizeText,
}: {
  numView: number;
  numBookmark: number;
  numMess: number;
  numVoteUp: number;
  numVoteDown: number;
  sizeIcon: number;
  sizeText: number;
}) {
  return (
    <div className="flex justify-between items-center text-gray-400">
      <div
        className="flex items-center gap-3"
        style={{ fontSize: `${sizeText}px` }}
      >
        <div className="flex items-center gap-1">
          <Eye size={sizeIcon} />
          <span>{numView}</span>
        </div>
        <div className="flex items-center gap-1">
          <Bookmark size={sizeIcon} />
          <span>{numBookmark}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircleMore size={sizeIcon} />
          <span>{numMess}</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <ArrowBigUp size={sizeIcon + 6} />
        <span>{numVoteUp}</span>
        <ArrowBigDown size={sizeIcon + 6} />
        <span>{numVoteDown}</span>
      </div>
    </div>
  );
}
