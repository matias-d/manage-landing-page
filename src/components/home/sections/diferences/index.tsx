import Parragraph from "@/components/ui/parragraph";
import Title from "@/components/ui/title";
import Card from "./card";

export default function Diferences() {
  return (
    <section className="lg:px-36 px-4 flex flex-col lg:flex-row w-full item-start justify-between lg:mb-32  relative pt-24 lg:pt-0 mb-2">
        <section className="flex-1 flex flex-col items-center lg:items-start gap-y-4 lg:gap-y-6 mb-12 lg:mb-0">
            <Title>What´s different about Manage?</Title>
            <Parragraph className="text-center w-80 lg:text-start lg:w-auto">Manage provides all the funcionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</Parragraph>
        </section>
        <section className="flex-1 space-y-10">
            <Card />
            <Card />
            <Card />
        </section>
        <div className="bg-pattern-desktop bg-no-repeat bg-bottom-4 w-full h-full absolute top-56 -left-[38rem] hidden lg:block"></div>
    </section>
  )
}
