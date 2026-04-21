---
layout: layouts/base.njk
title: Celtic Source Library
subtitle: A bilingual encyclopaedia of Celtic myth, tradition, and scholarship
lang: en
lang_alt_url: /cy/
description: A growing library of Q&A pages covering Celtic mythology, tradition, and scholarship — available in English and Welsh.
---

<h1>{{ title }}</h1>
<p class="subtitle"><em>{{ subtitle }}</em></p>

<hr>

<p>Welcome to the Celtic Source Library — a growing encyclopaedia of pages covering Celtic mythology, medieval tradition, and related scholarship. Each entry is built around questions that readers actually ask, answered with reference to primary sources and academic research.</p>

<p>The library is bilingual: every page is available in both English and Welsh. Use the language toggle in the header to switch between the two.</p>

<h2>Browse by Topic</h2>

<ul class="cluster-list">
  {% for cluster in clusters %}
  <li><a href="/en/{{ cluster.id }}/">{{ cluster.name_en }}</a></li>
  {% endfor %}
</ul>

<h2>All Pages</h2>

<ul class="cluster-list">
  {% for entry in collections.all %}
    {% if entry.data.type == "entity-page" and entry.data.lang == "en" %}
    <li><a href="{{ entry.url }}">{{ entry.data.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
