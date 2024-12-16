import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationBlog({
  curPage,
  totalPage,
}: {
  curPage: number;
  totalPage: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        {curPage - 1 > 0 && (
          <PaginationItem>
            <PaginationPrevious href={`/blogs?p=${curPage - 1}`} />
          </PaginationItem>
        )}
        {curPage > 4 && (
          <>
            <PaginationItem>
              <PaginationLink href={`/blogs?p=${1}`}>{1}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`/blogs?p=${2}`}>{2}</PaginationLink>
            </PaginationItem>{" "}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {curPage - 2 > 0 && (
          <PaginationItem>
            <PaginationLink href={`/blogs?p=${curPage - 2}`}>
              {curPage - 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {curPage - 1 > 0 && (
          <PaginationItem>
            <PaginationLink href={`/blogs?p=${curPage - 1}`}>
              {curPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={`/blogs?p=${curPage}`} isActive>
            {curPage}
          </PaginationLink>
        </PaginationItem>
        {curPage + 1 <= totalPage && (
          <PaginationItem>
            <PaginationLink href={`/blogs?p=${curPage + 1}`}>
              {curPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {curPage + 2 <= totalPage && (
          <PaginationItem>
            <PaginationLink href={`/blogs?p=${curPage + 2}`}>
              {curPage + 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {curPage + 4 < totalPage && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`/blogs?p=${totalPage - 1}`}>
                {totalPage - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`/blogs?p=${totalPage}`}>
                {totalPage}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {curPage + 1 <= totalPage && (
          <PaginationItem>
            <PaginationNext href={`/blogs?p=${curPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
