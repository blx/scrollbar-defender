# chrome fucking scrollbar defender

Overriding native scroll behaviour is [evil][0] in 95% of cases.

It’s **viscerally frustrating**, like reading over someone's 
shoulder at twice their speed or typing Java getter/setters 
with your nose.

### usage

*(note: ⍺ status)*

This script is currently a bookmarklet. To use, make a bookmark 
in your browser with the URI: `javascript:` followed by the source 
of `cfsd-active-ingredient.js`. Click the bookmark to restore sanity.

--> [Try on the nicescroll homepage!][1]

Technical note: bookmarklet wins over chrome extension because we can 
execute in the full context of the original document, accessing scripts 
like nicescroll that the godforsaken page has loaded.

### targets

- jquery.nicescroll
- more tba
- greater flexibility+resilience also coming


### licence (ISC)

Copyright (c) 2015 Ben Cook

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


[0]: http://jordankoschei.com/why-scrolljacking-is-a-problem/
[1]: http://nicescroll.areaaperta.com/
