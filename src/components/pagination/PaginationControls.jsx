"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

const PaginationControls = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${page - 1}`}
            className={isFirstPage ? "pointer-events-none opacity-50" : ""}
            aria-disabled={isFirstPage}
          />
        </PaginationItem>
        {page + " / " + totalPages}
        <PaginationItem>
          <PaginationNext
            href={`?page=${page + 1}`}
            className={isLastPage ? "pointer-events-none opacity-50" : ""}
            aria-disabled={isLastPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
