---
layout: layouts/base.njk
lang: en
title: "Celtic Source Library"
description: "A citation-backed Q & A Library of Celtic mythology, history, and culture, written by Dr Gwilym Morus-Baird."
templateEngineOverride: njk,md
---

# Celtic Source Library

A reference library of answers to commonly asked questions about Celtic mythology, history, and culture, written by Dr Gwilym Morus-Baird. Each entry is a structured question-and-answer drawn from primary sources and contemporary scholarship.

## Browse by topic

The library is organised into categories that will appear here as their first entries go live. Each category lists the entries it contains.

<ul class="cluster-list">
{%- for cluster in collections.activeClusters -%}
  <li><a href="/en/{{ cluster.id }}/">{{ cluster.name_en }}</a></li>
{%- endfor -%}
</ul>

The library is in active development. If you spot an error, a misattributed quote, a wrong page number, a misreading of a source, please <a href="https://celticsource.online/Contact" target="_blank" rel="noopener noreferrer">tell us</a>.

## Related work

- The wider <a href="https://celticsource.online" target="_blank" rel="noopener noreferrer">Celtic Source</a> project, including video lectures, the community forum, and other resources.
