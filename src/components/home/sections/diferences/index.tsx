import Parragraph from "@/components/ui/parragraph";
import Title from "@/components/ui/title";
import Card from "./card";

export default function Diferences() {
  return (
    <section className="px-36 flex w-full item-start justify-between mb-32 bg-pattern-mobile bg-left-bottom bg-cover">
        <section className="flex-1 space-y-6">
            <Title>What´s different about Manage?</Title>
            <Parragraph>Manage provides all the funcionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</Parragraph>
        </section>
        <section className="flex-1 space-y-10">
            <Card />
            <Card />
            <Card />
        </section>
    </section>
  )
}
