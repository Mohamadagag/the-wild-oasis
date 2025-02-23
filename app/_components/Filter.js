"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchPrams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchPrams.get("capacity") ?? "all";

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchPrams);

    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </Button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;8 guests
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        9&mdash;12 guests
      </Button>
    </div>
  );
};

const Button = ({ filter, handleFilter, activeFilter, children }) => {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
};

export default Filter;
