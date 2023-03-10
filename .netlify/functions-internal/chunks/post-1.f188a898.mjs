const id = "post-1.md";
const collection = "posts";
const slug = "post-1";
const body = "\r\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\r\n\r\n## What I've accomplished\r\n\r\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\r\n\r\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\r\n\r\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\r\n\r\n## What's next\r\n\r\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\r\n";
const data = {title:"My First Blog Post",pubDate:"2022-07-01",description:"This is the first post of my new Astro blog.",author:"Astro Learner",image:{url:"https:\u002F\u002Fastro.build\u002Fassets\u002Fblog\u002Fastro-1-release-update\u002Fcover.jpeg",alt:"The Astro logo with the word One."},tags:["astro","blogging","learning in public"]};
const _internal = {
	filePath: "D:/Develop/astro/study-astro/src/content/posts/post-1.md",
	rawData: "\r\nlayout: ../../layouts/MarkdownPostLayout.astro\r\ntitle: \"My First Blog Post\"\r\npubDate: \"2022-07-01\"\r\ndescription: \"This is the first post of my new Astro blog.\"\r\nauthor: \"Astro Learner\"\r\nimage:\r\n  url: \"https://astro.build/assets/blog/astro-1-release-update/cover.jpeg\"\r\n  alt: \"The Astro logo with the word One.\"\r\ntags: [\"astro\", \"blogging\", \"learning in public\"]\r",
};

export { _internal, body, collection, data, id, slug };
