/**
 * Build-time switches for content that needs someone's permission before it
 * goes public. Default to the private setting; flip only when permission is on
 * record. See docs/content-constraints.md for what each flag releases.
 */

/**
 * Client names stay hidden until each client agrees.
 *
 * Level60 is Henry's employer and is always safe to name, so it is NOT behind
 * this flag. The flag covers the clinic matching platform, the enterprise data
 * client, and the architecture studios in Spain. While it is false, those
 * projects still appear, they render under a neutral label instead.
 */
export const REVEAL_CLIENT_NAMES = false;

/**
 * The career table has an unexplained five-month gap (Feb to Jul 2021). Leaving it
 * visible is the honest default: a short gap five years ago needs no story, and
 * inventing filler is worse than the gap. Set this to true to collapse the
 * timeline to years only, which hides it without stating anything false.
 */
export const COARSE_TIMELINE_DATES = false;

/**
 * Web3Forms access key for the contact form, the same service
 * victor-portafolio uses.
 *
 * GitHub Pages cannot process a form, so the browser POSTs straight to
 * Web3Forms, which forwards the message to a real inbox. The key is a public
 * value by design: it names the destination inbox, not the sender, which is
 * why it is safe in client HTML.
 *
 * While this is empty the form still works, it falls back to the mailto
 * action and opens the visitor's mail client. Nothing is broken, it just does
 * not land in an inbox automatically.
 *
 * To switch it on: go to https://web3forms.com, enter cabello986@gmail.com,
 * confirm the email, and paste the access key here. Nothing else changes.
 *
 * Do NOT paste Victor's key. It is in his repo and it routes to his inbox.
 */
export const WEB3FORMS_ACCESS_KEY = '9854292a-6ba2-4536-8293-6d5740d3dabe';


/**
 * Show sample testimonials so the section can be judged while it is empty.
 *
 * The samples render with first names only, no company, no profile link, and
 * NO sample marker, so on a production build they read as real quotes. The
 * docs are explicit that this state must not reach a hiring manager; Henry
 * reviewed that trade-off on 2026-08-12 and chose to keep this true for now.
 * It stays on the record as a decision, not an oversight.
 *
 * It is already true in `npm run dev` regardless of this setting, so flipping
 * it to false costs nothing for layout review.
 *
 * Once real approved quotes land in src/data/testimonials.ts the samples are
 * replaced automatically and this flag becomes irrelevant.
 * See docs/testimonial-drafts.md for the drafts to send for approval.
 */
export const SHOW_SAMPLE_TESTIMONIALS = true;
