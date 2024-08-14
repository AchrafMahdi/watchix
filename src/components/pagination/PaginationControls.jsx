"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

const PaginationControls = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const path = usePathname();

  const page = Number(searchParams.get("page") || 1);
  const params = new URLSearchParams(searchParams);

  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  // Prepare URLs for previous and next pages while preserving other params
  if (!isFirstPage) params.set("page", page - 1);
  const prevHref = `${path}?${params.toString()}`;

  params.set("page", page + 1);
  const nextHref = `${path}?${params.toString()}`;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={prevHref}
            className={isFirstPage ? "pointer-events-none opacity-50" : ""}
            aria-disabled={isFirstPage}
          />
        </PaginationItem>
        {page + " / " + totalPages}
        <PaginationItem>
          <PaginationNext
            href={nextHref}
            className={isLastPage ? "pointer-events-none opacity-50" : ""}
            aria-disabled={isLastPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
