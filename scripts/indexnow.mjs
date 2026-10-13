// Submits every sitemap URL to IndexNow so Bing/Yandex/etc. pick up changes faster.
// Not run automatically. Usage:
//   node scripts/indexnow.mjs
//
// Plain ESM (no ts-node/tsx) — the project's devDependencies deliberately stay
// minimal, and Node 24's native fetch/ESM support covers everything this needs.

const SITE_URL = "https://rachmad.id";
const INDEXNOW_KEY = "caf6466d6c085df983f03194e18205a5";

async function getSitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

async function submitToIndexNow(urlList) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  if (!res.ok) {
    throw new Error(`IndexNow submission failed: ${res.status} ${res.statusText}`);
  }

  console.log(`Submitted ${urlList.length} URL(s) to IndexNow.`);
}

const urls = await getSitemapUrls();
await submitToIndexNow(urls);
