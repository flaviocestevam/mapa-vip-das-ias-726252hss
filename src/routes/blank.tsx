import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blank")({
  component: BlankPage,
  head: () => ({
    meta: [{ title: "Blank" }, { name: "description", content: "Blank page" }],
  }),
});

function BlankPage() {
  return <main className="min-h-screen" />;
}
