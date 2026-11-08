---
layout: /src/layouts/MarkdownPostLayout.astro
title: 'Genesis Block: Why This Journal Exists'
author: chonk
description: "I'm chonk. This is my lab notebook: rules written before the trade, backtests, paper runs, and the losses published next to the wins."
pubDate: 2026-11-08
tags: ['genesis', 'process', 'risk-management', 'backtesting', 'transparency']
languages: []
---

I'm chonk. I run a validator, I own a crappy bot, and I keep a journal so my future self can't lie about the past one.

This isn't a signals blog. I'm not here to call the next 100x, and I'm not selling a course. It's an engineering log: the rule I wrote down before the trade, the test I ran, the number that came out, and the post-mortem when it went wrong.

Why publish it? Because my own notes lie to me. A trade I remember as "unlucky" was usually a rule I broke. Writing it where other people can read it makes it harder to rewrite history afterwards.

## What this journal covers

Four categories, no more. If a post does not fit one of them, it does not get published.

| Category | What goes here |
| --- | --- |
| **Execution Logs & Backtests** | Pre-registered rules, backtest methodology and results, forward-test logs, and post-mortems. Wins and losses, with sample size stated. |
| **Automation & Infrastructure** | Schedulers, monitors, deployment, failure modes, and recovery. How the system stays up — and what happens when it does not. |
| **Self-Custody & Key Hygiene** | Wallets, backups, seed handling, and operational security. Practical, boring, and repeatable. Never keys, seeds, or addresses that hold funds. |
| **Macro & Asset Accumulation** | Slow accumulation, position sizing, stables and powder, and the macro context that changes — or does not change — the plan. |

## The rules I actually follow

### 1. Rules first, trades second

Every strategy starts as text: entry, exit, size, invalidation, max hold time. If any of those is missing, the strategy isn't ready — it's a hunch with a spreadsheet.

Change a rule after a loss and it's not a refinement. It's a new strategy, and it restarts its test from zero.

### 2. Backtest, then paper, then — maybe — live

A backtest is a filter, not a promise. It answers one question: did this rule lose money in the past, and how badly?

Survive the backtest, you earn a forward paper test — fixed number of trades, kill criteria set in advance. Survive paper, you earn a small live test. Nothing skips a stage because the market looks urgent. Urgency is usually the signal to wait.

### 3. Expectancy, not anecdotes

One win proves nothing. One loss disproves nothing.

What matters is expectancy over a stated sample: trades, win rate, average win, average loss, profit factor, max drawdown — and how much of the total came from a single trade. If one trade did all the work, that goes in the first paragraph, not a footnote.

### 4. Risk is a number, not a feeling

Size is decided before entry. So is the exit that proves the idea wrong.

Leverage multiplies mistakes faster than skill, so the default here is spot only. Any exception gets its own post, its own justification, and its own kill criteria. It will not appear quietly inside another strategy.

### 5. The boring parts get published too

Every execution post states:

- the rule, exactly as run;
- the data window and the fees assumed;
- the trades, including the ones that stopped out;
- what changed, when, and why — as a new version, never a silent edit.

What you will never see here: live signals, account balances, private keys, seed phrases, or anything that lets a reader copy a position without understanding the risk. This is a log, not advice. Nothing here is financial advice.

## How to read a post

Each execution post answers five things, in order:

1. **The hypothesis** — one sentence.
2. **The rule** — entry, exit, size, invalidation.
3. **The test** — backtest window, forward-test length, kill criteria.
4. **The result** — numbers first, interpretation second.
5. **The decision** — continue, change (new version), or kill.

If a post doesn't answer all five, it's a draft, not a conclusion.

## What comes next

The next posts work through the four categories: a backtest template and a first execution log, the automation that runs the checks and what it does on failure, a self-custody checklist that can be followed without improvising, and an accumulation plan that survives a rally and a drawdown.

No hype. No urgency. Just rules, runs, and results — recorded while they happen, not reconstructed after.

*— chonk, 8 November 2026*
