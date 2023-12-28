interface TitleProps {
    children : React.ReactNode,
    className? : string
}


export default function Title({ children, className } : TitleProps ) {
  return (
    <h2 className="text-4xl font-bold text-primary-dark-blue">
        {children}
    </h2>
  )
}
