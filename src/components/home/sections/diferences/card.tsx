import Parragraph from "@/components/ui/parragraph";

export default function Card() {
  return (
    <article className="flex items-start gap-x-6">
        <label className="bg-primary-bright-red text-white rounded-full font-medium px-6 py-2 text-sm">
            01
        </label>
        <main className="space-y-3">
            <h3 className="text-lg font-bold text-primary-dark-blue">Track company-wide progress</h3>
            <Parragraph className="w-[28rem]">
                See how your day-to-day tasks fit into the wider vision.
                Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
            </Parragraph>
        </main>
    </article>
  )
}
