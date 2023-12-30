import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import ReviewsList from "./reviews-list";


export default function Reviews() {
  return (
    <section id="reviews" className="w-full flex flex-col gap-y-16 items-center py-12 mb-24 ">
        <Title className="animate-fade-up">What they´ve said</Title>
        <ReviewsList />
        <Button className="py-3 text-sm animate-fade-up">
            Get Started
        </Button>
    </section>
  )
}
