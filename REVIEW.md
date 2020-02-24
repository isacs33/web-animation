# Notes
- I did not know that the `:root` directive in CSS works. It's great!
- You managed to do most of it with CSS, which is the preferred solution if we
    knew that there aren't going to be requirements in future such as making the
    speed, positions, widths etc configurable.
- There's not that much code for me to actually review, which is a plus. The
    less code, the less bugs.
- Regarding `background.innerHTML += "<div class='bar'></div>";`, I think it is
    usually preferable to use `document` APIs such as `createElement` and
    `attachNode`. What do you think?
- The computation `backgroundWidth / barWidth / 2` would maybe benefit from a
    named variable which would tell the meaning of this number.

# Conclusion
Brief, that's what I like! This was also a test of whether I can translate
instructions to you in a clear way. My intention was for you to build
the [stepping illusion][wiki-stepping-illusion]. That's why I kind of hinted
that the configuration would be useful as I could make the sizes resemble the
animation you see on the wiki page.

<!-- Invisible List of References -->
[wiki-stepping-illusion]: https://en.wikipedia.org/wiki/Stepping_feet_illusion
