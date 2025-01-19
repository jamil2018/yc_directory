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
      author: { _id: 2, name: "John Doe" },
      description: "This is a pitch description",
      category: "Technology",
      title: "Pitch Title",
      image:
        "https://media.istockphoto.com/id/543190650/photo/irobot-touch.jpg?s=1024x1024&w=is&k=20&c=9Qr5RamL2GyaWheOwwr5iRq2DXqkrCeEV_3PJaE1d6s=",
      views: 100,
    },
    {
      _id: 2,
      _createdAt: new Date("2021-10-01"),
      author: { _id: 3, name: "Jane Doe" },
      description: "This is another pitch description",
      category: "Health",
      title: "Health Pitch",
      image:
        "https://media.istockphoto.com/id/1998660059/photo/ai-artificial-intelligence-security-sentinel-password-cyber-security-ransomware-email.jpg?s=1024x1024&w=is&k=20&c=c2OXv-HBy9LxISuqw1CRv5e6oHNIOmAJ00iaDjOPCmE=",
      views: 200,
    },
    {
      _id: 3,
      _createdAt: new Date("2021-11-01"),
      author: { _id: 4, name: "Marcus Watford" },
      description: "This is yet another pitch description",
      category: "Education",
      title: "Education Pitch",
      image:
        "https://media.istockphoto.com/id/1455925649/photo/inside-the-quantum-lab-wide-center-shot-v01.jpg?s=1024x1024&w=is&k=20&c=NS91wmj5tvpnQniphOkiPdspNtZZvVbb-518BydDEsw=",
      views: 300,
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
                <li key={post._id} className="startup-card group">
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
