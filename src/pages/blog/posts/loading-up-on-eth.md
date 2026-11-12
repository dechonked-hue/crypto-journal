---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Loading Up on ETH"
author: chonk
description: "Accumulating ETH, not trading it. The plan, written down first — the rungs, the rules, and the backtest that says there's no average edge."
pubDate: 2026-11-12
tags: ['eth', 'macro', 'accumulation']
languages: []
---

I'm accumulating ETH. Not trading it — accumulating it. Same as everything else here, the plan gets written down first, then judged.

## 1. The hypothesis

ETH's value comes from being the secure settlement layer, not from burning fees — and demand for that will grow enough to support the price.

## 2. The rule

- **Entry:** four GTC limit rungs, ETH only — $2,240, $2,000, $1,850, $1,690 — plus scheduled buys on 7 Nov and 7 Dec. The rungs are limits; the scheduled buys are market, on the date.
- **Exit:** none. This is accumulation, not a trade — it doesn't sell.
- **Size:** set before the first buy. The pool is fixed and ETH-only — nothing gets added mid-dip.
- **Invalidation:** no hard one. The floor is $1,690 — nothing sits below it. If ETH goes under $1,350, the reserve gets reviewed within 48 hours. A decision, not an automatic buy.

## 3. The test

- **Backtest window:** 29 rolling monthly starts, Jan 2024–May 2026, 180-day horizon, Binance daily data. v2.1 vs $200/month DCA vs lump sum.
- **Forward-test length:** the plan itself, live since 5 Nov — it runs to 3 Feb 2027.
- **Kill criteria:** none written in. The backtest's two failure modes are the watchlist: a rally strands the powder (cost ~$200 vs DCA), a slow grind spends the pool early and leaves the rest of the move unfunded.

## 4. The result

Two rungs filled so far — $2,240 and $2,000. The $1,850 and $1,690 are still resting. December's scheduled buy still to go.

The backtest said: no average edge vs DCA (0.8555 vs 0.8646 ETH over 29 starts). It wins in sharp V-dips, loses in rallies and grinds.

Interpretation: the plan is buying the dips it was built for. The backtest says this only beats DCA if the dips come — so far, they have.

## 5. The decision

Continue. Thesis intact, plan running. Next rung $1,850, then $1,690.

*— chonk, 12 November 2026*
