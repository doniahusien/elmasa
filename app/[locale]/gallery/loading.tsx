function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-muted ${className}`} />
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


export default function Loading() {
  return (
    <section className="space-y-12">
      <GallerySkeleton />
    </section>
  )
}