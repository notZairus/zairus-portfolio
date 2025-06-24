import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


type Props = {
    name: string,
    icon: React.ReactNode
}

export default function SkillHoverCard({ name, icon }: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className='w-full py-2 bg-white/10 border border-white/15 rounded-xl flex flex-col items-center justify-center space-y-2 hover:bg-white/15 hover:border-white/20 transition-all'>
            { icon }
            <p className="text-sm">{ name }</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-min">
        <p>{ name }</p>
      </HoverCardContent>
    </HoverCard>
  )
}
