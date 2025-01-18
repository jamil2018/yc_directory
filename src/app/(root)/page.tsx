import React from "react";
import SearchForm from "../components/header/search/SearchForm";
import StartupCard from "../components/ui/cards/StartupCard";
import { StartupCardType } from "@/types/data/Posts";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts: StartupCardType[] = [
    {
      _id: 1,
      _createdAt: new Date("2021-09-01"),
      author: { _id: 2 },
      description: "This is a pitch description",
      category: "Technology",
      title: "Pitch Title",
      image: "https://via.placeholder.com/150",
    },
    {
      _id: 2,
      _createdAt: new Date("2021-10-01"),
      author: { _id: 3 },
      description: "This is another pitch description",
      category: "Health",
      title: "Health Pitch",
      image: "https://via.placeholder.com/150",
    },
    {
      _id: 3,
      _createdAt: new Date("2021-11-01"),
      author: { _id: 4 },
      description: "This is yet another pitch description",
      category: "Education",
      title: "Education Pitch",
      image: "https://via.placeholder.com/150",
    },
  ];
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

        {/* all pitches section */}

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : "Trending Pitches"}
          </p>
          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post: StartupCardType) => (
                <li key={post._id}>
                  <StartupCard key={post._id} post={post} />
                </li>
              ))
            ) : (
              <li>
                <p>No pitches found</p>
              </li>
            )}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
