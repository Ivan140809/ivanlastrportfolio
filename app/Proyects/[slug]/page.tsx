type Props = {
  params: { slug: string };
};

export default function ProjectDetail({ params }: Props) {
  return (
    <main className="min-h-screen px-6 py-24">
      <h1 className="text-4xl font-bold capitalize">
        {params.slug.replace("-", " ")}
      </h1>

      <p className="mt-4 text-white/70">
        Detailed write-up for this project.
      </p>
    </main>
  );
}
