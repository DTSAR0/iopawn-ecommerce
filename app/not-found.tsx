"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404 – Page not found</h1>
      <a href="/" className="text-blue-500 underline">
        ← Go back home
      </a>
    </div>
  );
}