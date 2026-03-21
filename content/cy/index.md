---
layout: layouts/base.njk
title: Llyfrgell Celtic Source
subtitle: Gwyddoniadur dwyieithog o fytholeg, traddodiad ac ysgolheictod Celtaidd
lang: cy
lang_alt_url: /en/
description: Llyfrgell gynyddol o dudalennau cwestiwn ac ateb yn ymdrin â mytholeg Geltaidd, traddodiad a ysgolheictod — ar gael yn Gymraeg a Saesneg.
---

<h1>{{ title }}</h1>
<p class="subtitle"><em>{{ subtitle }}</em></p>

<hr>

<p>Croeso i Lyfrgell Celtic Source — gwyddoniadur cynyddol o dudalennau yn ymdrin â mytholeg Geltaidd, traddodiad canoloesol ac ysgolheictod cysylltiedig. Mae pob cofnod wedi'i adeiladu o amgylch cwestiynau y mae darllenwyr yn eu gofyn, wedi'u hateb gyda chyfeiriad at ffynonellau cynradd ac ymchwil academaidd.</p>

<p>Mae'r llyfrgell yn ddwyieithog: mae pob tudalen ar gael yn Gymraeg a Saesneg. Defnyddiwch y dewisydd iaith yn y pennawd i newid rhwng y ddwy.</p>

<h2>Clystyrau Pwnc</h2>

<ul class="cluster-list">
  {% for cluster in clusters %}
  <li><a href="/cy/{{ cluster.id }}/">{{ cluster.name_cy }}</a></li>
  {% endfor %}
</ul>
