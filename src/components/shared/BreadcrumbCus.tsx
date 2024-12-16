import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";

export default function BreadcrumbCus({
  urls,
}: {
  urls: { url: string; label: string }[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {urls.map((s, i) => {
          let html;
          if (i !== urls.length - 1) {
            html = (
              <BreadcrumbItem key={s.label + i}>
                <BreadcrumbLink href={s.url}>{s.label}</BreadcrumbLink>
              </BreadcrumbItem>
            );
          } else {
            html = (
              <BreadcrumbItem key={s.label + i}>
                <BreadcrumbPage>{s.label}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          }
          if (i === urls.length - 1) {
            return html;
          } else {
            return (
              <>
                {html}
                <BreadcrumbSeparator />
              </>
            );
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
