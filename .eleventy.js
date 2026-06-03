module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("_shared-assets");
  // Pass through entry-folder image assets (e.g. Creative Block JPEGs)
  eleventyConfig.addPassthroughCopy("content/**/*.jpg");
  eleventyConfig.addPassthroughCopy("content/**/*.jpeg");

  // ---- YouTube video embed shortcode -----------------------------------
  // Usage in markdown:
  //   {% videoEmbed "dQw4w9WgXcQ", "What is Celtic mythology?" %}
  // Args:
  //   1. id     — required. The YouTube video ID (the bit after v= in the URL).
  //   2. title  — optional. Becomes the iframe title attribute (a11y).
  // Renders a responsive 16:9 wrapper around a lazy-loaded nocookie embed.
  eleventyConfig.addShortcode("videoEmbed", function (id, title) {
    const safeTitle = (title || "YouTube video").replace(/"/g, "&quot;");
    return `<figure class="video-embed">
  <div class="video-embed__frame">
    <iframe src="https://www.youtube-nocookie.com/embed/${id}"
            title="${safeTitle}"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
  </div>
</figure>`;
  });

  // ---- activeClusters collection ----------------------------------------
  // Returns the subset of clusters.json that has at least one published entry.
  // Used by both the homepage cluster list and the cluster-hubs template so
  // that empty clusters stay hidden until their first entry lands.
  eleventyConfig.addCollection("activeClusters", function (collectionApi) {
    const clusters = require("./_data/clusters.json");
    const usedIds = new Set();
    collectionApi.getAll().forEach((item) => {
      if (item.data.cluster && item.data.lang === "en") {
        usedIds.add(item.data.cluster);
      }
    });
    return clusters.filter((c) => usedIds.has(c.id));
  });

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes",
      data: "../_data",
    },
  };
};
