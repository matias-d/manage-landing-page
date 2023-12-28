interface TitleProps {
    children : React.ReactNode
}


export default function Title({ children } : TitleProps ) {
  return (
    <h2 className="text-4xl font-bold text-primary-dark-blue">
        {children}
    </h2>
  )
}
