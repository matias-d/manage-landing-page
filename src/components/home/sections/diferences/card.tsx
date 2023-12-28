import Parragraph from "@/components/ui/parragraph";

export default function Card() {
  return (
    <article className="">
        <header className="flex items-center gap-x-2 lg:gap-x-4 bg-neutral-very-pale-red lg:bg-transparent">
          <label className="bg-primary-bright-red text-white rounded-full font-medium px-6 py-2 text-sm">
              01
          </label>
          <h3 className="lg:text-lg font-bold text-primary-dark-blue ">Track company-wide progress</h3>
        </header>
        <main className=" pl-14 lg:pl-20">
            <Parragraph className="lg:w-[28rem] pl-4 lg:pl-0">
                See how your day-to-day tasks fit into the wider vision.
                Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
            </Parragraph>
        </main>
    </article>
  )
}
