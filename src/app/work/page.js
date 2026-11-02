import PageHero from "@/components/PageHero";
import WorkGrid from "@/components/work/WorkGrid";
import ShowreelButton from "@/components/ShowreelButton";

export const metadata = {
  title: "Work",
  description: "Feature films, advertisements, short films and music videos made by Ilaaka Studios.",
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Films from the hood"
        aside={<ShowreelButton className="text-ink" />}
      >
        <p>
          Campaigns for brands, videos for artists and stories of our own. Filter by format, or hover a film to see it
          move.
        </p>
      </PageHero>
      <WorkGrid />
    </main>
  );
}
