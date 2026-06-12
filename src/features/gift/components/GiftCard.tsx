interface GiftCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function GiftCard({ title, children, className = '' }: GiftCardProps) {
  return (
    <section
      className={`rounded-2xl bg-white/50 backdrop-blur-sm p-6 mb-6 mx-4 shadow-sm ${className}`}
      aria-label={title}
    >
      <h2 className="text-xl font-semibold mb-4 text-[#0D5C5C]">{title}</h2>
      {children}
    </section>
  )
}
