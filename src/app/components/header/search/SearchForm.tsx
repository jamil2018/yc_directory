import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2 items-center">
        {query && <SearchFormReset />}
        <Button type="submit" className="search-btn text-white">
          <Search />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
