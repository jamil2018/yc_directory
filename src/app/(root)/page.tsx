import React from "react";
import SearchForm from "../components/header/search/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  return (
    <>
      <div>
        <section className="pink_container">
          <h1 className="heading">
            Pitch your ideas, <br /> Connect with entrepreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions.
          </p>
          <SearchForm query={query} />
        </section>
      </div>
    </>
  );
};

export default Home;
