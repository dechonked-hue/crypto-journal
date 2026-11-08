---
layout: /src/layouts/MarkdownPostLayout.astro
title: 'Genesis Block: Why This Journal Exists'
author: chonk
description: 'A developer-first crypto journal built on programmatic execution, pre-registered rules, and transparent results — no hype, no signals, no shortcuts.'
pubDate: 2026-11-08
tags: ['genesis', 'process', 'risk-management', 'backtesting', 'transparency']
languages: []
---

This is not a trading-signals blog. It is not a price-prediction blog. It is an engineering log.

I build systems that touch real money, so I write like an engineer who will be audited by their future self: state the rule before the trade, record the result after it, and publish the miss as clearly as the win.

If an idea cannot be written down as a rule, tested on historical data, and run forward without discretionary overrides, it does not belong in a live portfolio. It belongs in a notebook, clearly labelled as untested.

## What this journal covers

Four categories, no more. If a post does not fit one of them, it does not get published.

| Category | What goes here |
| --- | --- |
| **Execution Logs & Backtests** | Pre-registered rules, backtest methodology and results, forward-test logs, and post-mortems. Wins and losses, with sample size stated. |
| **Automation & Infrastructure** | Schedulers, monitors, deployment, failure modes, and recovery. How the system stays up — and what happens when it does not. |
| **Self-Custody & Key Hygiene** | Wallets, backups, seed handling, and operational security. Practical, boring, and repeatable. Never keys, seeds, or addresses that hold funds. |
| **Macro & Asset Accumulation** | Slow accumulation, position sizing, stables and powder, and the macro context that changes — or does not change — the plan. |

## Operating principles

### 1. Rules first, trades second

Every strategy starts as text: entry, exit, position size, invalidation, and maximum holding time. If any of those is missing, the strategy is not ready.

A rule that changes after a loss is not a refinement. It is a new strategy, and it restarts its test from zero.

### 2. Backtest, then paper, then — maybe — live

A backtest is a filter, not a promise. It answers one question: *did this rule lose money in the past, and how badly, when it did?*

A rule that survives a backtest earns a forward paper test, with a fixed number of trades and pre-set kill criteria. A rule that survives paper earns a small live test. Nothing skips a stage because the market looks urgent. Urgency is usually the signal to wait.

### 3. Report expectancy, not anecdotes

A single winning trade proves nothing. A single losing trade disproves nothing either.

What matters is expectancy over a stated sample: number of trades, win rate, average win, average loss, profit factor, maximum drawdown, and the largest single trade's share of total profit. If one trade dominates the result, say so in the first paragraph, not in a footnote.

### 4. Risk is a number, not a feeling

Position size is decided before entry. So is the exit that proves the idea wrong.

Leverage multiplies mistakes faster than it multiplies skill, so the default here is spot only. Any exception would need its own post, its own justification, and its own kill criteria — it will not appear quietly inside another strategy.

### 5. Transparency includes the boring parts

This journal will publish:

- the rule, exactly as run;
- the data window and the fees assumed;
- the trades, including the ones that stopped out;
- what changed, when, and why — as a new version, never as a silent edit.

It will not publish live signals, account balances, private keys, seed phrases, or anything that would let a reader copy a position without understanding the risk. This is a log, not advice. Nothing here is financial advice.

## How to read this journal

Each execution post should be readable on its own. It will state:

1. **The hypothesis** — in one sentence.
2. **The rule** — entry, exit, size, invalidation.
3. **The test** — backtest window, forward-test length, kill criteria.
4. **The result** — numbers first, interpretation second.
5. **The decision** — continue, change (with a new version), or kill.

If a post does not answer all five, treat it as a draft, not a conclusion.

## What comes next

The next posts will work through the four categories in turn: a backtest template and a first execution log, the automation that runs the checks and what it does on failure, a self-custody checklist that can be followed without improvisation, and an accumulation plan that survives both a rally and a drawdown.

No hype. No urgency. Just rules, runs, and results — recorded while they happen, not reconstructed afterwards.

*— Genesis Block, 8 November 2026*
