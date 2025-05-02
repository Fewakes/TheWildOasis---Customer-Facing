"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") || "all"; //Get active filter

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  function getButtonClasses(filter) {
    //Checks if activeFilter is the current filter and applies the effect
    const isActive = activeFilter === filter;
    return `px-5 py-2 hover:bg-primary-700 transition duration-300 ease-in-out ${
      isActive ? "bg-primary-700 text-white" : ""
    }`;
  }

  const filters = [
    { value: "all", label: "All cabins" },
    { value: "small", label: "1—3 guests" },
    { value: "medium", label: "4—7 guests" },
    { value: "large", label: "8—12 guests" },
  ];

  return (
    <div className="border border-primary-800 flex justify-end">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          className={getButtonClasses(value)}
          onClick={() => handleFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
