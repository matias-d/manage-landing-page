import { cn } from "@/utils/cn"

interface TitleProps {
    children : React.ReactNode,
    className? : string
}


export default function Title({ children, className } : TitleProps ) {
  return (
    <h2 className={cn("text-2xl text-center lg:text-start lg:text-4xl font-bold text-primary-dark-blue", className)}>
        {children}
    </h2>
  )
}
