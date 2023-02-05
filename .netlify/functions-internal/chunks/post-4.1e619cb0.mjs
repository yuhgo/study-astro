const id = "post-4.md";
const collection = "posts";
const slug = "post-4";
const body = "\r\nThis post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.\r\n";
const data = {title:"My Fourth Blog Post",pubDate:"2022-08-08",description:"This post will show up on its own!",author:"Astro Learner",image:{url:"https:\u002F\u002Fdocs.astro.build\u002Fdefault-og-image.png",alt:"The word “astro” against an illustration of planets and stars."},tags:["astro","successes"]};
const _internal = {
	filePath: "D:/Develop/astro/study-astro/src/content/posts/post-4.md",
	rawData: "\r\nlayout: ../../layouts/MarkdownPostLayout.astro\r\ntitle: My Fourth Blog Post\r\nauthor: Astro Learner\r\ndescription: \"This post will show up on its own!\"\r\nimage:\r\n  url: \"https://docs.astro.build/default-og-image.png\"\r\n  alt: \"The word “astro” against an illustration of planets and stars.\"\r\npubDate: \"2022-08-08\"\r\ntags: [\"astro\", \"successes\"]\r",
};

export { _internal, body, collection, data, id, slug };
