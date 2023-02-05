import { l as createVNode, F as Fragment } from './astro.7eb84d48.mjs';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout.fba0ca6a.mjs';
import 'path-to-regexp';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'slash';
import 'html-escaper';
import './pages/all.2e426e80.mjs';
import '@astrojs/rss';
/* empty css                          *//* empty css                                                                  *//* empty css                                                               *//* empty css                                                               *//* empty css                           *//* empty css                                                                   *//* empty css                          *//* empty css                                                                           */
const html = "<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"Astro Learner","description":"After learning some Astro, I couldn't stop!","image":{"url":"https://astro.build/assets/blog/astro-showcase/astro-showcase-screenshot.jpg","alt":"Thumbnails of websites from the Astro Showcase site."},"pubDate":"2022-07-08","tags":["astro","blogging","learning in public","successes"]};
				const file = "D:/Develop/astro/study-astro/src/content/posts/post-2.md";
				const url = undefined;
				function rawContent() {
					return "\r\nAfter a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$MarkdownPostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
