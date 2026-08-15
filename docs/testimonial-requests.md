# Getting real testimonials, fast

The placeholders in `src/data/testimonials.ts` are design filler. They render in
dev with a label saying so, and they never ship. This file is how you replace
them with the real thing.

Two real quotes with a surname and a profile link beat ten invented ones,
because a reader can click through and find the person. That is the whole value
of the section.

---

## The fastest route, in order

1. **LinkedIn → Me → Profile → Recommendations → Received.** Anything already
   there was written by a real person and is quotable verbatim today. Check
   before you ask anyone for anything.
2. **If there are none, request them.** LinkedIn's *Ask for a recommendation*
   flow. Send three or four requests; expect two replies.
3. **Paste each into `testimonials.ts`** with the real name, their role at the
   time, and the profile URL. Trim for length if you must. Do not rewrite.
4. **Delete the placeholders** and set `SHOW_SAMPLE_TESTIMONIALS = false` in
   `src/data/config.ts`.

If they write in Spanish, keep the Spanish and add a translation. For a Bogotá
engineer working with US clients, the untranslated original reads more credible,
not less.

---

## Who to ask, and what each one can uniquely say

Pick people who can speak to a **different** objection. Four quotes saying "great
engineer" are worth less than two saying different things.

| Ask | Because they can answer |
|---|---|
| A Level60 colleague or manager | Can he work inside a team and an enterprise for years? This is the objection four solo products raise, and it is the one the site cannot answer by itself. |
| Anyone who has reviewed or merged your PRs | What is he like to work with day to day, and does the review discipline he describes show up in practice? |
| A client from the clinic-matching or contract work | Did he deliver, and did the business result land? |
| Victor | Design and engineering collaboration, and what he was like to build with. |

---

## The request, ready to send

LinkedIn's default request box produces a generic reply. Giving people something
specific to react to produces a usable one. Adapt these.

### To a colleague or manager

> Hi [Name] — I am putting together a proper portfolio and I would rather have
> two real recommendations than a page of adjectives. Would you be up for
> writing a few lines?
>
> What would help most is something specific rather than general. For example,
> anything you remember about [the branch and review rules I set up / how I
> handled the Teams API migration / what it was like when something broke]. Two
> or three sentences is plenty, and please write it the way you would say it.
>
> No problem at all if you would rather not.

### To someone who has reviewed your code

> Hi [Name] — quick favour. I am collecting a couple of short recommendations
> for my portfolio, and you have seen more of my pull requests than most people.
>
> If you are willing, what would help is your honest read on what I am like to
> review code with, or how I handle it when a review finds something. A few
> sentences, in your own words. Rough is better than polished.

### En español

> Hola [Nombre]: estoy armando un portafolio en serio y prefiero dos
> recomendaciones reales antes que una página de adjetivos. ¿Te animarías a
> escribir unas líneas?
>
> Lo que más sirve es algo concreto en vez de general. Por ejemplo, lo que
> recuerdes de [las reglas de ramas y revisión que armé / cómo manejé la
> migración de la API de Teams / qué pasó cuando algo se rompió]. Con dos o tres
> frases basta, y escríbelo como lo dirías hablando.
>
> Sin problema si prefieres no hacerlo.

---

## What a good one looks like

The best recommendation names a **specific situation** and what changed. The
worst is a list of qualities.

- Weak: "Henry is a talented and dedicated engineer who always delivers."
- Strong: "We used to merge straight to main and find out later. Henry wrote the
  branch rules, explained why, and the team still works to them."

If someone sends you the weak kind, it is fine to reply asking whether they
remember a particular moment. Most people would rather be asked than have you
publish something vague with their name on it.
