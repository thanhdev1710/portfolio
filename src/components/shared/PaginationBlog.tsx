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
  href,
  scroll = true,
}: {
  curPage: number;
  totalPage: number;
  href: string;
  scroll?: boolean;
}) {
  return (
    <Pagination>
      <PaginationContent>
        {curPage - 1 > 0 && (
          <PaginationItem>
            <PaginationPrevious
              scroll={scroll}
              href={`${href}?p=${curPage - 1}`}
            />
          </PaginationItem>
        )}
        {curPage > 4 && (
          <>
            <PaginationItem>
              <PaginationLink scroll={scroll} href={`${href}?p=${1}`}>
                {1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink scroll={scroll} href={`${href}?p=${2}`}>
                {2}
              </PaginationLink>
            </PaginationItem>{" "}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {curPage - 2 > 0 && (
          <PaginationItem>
            <PaginationLink scroll={scroll} href={`${href}?p=${curPage - 2}`}>
              {curPage - 2}
            </PaginationLink>
          </PaginationItem>
        )}
        {curPage - 1 > 0 && (
          <PaginationItem>
            <PaginationLink scroll={scroll} href={`${href}?p=${curPage - 1}`}>
              {curPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink
            scroll={scroll}
            href={`${href}?p=${curPage}`}
            isActive
          >
            {curPage}
          </PaginationLink>
        </PaginationItem>
        {curPage + 1 <= totalPage && (
          <PaginationItem>
            <PaginationLink scroll={scroll} href={`${href}?p=${curPage + 1}`}>
              {curPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {curPage + 2 <= totalPage && (
          <PaginationItem>
            <PaginationLink scroll={scroll} href={`${href}?p=${curPage + 2}`}>
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
              <PaginationLink
                scroll={scroll}
                href={`${href}?p=${totalPage - 1}`}
              >
                {totalPage - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink scroll={scroll} href={`${href}?p=${totalPage}`}>
                {totalPage}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {curPage + 1 <= totalPage && (
          <PaginationItem>
            <PaginationNext scroll={scroll} href={`${href}?p=${curPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
