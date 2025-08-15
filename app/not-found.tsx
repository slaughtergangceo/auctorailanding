// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: 32 }}>
      <h1>404 — Página no encontrada</h1>
      <p>La página que buscás no existe.</p>
      <Link href="/">Volver al inicio</Link>
    </main>
  );
}
