import Link from "next/link";
export default function NotFound() {
  return (
    <main className="error-page">
      <p className="eyebrow">404 / OFF THE MAP</p>
      <h1>Let’s find our way back.</h1>
      <p>This page doesn’t exist. There’s plenty to explore at home.</p>
      <Link className="button primary" href="/">
        Return to portfolio ↗
      </Link>
    </main>
  );
}
