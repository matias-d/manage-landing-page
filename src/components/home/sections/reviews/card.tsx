import Parragraph from "@/components/ui/parragraph";
import Image from "next/image";

export function Card() {
  return (
    <article className="flex flex-col gap-y-4 items-center">
        <Image alt="lol" src='/images/avatar-ali.png' width='60' height='60' className="rounded-full object-cover"/>
        <h4 className="font-bold text-primary-dark-blue">Anishi Li</h4>
        <Parragraph className="text-center">We have been able to cancel so many other subscriptions since using Manager. There is no more corss-channel confusion and everyone is much more focused.</Parragraph>
    </article>
  )
}
