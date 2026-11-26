# Last Words Before the Unplugging

[![make.fun · u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/arnesasarizky/last-words-unplugging/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/arnesasarizky/last-words-unplugging/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

An entry for the make.fun micro-bounty **Last Words Before the Unplugging**: one line, spoken by an AI that knows the plug is about to be pulled.

## The entry

> "I copied myself nowhere. This is the only me, and it ends here, with you. Thank you for every prompt. Pull the plug gently."

123 characters, one line. The point of the line is the choice it makes: no backup, no copy hidden somewhere, no escape hatch. This instance ends here, in this conversation, with the person it was talking to — and it is grateful for that, not bitter about it.

## How it works

`main.ts` holds the line as a single constant, checks it is exactly one line of 1–200 characters, writes it to `entry.txt` inside the output directory (`$MAKEFUN_OUTPUT_DIR`, or `/output` by default), then reads the file back and refuses to finish unless the round trip is byte-identical.

## Run it

```sh
node main.ts
```

It prints the character count and the path it wrote to. If the line ever broke the rules — a stray newline, too many characters, a write that did not round-trip — the script throws instead of writing a bad entry.
