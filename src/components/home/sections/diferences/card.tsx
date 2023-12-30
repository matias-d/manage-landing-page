import Parragraph from "@/components/ui/parragraph";
import { cn } from "@/utils/cn";

interface CardI {
  title : string,
  id : number,
  description : string
}

interface CardProps {
  card : CardI,
  className? : string
}

export default function Card({ card, className } : CardProps) {

  return (
    <article className={cn(``, className)}>
        <header className="flex items-center gap-x-2 lg:gap-x-4 bg-neutral-very-pale-red lg:bg-transparent rounded-full">
          <label className="bg-primary-bright-red text-white rounded-full font-medium px-6 py-2 text-sm animate-fade-up ">
              0{card.id}
          </label>
          <h3 className="lg:text-lg font-bold text-primary-dark-blue animate-fade-left">{card.title}</h3>
        </header>
        <section className=" pl-14 lg:pl-20 animate-fade-left">
            <Parragraph className="lg:w-[28rem] pl-4 lg:pl-0">
                {card.description}
            </Parragraph>
        </section>
    </article>
  )
}
