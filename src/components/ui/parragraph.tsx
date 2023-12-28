import { cn } from "@/utils/cn"

interface ParragraphProps {
    children : React.ReactNode,
    className? : string
}


export default function Parragraph({ children, className } : ParragraphProps ) {
  return (
    <p className={cn("text-neutral-dark-grayish-blue", className)}>
        {children}
    </p>
  )
}
