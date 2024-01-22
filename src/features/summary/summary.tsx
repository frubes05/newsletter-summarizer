import SummaryForm from "@/features/summary/summary-form/summary-form";

export default function Summary() {
  return (
    <section className="flex justify-center items-center flex-col gap-12 pt-36 pb-24 bg-primary-30 px-4 lg:px-0">
      <h1 className="text-white text-6xl">Summarize a report!</h1>
      <p className="text-white opacity-75">
        Use this tool to summarize the latest news and share them with your
        friends and family!
      </p>
      <SummaryForm />
    </section>
  );
}
