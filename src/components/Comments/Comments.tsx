import { API_URL, API_VERSION } from "@/constants/base";
import { Comment, Comments } from "@/interfaces/Comment";
import CommentComponent from "./CommentComponent";
import { PaginationBlog } from "../shared/PaginationBlog";
import CreateComment from "./CreateComment";

function buildCommentTree(comments: Comments): Comment[] {
  const map: Record<number, Comment & { replies: Comment[] }> = {}; // Map to store comment references
  const tree: Comment[] = []; // Array to store the top-level comments

  // Create a map with comments initialized with empty replies
  comments.forEach((comment) => {
    map[comment.id] = { ...comment, replies: [] };
  });

  // Organize comments into a tree structure
  comments.forEach((comment) => {
    if (comment.parentId !== null) {
      map[comment.parentId]?.replies.push(map[comment.id]);
    } else {
      tree.push(map[comment.id]);
    }
  });

  return tree;
}

// Component to render the list of comments
export default async function CommentsList({
  userId,
  blogId,
  p,
  slug,
}: {
  userId?: number;
  blogId: number;
  p: number;
  slug: string;
}) {
  const comments = await fetch(
    `${API_URL}${API_VERSION}comments/${blogId}/${userId || 0}`,
    {
      next: { tags: ["comment"] },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  if (!comments.status) {
    return null;
  }

  const commentTree = buildCommentTree(comments.data);

  return (
    <div>
      <CreateComment blogId={blogId} />
      {commentTree.slice((p - 1) * 3, p * 3).map((comment) => (
        <CommentComponent
          userId={userId}
          key={comment.id}
          comment={comment}
          parentId={comment.id}
        />
      ))}
      <div className="mt-4 mb-8">
        <PaginationBlog
          scroll={false}
          href={`/blogs/${slug}`}
          curPage={Number(p) || 1}
          totalPage={Math.ceil(commentTree.length / 3)}
        />
      </div>
    </div>
  );
}
