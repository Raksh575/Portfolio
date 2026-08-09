import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, BookOpen, ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { BlogCard } from "../components/BlogCard";
import { blogData } from "../data/portfolioData";
import type { BlogPost } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI & ML", "Software Development", "Automation"];

  const featuredPost = blogData.find((post: BlogPost) => post.featured);

  const filteredPosts = blogData.filter((post: BlogPost) => {
    return selectedCategory === "All" || post.category === selectedCategory;
  });

  return (
    <PageTransition>
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full text-left">
        <SectionHeading title="Technical Blog" subtitle="Thoughts & Deep Dives" />

        {/* Featured Post Highlight (Only shown when filter is "All") */}
        {selectedCategory === "All" && featuredPost && (
          <div className="mb-16">
            <h3 className="text-xs uppercase tracking-widest text-neutral-gray font-bold mb-6 flex items-center gap-2">
              <BookOpen size={14} className="text-brown-accent" />
              Featured Article
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-sand-300/60 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 bg-sand-150 flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-sand-200 bg-[#EFECE0]">
                <div className="w-24 h-24 rounded-2xl bg-white border border-sand-300 flex items-center justify-center text-brown-accent shadow-xs">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brown-accent bg-sand-100 border border-sand-300 px-2.5 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-3 text-[10px] text-neutral-gray">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>

                  <Link to={`/blog/${featuredPost.id}`} className="block group">
                    <h4 className="text-xl md:text-2xl font-bold text-charcoal tracking-tight leading-snug group-hover:text-brown-accent transition-colors">
                      {featuredPost.title}
                    </h4>
                  </Link>

                  <p className="text-sm text-charcoal-muted leading-relaxed font-medium">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="text-xs font-bold text-brown-accent hover:text-brown-accent-hover transition-colors flex items-center gap-1.5 mt-8 group/link w-max"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-sand-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-brown-accent text-white shadow-xs"
                  : "bg-transparent border border-sand-300 text-charcoal-muted hover:bg-sand-200"
              }`}
            >
              {cat === "All" ? "All Articles" : cat}
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredPosts.map((post: BlogPost, index: number) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-sand-300/40 rounded-3xl">
            <p className="text-sm text-neutral-gray font-medium">No articles found in this category.</p>
          </div>
        )}
      </section>
    </PageTransition>
  );
};
export default Blog;
