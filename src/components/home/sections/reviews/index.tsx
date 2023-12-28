import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import { Card } from "./card";

export default function Reviews() {
  return (
    <section className="w-full flex flex-col gap-y-16 items-center py-12  ">
        <Title>What they´ve said</Title>
        <section className="flex w-full justify-between items-center">
            <Card />
            <Card />
            <Card />
        </section>
        <Button className="py-3 text-sm">
            Get Started
        </Button>
      <div className=" ">

      </div>
    </section>
  )
}
