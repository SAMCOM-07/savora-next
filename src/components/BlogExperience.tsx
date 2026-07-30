import { ArrowUpRight, Clock3 } from "lucide-react";
import { IMAGES } from "../app/lib/data";
import { Reveal } from "./ui/Reveal";
import { ImageFrame } from "./ImageFrame";

const posts = [
  {
    title: "The quiet art of handmade pasta",
    category: "Craft",
    date: "August 08, 2026",
    time: "6 min read",
    image: IMAGES.pasta,
    excerpt:
      "Inside the ritual, restraint and patience behind Chef Laurent’s saffron tagliolini.",
  },
  {
    title: "What makes a wine pairing unforgettable?",
    category: "Cellar Notes",
    date: "July 24, 2026",
    time: "5 min read",
    image: IMAGES.interior,
    excerpt:
      "Our sommelier on listening to a dish before choosing what belongs beside it.",
  },
  {
    title: "The arrival of white truffle season",
    category: "Seasonal Menu",
    date: "July 02, 2026",
    time: "4 min read",
    image: IMAGES.dish2,
    excerpt:
      "A first look at the rare ingredient inspiring this autumn’s tasting menu.",
  },
  {
    title: "How to build a table for celebration",
    category: "Entertaining",
    date: "June 18, 2026",
    time: "7 min read",
    image: IMAGES.event,
    excerpt:
      "The Savora guide to an evening that feels effortless, personal and complete.",
  },
];

export function BlogExperience() {
  return (
    <section className="container py-20 lg:py-28">
      <div className="grid gap-7 lg:grid-cols-2">
        <Reveal className="lg:row-span-2">
          <article className="group h-full overflow-hidden rounded-[2rem] border border-white/8 bg-ink-card">
            <div className="h-72 overflow-hidden sm:h-96">
              <ImageFrame
                src={posts[0].image}
                alt={posts[0].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-luxe text-gold">
                {posts[0].category}
              </p>
              <h2 className="mt-4 font-heading text-3xl text-cream">
                {posts[0].title}
              </h2>
              <p className="mt-4 leading-relaxed text-beige-muted">
                {posts[0].excerpt}
              </p>
              <div className="mt-7 flex items-center justify-between text-sm text-beige-muted">
                <span>{posts[0].date}</span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4" />
                  {posts[0].time}
                </span>
              </div>
              <button className="mt-7 inline-flex items-center gap-2 text-sm text-cream transition-colors hover:text-gold">
                Read the story <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        </Reveal>
        <div className="space-y-7">
          {posts.slice(1).map((post, index) => (
            <Reveal key={post.title} delay={index * 0.1}>
              <article className="group grid gap-5 rounded-3xl border border-white/8 bg-ink-card p-4 sm:grid-cols-[11rem_1fr]">
                <ImageFrame
                  src={post.image}
                  alt={post.title}
                  className="h-44 w-full rounded-2xl object-cover sm:h-full"
                />
                <div className="py-2 pr-3">
                  <p className="text-xs uppercase tracking-luxe text-gold">
                    {post.category}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl text-cream">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-beige-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-beige-muted">
                    <span>{post.date}</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
