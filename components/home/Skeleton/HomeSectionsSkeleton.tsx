import { SectionSkeleton } from "./SectionSkeleton";

export function HomeSectionsSkeleton() {
  return (
    <>
      <div className="space-y-8">
        <SectionSkeleton />
        <SectionSkeleton />
        <SectionSkeleton />
      </div>
      <SectionSkeleton />
      <SectionSkeleton />
    </>
  );
}
