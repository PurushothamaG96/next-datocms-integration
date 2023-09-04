"use client"
import { useRouter } from "next/navigation";

export default function Navbar({ draft }: { draft: boolean }) {
  const router = useRouter();

  async function handleDraftMode() {
    console.log("triggering")
    if (draft) {
      console.log("coming here");
      router.push("/api/disable-draft");
      router.refresh()
    } else {
      router.push(`/api/draft?secret=MY_SECRET_TOKEN`);
      router.refresh()
    }
  }

  return (
    <div className="">
      <h1>NavBar</h1>
      <button
        type="button"
        className="bg-slate-800 text-white p-3 m-2"
        onClick={handleDraftMode}
      >
        {draft ? "Disable Draft Mode" : "Enable Draft Mode"}
      </button>
    </div>
  );
}
