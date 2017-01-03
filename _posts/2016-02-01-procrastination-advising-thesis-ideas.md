---
title: Procrastination, Through Any Means Necessary
date: 2016-02-01 00:00:00 Z
summary: Unsurprisingly, I found a way to piss away a weekend. It wasn’t all in vain,
  though.
---

Though I’m somewhat embarrassed about the lack of meaningful progress I’ve made this weekend—or even in the past week—on thesis, it’s actually been a hugely productive one for me. The biggest, and most hopeful, improvement is the fact that I now have an adviser! It’s a great step in having a good advocate an prod for my future work, and with [Stefani Bardin][sb] as that colleague, I believe it’ll make a meaningful improvement on my ability to focus and deliver on thesis.

[sb]: http://www.stefanibardin.net/

## Do Not Repeat After Me

Rabbit holes are a specialty of mine, which is why having an adviser is going to be so key. As I spent some final hours avoiding some important tasks this weekend, I happened upon my old 12-inch PowerBook G4, old enough to be in middle school and still, incredibly, humming along.

It’s long since been left behind, but for one reason or another it had a home in a random bin in my apartment, and it came up when I realized there were no other “traditional” computers there, and as such I wanted to see if anything about it would be productive.

As an aside, it’s amazing the progress of our technological march. In the intervening decade, we’ve made so much progress that the machine I use on a daily basis is the same thickness as this computer’s display assembly, and has more than triple the RAM and twice the storage space, along with incredible amounts of graphics and CPU performance. 

But chug along it does, anyhow, and though it may look as outdated as the concept of the Star Trek [desktop monitor][ma-desktop-monitor] next to all these other svelte devices, I thought it may have been another potential vector for me to find some peaceful productivity.

[ma-desktop-monitor]: http://memory-alpha.wikia.com/wiki/Desktop_monitor

As it turns out it was more like a complete time suck, as I learned the pains of trying to connect an older device to networks that were designed with completely different modes of security. The fact that I could even connect to my own wireless network was surprising to me, and what I was hoping would be a quick connection to GitHub—with a [nice tutorial][git-tiger]—to grab my work was instead an ordeal, with several of their own rabbit holes.

[git-tiger]: http://funkaoshi.com/blog/building-git-on-mac-os-x

Here’s what I did:

- Installed Expat XML Parser (2.1.0), according to the instructions in the blog post.
- Went to install git, but realized I didn’t have GCC installed, so I installed Xcode’s tools (2.5)
- Went back and installed git (2.7.0), but after success in getting git installed, I ran into an SSL issue when trying to clone my repo, where CA certificates had expired on this system (running Mac OS X Tiger, on the PowerPC platform—this device is considered “obsolete” by Apple).
- Instead of compromising a secure link to my repo, I tried installing OpenSSL (1.0.2f), which did not fix the SSL problem. From there, I tried various self-signed and other root certificate authorities, to no avail.
- At that point, I thought perhaps a new install of Ruby (2.3.0) would help, but it wouldn’t install, probably owing to similar issues.
- To confuse things further, I installed cURL (7.47) because of the assumption that libcurl was looking for a different SSL provider. No dice.
- Went back to trying to install a slightly older version of Ruby (2.0.0-p648), but that one also failed to make properly.
- Gave up, then just tried using a lesser form of security on the repo that I was using, since it’s generally just a public repo anyhow and I’m not planning on doing much with it.

Had I avoided the whole security bit, things may have played out more quickly—and I still want to figure out how to get SSL working for the pure security aspects. (And depending on how serious I actually am about trying to maintain this near-teenager, there are a few other improvements I might like to make, like a keyboard that isn’t missing two keys, or getting Jekyll running somewhere I own.)

Ultimately, once I got back into the groove of doing work, what made it fantastic was how it became a single-purpose device: I’ve pretty much only been doing writing on it for thesis, because of its limited connectivity and speed. I’m going to have to look at my workflow, *yet again*, to see how this fits.

## Turning Direction Back to Work

But enough about that—as fun and long and ridiculous as it is. The most important thing that I needed to deliver today for class has been a thesis concept statement and a general direction. It’s not necessarily going to be a surprise, considering my [first][1st proto] and [second][2nd proto] prototypes focused on home cooks and various limitations of their space or tools.

[1st proto]: http://nicbarajas.github.io/sva-ixd-thesis/2015/11/15/first-prototype-learnings-results/
[2nd proto]: http://nicbarajas.github.io/sva-ixd-thesis/2015/12/18/second-prototype-tiny-kitchen/ "TK"

As Stefani and I talked on Wednesday, she helped me make clear that’s still a very important direction with a lot of opportunity to reimagine the potential interactions.

### Concept Statement

I’m calling the product *TK Kitchen* for now, partially because I was using the existing name Tiny Kitchen of Times Video fame, but also because TK literally comes from the newspaper world as a term meaning “to come” for content that isn’t there yet. Here’s how we’ve been instructed to lay out the claim:

- *For* home cooks
- *Who* are trying to learn skills that are new to them,
- *TK Kitchen* is a teaching kit
- *That* provides a basic set of tools and reference material.
- *Unlike* traditional classes and recipe sites,
- *TK Kitchen* encourages self-discovery and practical reference material.

In our Narrative class, what struck me as particularly important was the narrative arc that comes into three incredibly important points—the beginning and who the primary actor of the story is; the crucial hump through which a person must travel, so they can go from knowing their problem to finding a point of resolution; and that ending and how a person *feels* at the end of it all.

Taking Donna Lichaw’s [storytelling model][] as an example, that “home cooks” introduced in the concept statement is a person who’s either green to cooking or trying to get more comfortable with making food at home, and their end state is to be confident in the kitchen. Right now, the way I see that happening is by providing them dominion over the process in a controlled manner that requires limited interaction from an instructor, so they can take charge.

[storytelling model]: http://www.greatnorthelectric.com/blog/2015/1/14/who-is-telling-the-best-product-brand-and-experience-stories

### Third Prototype, Take One

From that statement, it’s still pretty hazy what my next prototype might look like. Since I’m just managing to establish a rapport with Stefani, we haven’t necessarily talked a lot about what my next prototype could be. From the previous class, when we were supposed to have an idea for an alternate approach, I’m actually kind of interested in where that’s headed.

![An example flash card For my third prototype thinking.](/sva-ixd-thesis/assets/prototype-three-v1-index-cards.jpg)

My alternate approach involves a sort of flash card-style set of techniques, which is focused on the prep aspect of home chef experience—but I’m still curious if that’s where the moment of intervention is actually needed.

***Updated 2/7:** Changed to clarify the concept statement according to how Eric Forman described it in our class. I also added the first-round third prototype concept here, which has since changed.*