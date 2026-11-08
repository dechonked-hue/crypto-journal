import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Crypto Journal',
    description: 'A developer-first crypto journal: programmatic execution, backtests, automation, self-custody, and accumulation — with numbers, not hype.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/posts/*.md')),
    customData: `<language>en</language>`,
  });
}