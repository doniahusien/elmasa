function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-muted ${className}`} />
}

export function CarouselSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[280px] w-full rounded-xl" />
      <div className="flex justify-center gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="size-2 rounded-full" />
        ))}
      </div>
    </div>
  )
}

function PlansSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-44" />
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border p-5 space-y-3">
            <Skeleton className="h-3.5 w-3/5" />
            <Skeleton className="h-7 w-2/5" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="mt-2 h-9 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

function WhyUsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-52" />
      <Skeleton className="h-3 w-3/5" />
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="size-11 rounded-full" />
            <Skeleton className="h-3.5 w-2/3" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
        ))}
      </div>
    </div>
  )
}

function GallerySkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-36" />
      <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-2 h-[328px]">
        <Skeleton className="row-span-2 rounded-xl" />
        <Skeleton className="rounded-xl" />
        <Skeleton className="rounded-xl" />
        <Skeleton className="rounded-xl" />
        <Skeleton className="rounded-xl" />
      </div>
    </div>
  )
}

function ReviewsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-40" />
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border p-5 space-y-3">
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-full shrink-0" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-2.5 w-2/5" />
              </div>
            </div>
            <Skeleton className="h-2.5 w-full" />
            <Skeleton className="h-2.5 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  )
}
export default function Loading() {
  return (
    <section className="space-y-12">
      <CarouselSkeleton />
      <PlansSkeleton />
      <WhyUsSkeleton />
      <GallerySkeleton />
      <ReviewsSkeleton />
    </section>
  )
}