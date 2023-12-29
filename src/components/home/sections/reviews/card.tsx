import Parragraph from "@/components/ui/parragraph";
import Image from "next/image";

interface ReviewI {
  name : string
  review : string
  id : number
  avatar : string
}

interface CardProps {
  review : ReviewI
}


export default function Card({ review } : CardProps) {
  return (
    <article className="flex flex-col gap-y-4 items-center">
        <Image alt={`photo of ${review.name}`} src={review.avatar} width='60' height='60' className="rounded-full object-cover"/>
        <h4 className="font-bold text-primary-dark-blue">{review.name}</h4>
        <Parragraph className="text-center w-80 lg:w-auto">{review.review}</Parragraph>
    </article>
  )
}
