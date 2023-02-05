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
const html = "<p>This post should show up with my other blog posts, because <code>Astro.glob()</code> is returning a list of all my posts in order to create my list.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Fourth Blog Post","author":"Astro Learner","description":"This post will show up on its own!","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08","tags":["astro","successes"]};
				const file = "D:/Develop/astro/study-astro/src/content/posts/post-4.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.\r\n";
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
