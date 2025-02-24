'use client'
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Возникла ошибка
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Попробуйте зайти на эту страницу позже
        </p>
        <p className="italic text-pink-800">{error.message}</p>
      </div>
    </div>
  );
}