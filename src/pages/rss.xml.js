import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Crypto Journal',
    description: "A network engineer's crypto journal. ETH, bots, validators — what I built, what I tested, and what the numbers said.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/posts/*.md')),
    customData: `<language>en</language>`,
  });
}