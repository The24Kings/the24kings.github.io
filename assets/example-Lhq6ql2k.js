var e=`<h1 id="headers" tabindex="-1">Headers <a class="header-anchor" href="#headers">#</a></h1>
<pre><code class="hljs"># h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

-# Subtext

&lt;!-- Comment ---&gt; (should not render)

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
</code></pre>
<h1 id="h1-heading-8-)" tabindex="-1">h1 Heading 8-) <a class="header-anchor" href="#h1-heading-8-)">#</a></h1>
<h2 id="h2-heading" tabindex="-1">h2 Heading <a class="header-anchor" href="#h2-heading">#</a></h2>
<h3 id="h3-heading" tabindex="-1">h3 Heading <a class="header-anchor" href="#h3-heading">#</a></h3>
<h4 id="h4-heading" tabindex="-1">h4 Heading <a class="header-anchor" href="#h4-heading">#</a></h4>
<h5 id="h5-heading" tabindex="-1">h5 Heading <a class="header-anchor" href="#h5-heading">#</a></h5>
<h6 id="h6-heading" tabindex="-1">h6 Heading <a class="header-anchor" href="#h6-heading">#</a></h6>
<!-- Comment --->
<p class="subtext">Subtext</p>
<p>Alternatively, for H1 and H2, an underline-ish style:</p>
<h1 id="alt-h1" tabindex="-1">Alt-H1 <a class="header-anchor" href="#alt-h1">#</a></h1>
<h2 id="alt-h2" tabindex="-1">Alt-H2 <a class="header-anchor" href="#alt-h2">#</a></h2>
<hr>
<h1 id="emphasis" tabindex="-1">Emphasis <a class="header-anchor" href="#emphasis">#</a></h1>
<pre><code class="hljs">Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~
</code></pre>
<p>Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.</p>
<p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>
<p>Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.</p>
<p>Strikethrough uses two tildes. <s>Scratch this.</s></p>
<p><strong>This is bold text</strong></p>
<p><strong>This is bold text</strong></p>
<p><em>This is italic text</em></p>
<p><em>This is italic text</em></p>
<p><s>Strikethrough</s></p>
<hr>
<h1 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists">#</a></h1>
<pre><code class="hljs">1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

1. Make my changes
    1. Fix bug
    2. Improve formatting
        - Make the headings bigger
2. Push my commits to GitHub
3. Open a pull request
    * Describe my changes
    * Mention all the members of my team
        * Ask for feedback

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
</code></pre>
<ol>
<li>First ordered list item</li>
<li>Another item
⋅⋅* Unordered sub-list.</li>
<li>Actual numbers don’t matter, just that it’s a number
⋅⋅1. Ordered sub-list</li>
<li>And another item.</li>
</ol>
<p>⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we’ll use three here to also align the raw Markdown).</p>
<p>⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)</p>
<ul>
<li>
<p>Unordered list can use asterisks</p>
</li>
<li>
<p>Or minuses</p>
</li>
<li>
<p>Or pluses</p>
</li>
</ul>
<ol>
<li>Make my changes
<ol>
<li>Fix bug</li>
<li>Improve formatting
<ul>
<li>Make the headings bigger</li>
</ul>
</li>
</ol>
</li>
<li>Push my commits to GitHub</li>
<li>Open a pull request
<ul>
<li>Describe my changes</li>
<li>Mention all the members of my team
<ul>
<li>Ask for feedback</li>
</ul>
</li>
</ul>
</li>
</ol>
<ul>
<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
<li>Sub-lists are made by indenting 2 spaces:
<ul>
<li>Marker character change forces new list start:
<ul>
<li>Ac tristique libero volutpat at</li>
<li>Facilisis in pretium nisl aliquet</li>
<li>Nulla volutpat aliquam velit</li>
</ul>
</li>
</ul>
</li>
<li>Very easy!</li>
</ul>
<hr>
<h1 id="task-lists" tabindex="-1">Task lists <a class="header-anchor" href="#task-lists">#</a></h1>
<pre><code class="hljs">- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
- [x] @mentions, #refs, [links](), **formatting**, and &lt;del&gt;tags&lt;/del&gt; supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
</code></pre>
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> Finish my changes</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Push my commits to GitHub</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Open a pull request</li>
<li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> @mentions, #refs, <a href="">links</a>, <strong>formatting</strong>, and <del>tags</del> supported</li>
<li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> list syntax required (any unordered or ordered list supported)</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> this is a complete item</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> this is an incomplete item</li>
</ul>
<hr>
<h1 id="ignoring-markdown-formatting" tabindex="-1">Ignoring Markdown formatting <a class="header-anchor" href="#ignoring-markdown-formatting">#</a></h1>
<p>You can tell GitHub to ignore (or escape) Markdown formatting by using \\ before the Markdown character.</p>
<pre><code class="hljs">Let's rename \\*our-new-project\\* to \\*our-old-project\\*.
</code></pre>
<p>Let’s rename *our-new-project* to *our-old-project*.</p>
<hr>
<h1 id="links" tabindex="-1">Links <a class="header-anchor" href="#links">#</a></h1>
<pre><code class="hljs">[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com &quot;Google's Homepage&quot;)

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or &lt;http://www.example.com&gt; and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
</code></pre>
<p><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">I’m an inline-style link</a></p>
<p><a href="https://www.google.com" title="Google's Homepage" target="_blank" rel="noopener noreferrer">I’m an inline-style link with title</a></p>
<p><a href="https://www.mozilla.org" target="_blank" rel="noopener noreferrer">I’m a reference-style link</a></p>
<p><a href="../blob/master/LICENSE">I’m a relative reference to a repository file</a></p>
<p><a href="http://slashdot.org" target="_blank" rel="noopener noreferrer">You can use numbers for reference-style link definitions</a></p>
<p>Or leave it empty and use the <a href="http://www.reddit.com" target="_blank" rel="noopener noreferrer">link text itself</a>.</p>
<p>URLs and URLs in angle brackets will automatically get turned into links.
<a href="http://www.example.com" target="_blank" rel="noopener noreferrer">http://www.example.com</a> or <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">http://www.example.com</a> and sometimes <a href="http://example.com" target="_blank" rel="noopener noreferrer">example.com</a> (but not on Github, for example).</p>
<p>Some text to show that the reference links can follow later.</p>
<hr>
<h1 id="images" tabindex="-1">Images <a class="header-anchor" href="#images">#</a></h1>
<pre><code class="hljs">Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png &quot;Logo Title Text 1&quot;)

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png &quot;Logo Title Text 2&quot;

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg &quot;The Stormtroopocat&quot;)

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  &quot;The Dojocat&quot;
</code></pre>
<p>Here’s our logo (hover to see the title text):</p>
<p>Inline-style:
<a class="expandable-img-trigger" href="#lightbox-https-github-com-adam-p-markdown-here-raw-master-src-common-images-icon48-png"><img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="alt text" title="Logo Title Text 1" loading="lazy" /></a><a href="#" class="expandable-img-overlay" id="lightbox-https-github-com-adam-p-markdown-here-raw-master-src-common-images-icon48-png"><img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="alt text" title="Logo Title Text 1" /></a></p>
<p>Reference-style:
<a class="expandable-img-trigger" href="#lightbox-https-github-com-adam-p-markdown-here-raw-master-src-common-images-icon48-png"><img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="alt text" title="Logo Title Text 2" loading="lazy" /></a><a href="#" class="expandable-img-overlay" id="lightbox-https-github-com-adam-p-markdown-here-raw-master-src-common-images-icon48-png"><img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="alt text" title="Logo Title Text 2" /></a></p>
<p><a class="expandable-img-trigger" href="#lightbox-https-octodex-github-com-images-minion-png"><img src="https://octodex.github.com/images/minion.png" alt="Minion" loading="lazy" /></a><a href="#" class="expandable-img-overlay" id="lightbox-https-octodex-github-com-images-minion-png"><img src="https://octodex.github.com/images/minion.png" alt="Minion" /></a>
<a class="expandable-img-trigger" href="#lightbox-https-octodex-github-com-images-stormtroopocat-jpg"><img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat" loading="lazy" /></a><a href="#" class="expandable-img-overlay" id="lightbox-https-octodex-github-com-images-stormtroopocat-jpg"><img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat" /></a></p>
<p>Like links, Images also have a footnote style syntax</p>
<p><a class="expandable-img-trigger" href="#lightbox-https-octodex-github-com-images-dojocat-jpg"><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat" loading="lazy" /></a><a href="#" class="expandable-img-overlay" id="lightbox-https-octodex-github-com-images-dojocat-jpg"><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat" /></a></p>
<p>With a reference later in the document defining the URL location:</p>
<hr>
<h1 id="footnotes" tabindex="-1"><a href="https://github.com/markdown-it/markdown-it-footnote" target="_blank" rel="noopener noreferrer">Footnotes</a> <a class="header-anchor" href="#footnotes">#</a></h1>
<pre><code class="hljs">Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
</code></pre>
<p>Footnote 1 link<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p>
<p>Footnote 2 link<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>.</p>
<p>Inline footnote<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup> definition.</p>
<p>Duplicated footnote reference<sup class="footnote-ref"><a href="#fn2" id="fnref2:1">[2:1]</a></sup>.</p>
<hr>
<h1 id="code-and-syntax-highlighting" tabindex="-1">Code and Syntax Highlighting <a class="header-anchor" href="#code-and-syntax-highlighting">#</a></h1>
<pre><code class="hljs">Inline \`code\` has \`back-ticks around\` it.
</code></pre>
<p>Inline <code>code</code> has <code>back-ticks around</code> it.</p>
<pre><code class="hljs language-csharp"><span class="hljs-keyword">using</span> System.IO.Compression;

<span class="hljs-meta">#<span class="hljs-keyword">pragma</span> <span class="hljs-keyword">warning</span> disable 414, 3021</span>

<span class="hljs-keyword">namespace</span> <span class="hljs-title">MyApplication</span>
{
    [<span class="hljs-meta">Obsolete(<span class="hljs-string">&quot;...&quot;</span>)</span>]
    <span class="hljs-keyword">class</span> <span class="hljs-title">Program</span> : <span class="hljs-title">IInterface</span>
    {
        <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-title">List</span>&lt;<span class="hljs-title">int</span>&gt; <span class="hljs-title">JustDoIt</span>(<span class="hljs-params"><span class="hljs-built_in">int</span> count</span>)</span>
        {
            Console.WriteLine(<span class="hljs-string">$&quot;Hello <span class="hljs-subst">{Name}</span>!&quot;</span>);
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> List&lt;<span class="hljs-built_in">int</span>&gt;(<span class="hljs-keyword">new</span> <span class="hljs-built_in">int</span>[] { <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span> })
        }
    }
}
</code></pre>
<pre><code class="hljs language-css"><span class="hljs-keyword">@font-face</span> {
  <span class="hljs-attribute">font-family</span>: Chunkfive; <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&#x27;Chunkfive.otf&#x27;</span>);
}

<span class="hljs-selector-tag">body</span>, <span class="hljs-selector-class">.usertext</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#F0F0F0</span>; <span class="hljs-attribute">background</span>: <span class="hljs-number">#600</span>;
  <span class="hljs-attribute">font-family</span>: Chunkfive, sans;
}

<span class="hljs-keyword">@import</span> url(print.css);
<span class="hljs-keyword">@media</span> print {
  <span class="hljs-selector-tag">a</span><span class="hljs-selector-attr">[href^=http]</span><span class="hljs-selector-pseudo">::after</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-built_in">attr</span>(href)
  }
}
</code></pre>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">$initHighlight</span>(<span class="hljs-params">block, cls</span>) {
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">if</span> (cls.<span class="hljs-title function_">search</span>(<span class="hljs-regexp">/\\bno\\-highlight\\b/</span>) != -<span class="hljs-number">1</span>)
      <span class="hljs-keyword">return</span> <span class="hljs-title function_">process</span>(block, <span class="hljs-literal">true</span>, <span class="hljs-number">0x0F</span>) +
             <span class="hljs-string">\` class=&quot;<span class="hljs-subst">\${cls}</span>&quot;\`</span>;
  } <span class="hljs-keyword">catch</span> (e) {
    <span class="hljs-comment">/* handle exception */</span>
  }
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span> / <span class="hljs-number">2</span>; i &lt; classes.<span class="hljs-property">length</span>; i++) {
    <span class="hljs-keyword">if</span> (<span class="hljs-title function_">checkCondition</span>(classes[i]) === <span class="hljs-literal">undefined</span>)
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;undefined&#x27;</span>);
  }
}

<span class="hljs-keyword">export</span>  $initHighlight;
</code></pre>
<pre><code class="hljs language-php"><span class="hljs-keyword">require_once</span> <span class="hljs-string">&#x27;Zend/Uri/Http.php&#x27;</span>;

<span class="hljs-keyword">namespace</span> <span class="hljs-title class_">Location</span>\\<span class="hljs-title class_">Web</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">Factory</span>
</span>{
    <span class="hljs-built_in">static</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_factory</span>(<span class="hljs-params"></span>)</span>;
}

<span class="hljs-keyword">abstract</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">URI</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">BaseURI</span> <span class="hljs-keyword">implements</span> <span class="hljs-title">Factory</span>
</span>{
    <span class="hljs-keyword">abstract</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-keyword">public</span> <span class="hljs-built_in">static</span> <span class="hljs-variable">$st1</span> = <span class="hljs-number">1</span>;
    <span class="hljs-keyword">const</span> <span class="hljs-variable constant_">ME</span> = <span class="hljs-string">&quot;Yo&quot;</span>;
    <span class="hljs-keyword">var</span> <span class="hljs-variable">$list</span> = <span class="hljs-literal">NULL</span>;
    <span class="hljs-keyword">private</span> <span class="hljs-variable">$var</span>;

    <span class="hljs-comment">/**
     * Returns a URI
     *
     * <span class="hljs-doctag">@return</span> URI
     */</span>
    <span class="hljs-built_in">static</span> <span class="hljs-keyword">public</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_factory</span>(<span class="hljs-params"><span class="hljs-variable">$stats</span> = <span class="hljs-keyword">array</span>(<span class="hljs-params"></span>), <span class="hljs-variable">$uri</span> = <span class="hljs-string">&#x27;http&#x27;</span></span>)
    </span>{
        <span class="hljs-keyword">echo</span> <span class="hljs-keyword">__METHOD__</span>;
        <span class="hljs-variable">$uri</span> = <span class="hljs-title function_ invoke__">explode</span>(<span class="hljs-string">&#x27;:&#x27;</span>, <span class="hljs-variable">$uri</span>, <span class="hljs-number">0b10</span>);
        <span class="hljs-variable">$schemeSpecific</span> = <span class="hljs-keyword">isset</span>(<span class="hljs-variable">$uri</span>[<span class="hljs-number">1</span>]) ? <span class="hljs-variable">$uri</span>[<span class="hljs-number">1</span>] : <span class="hljs-string">&#x27;&#x27;</span>;
        <span class="hljs-variable">$desc</span> = <span class="hljs-string">&#x27;Multi
line description&#x27;</span>;

        <span class="hljs-comment">// Security check</span>
        <span class="hljs-keyword">if</span> (!<span class="hljs-title function_ invoke__">ctype_alnum</span>(<span class="hljs-variable">$scheme</span>)) {
            <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Zend_Uri_Exception</span>(<span class="hljs-string">&#x27;Illegal scheme&#x27;</span>);
        }

        <span class="hljs-variable language_">$this</span>-&gt;<span class="hljs-keyword">var</span> = <span class="hljs-number">0</span> - <span class="hljs-built_in">self</span>::<span class="hljs-variable">$st</span>;
        <span class="hljs-variable language_">$this</span>-&gt;<span class="hljs-keyword">list</span> = <span class="hljs-keyword">list</span>(<span class="hljs-title function_ invoke__">Array</span>(<span class="hljs-string">&quot;1&quot;</span>=&gt; <span class="hljs-number">2</span>, <span class="hljs-number">2</span>=&gt;<span class="hljs-built_in">self</span>::<span class="hljs-variable constant_">ME</span>, <span class="hljs-number">3</span> =&gt; \\Location\\Web\\URI::<span class="hljs-variable language_">class</span>));

        <span class="hljs-keyword">return</span> [
            <span class="hljs-string">&#x27;uri&#x27;</span>   =&gt; <span class="hljs-variable">$uri</span>,
            <span class="hljs-string">&#x27;value&#x27;</span> =&gt; <span class="hljs-literal">null</span>,
        ];
    }
}

<span class="hljs-keyword">echo</span> URI::<span class="hljs-variable constant_">ME</span> . URI::<span class="hljs-variable">$st1</span>;

<span class="hljs-title function_ invoke__">__halt_compiler</span> () ; datahere
datahere
datahere */
datahere
</code></pre>
<hr>
<h1 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables">#</a></h1>
<pre><code class="hljs">Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

| Command | Description |
| --- | --- |
| \`git status\` | List all *new or modified* files |
| \`git diff\` | Show file differences that **haven't been** staged |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

| Name     | Character |
| ---      | ---       |
| Backtick | \`         |
| Pipe     | \\|        |
</code></pre>
<p>Colons can be used to align columns.</p>
<table>
<thead>
<tr>
<th>Tables</th>
<th style="text-align:center">Are</th>
<th style="text-align:right">Cool</th>
</tr>
</thead>
<tbody>
<tr>
<td>col 3 is</td>
<td style="text-align:center">right-aligned</td>
<td style="text-align:right">$1600</td>
</tr>
<tr>
<td>col 2 is</td>
<td style="text-align:center">centered</td>
<td style="text-align:right">$12</td>
</tr>
<tr>
<td>zebra stripes</td>
<td style="text-align:center">are neat</td>
<td style="text-align:right">$1</td>
</tr>
</tbody>
</table>
<p>There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don’t need to make the
raw Markdown line up prettily. You can also use inline Markdown.</p>
<table>
<thead>
<tr>
<th>Markdown</th>
<th>Less</th>
<th>Pretty</th>
</tr>
</thead>
<tbody>
<tr>
<td><em>Still</em></td>
<td><code>renders</code></td>
<td><strong>nicely</strong></td>
</tr>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>First Header</th>
<th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Command</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>git status</td>
<td>List all new or modified files</td>
</tr>
<tr>
<td>git diff</td>
<td>Show file differences that haven’t been staged</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Command</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>git status</code></td>
<td>List all <em>new or modified</em> files</td>
</tr>
<tr>
<td><code>git diff</code></td>
<td>Show file differences that <strong>haven’t been</strong> staged</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">Left-aligned</th>
<th style="text-align:center">Center-aligned</th>
<th style="text-align:right">Right-aligned</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">git status</td>
<td style="text-align:center">git status</td>
<td style="text-align:right">git status</td>
</tr>
<tr>
<td style="text-align:left">git diff</td>
<td style="text-align:center">git diff</td>
<td style="text-align:right">git diff</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Name</th>
<th>Character</th>
</tr>
</thead>
<tbody>
<tr>
<td>Backtick</td>
<td>\`</td>
</tr>
<tr>
<td>Pipe</td>
<td>|</td>
</tr>
</tbody>
</table>
<hr>
<h1 id="blockquotes" tabindex="-1">Blockquotes <a class="header-anchor" href="#blockquotes">#</a></h1>
<pre><code class="hljs">&gt; Blockquotes are very handy in email to emulate reply text.
&gt; This line is part of the same quote.

Quote break.

&gt; This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

&gt; Blockquotes can also be nested...
&gt;&gt; ...by using additional greater-than signs right next to each other...
&gt; &gt; &gt; ...or with spaces between arrows.

&gt; [!NOTE]  
&gt; Highlights information that users should take into account, even when skimming.

&gt; [!TIP]
&gt; Optional information to help a user be more successful.

&gt; [!IMPORTANT]  
&gt; Crucial information necessary for users to succeed.

&gt; [!WARNING]  
&gt; Critical content demanding immediate user attention due to potential risks.

&gt; [!CAUTION]
&gt; Negative potential consequences of an action.
</code></pre>
<blockquote>
<p>Blockquotes are very handy in email to emulate reply text.
This line is part of the same quote.</p>
</blockquote>
<p>Quote break.</p>
<blockquote>
<p>This is a very long line that will still be quoted properly when it wraps. Oh boy let’s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can <em>put</em> <strong>Markdown</strong> into a blockquote.</p>
</blockquote>
<blockquote>
<p>Blockquotes can also be nested…</p>
<blockquote>
<p>…by using additional greater-than signs right next to each other…</p>
<blockquote>
<p>…or with spaces between arrows.</p>
</blockquote>
</blockquote>
</blockquote>
<div class="markdown-alert markdown-alert-note"><p class="markdown-alert-title"><svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p><p>Highlights information that users should take into account, even when skimming.</p>
</div>
<div class="markdown-alert markdown-alert-tip"><p class="markdown-alert-title"><svg class="octicon octicon-light-bulb mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>Tip</p><p>Optional information to help a user be more successful.</p>
</div>
<div class="markdown-alert markdown-alert-important"><p class="markdown-alert-title"><svg class="octicon octicon-report mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Important</p><p>Crucial information necessary for users to succeed.</p>
</div>
<div class="markdown-alert markdown-alert-warning"><p class="markdown-alert-title"><svg class="octicon octicon-alert mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p><p>Critical content demanding immediate user attention due to potential risks.</p>
</div>
<div class="markdown-alert markdown-alert-caution"><p class="markdown-alert-title"><svg class="octicon octicon-stop mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Caution</p><p>Negative potential consequences of an action.</p>
</div>
<hr>
<h1 id="inline-html" tabindex="-1">Inline HTML <a class="header-anchor" href="#inline-html">#</a></h1>
<pre><code class="hljs">&lt;dl&gt;
  &lt;dt&gt;Definition list&lt;/dt&gt;
  &lt;dd&gt;Is something people use sometimes.&lt;/dd&gt;

  &lt;dt&gt;Markdown in HTML&lt;/dt&gt;
  &lt;dd&gt;Does *not* work **very** well. Use HTML &lt;em&gt;tags&lt;/em&gt;.&lt;/dd&gt;
&lt;/dl&gt;
</code></pre>
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
<hr>
<h1 id="horizontal-rules" tabindex="-1">Horizontal Rules <a class="header-anchor" href="#horizontal-rules">#</a></h1>
<pre><code class="hljs">Three or more...

---

Hyphens

***

Asterisks

___

Underscores
</code></pre>
<p>Three or more…</p>
<hr>
<p>Hyphens</p>
<hr>
<p>Asterisks</p>
<hr>
<p>Underscores</p>
<hr>
<h1 id="youtube-videos" tabindex="-1">YouTube Videos <a class="header-anchor" href="#youtube-videos">#</a></h1>
<pre><code class="hljs">&lt;a href=&quot;http://www.youtube.com/watch?feature=player_embedded&amp;v=YOUTUBE_VIDEO_ID_HERE&quot; target=&quot;_blank&quot;&gt;
&lt;img src=&quot;http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg&quot; alt=&quot;IMAGE ALT TEXT HERE&quot; width=&quot;240&quot; height=&quot;180&quot; border=&quot;10&quot;&gt;
&lt;/a&gt;
</code></pre>
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE" target="_blank">
<img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10">
</a>
<pre><code class="hljs">[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
</code></pre>
<p><a href="https://www.youtube.com/watch?v=ciawICBvQoE" target="_blank" rel="noopener noreferrer"><a class="expandable-img-trigger" href="#lightbox-https-upload-wikimedia-org-wikipedia-commons-thumb-e-ef-YouTube-logo-2015-svg-1200px-YouTube-logo-2015-svg-png"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/YouTube_logo_2015.svg/1200px-YouTube_logo_2015.svg.png" alt="IMAGE ALT TEXT HERE" loading="lazy" /></a><a href="#" class="expandable-img-overlay" id="lightbox-https-upload-wikimedia-org-wikipedia-commons-thumb-e-ef-YouTube-logo-2015-svg-1200px-YouTube-logo-2015-svg-png"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/YouTube_logo_2015.svg/1200px-YouTube_logo_2015.svg.png" alt="IMAGE ALT TEXT HERE" /></a></a></p>
<hr>
<h1 id="math-(tex)" tabindex="-1"><a href="https://mdit-plugins.github.io/tex.html" target="_blank" rel="noopener noreferrer">Math (TeX)</a> <a class="header-anchor" href="#math-(tex)">#</a></h1>
<p>Rendered with <a href="https://mdit-plugins.github.io/katex.html" target="_blank" rel="noopener noreferrer">@mdit/plugin-katex</a>.</p>
<pre><code class="hljs">Inline math uses single dollars: Euler's identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\mathbb{R}^2$.

Display math uses double dollars:

$$
\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)
= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^ Ir \\cdots (r-i+1) (\\log y)^{ri}} {\\omega^i} \\right\\}
$$

Fractions, sums, and limits:

$$
\\sum_{i=1}^n i \\quad \\prod_{i=1}^n i \\quad \\lim_{x \\to \\infty} \\frac{1}{x}
$$

Matrices:

$$
\\begin{pmatrix} a &amp; b \\\\ c &amp; d \\end{pmatrix}
\\begin{bmatrix} a &amp; b \\\\ c &amp; d \\end{bmatrix}
$$

Aligned equations:

$$
\\begin{aligned}
x &amp;= a+b+c \\\\
y &amp;= d+e+f
\\end{aligned}
$$

Escaping still works: The $a=1$ is a TeX equation, while \\$a=1$ is not.
</code></pre>
<p>Inline math uses single dollars: Euler’s identity <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">e^{i\\pi}+1=0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.908em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0359em;">iπ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> is a beautiful formula in <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>.</p>
<p>Display math uses double dollars:</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><msup><mi mathvariant="normal">∂</mi><mi>r</mi></msup><mrow><mi mathvariant="normal">∂</mi><msup><mi>ω</mi><mi>r</mi></msup></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">{</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mi>r</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>r</mi></munderover><mfrac><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>I</mi></msup><mi>r</mi><mo>⋯</mo><mo stretchy="false">(</mo><mi>r</mi><mo>−</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mrow><mi>r</mi><mi>i</mi></mrow></msup></mrow><msup><mi>ω</mi><mi>i</mi></msup></mfrac><mo fence="true">}</mo></mrow></mrow><annotation encoding="application/x-tex">\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)
= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^ Ir \\cdots (r-i+1) (\\log y)^{ri}} {\\omega^i} \\right\\}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.0556em;">∂</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0359em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.5904em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0278em;">r</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord" style="margin-right:0.0556em;">∂</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0278em;">r</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0359em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0359em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0277em;vertical-align:-1.2777em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0359em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0359em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.0139em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0278em;">r</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0278em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.5183em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.0359em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7507em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8413em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0785em;">I</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.0139em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0278em;">r</span><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p>
<p>Fractions, sums, and limits:</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mi>i</mi><mspace width="1em"/><munderover><mo>∏</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mi>i</mi><mspace width="1em"/><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>x</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow><annotation encoding="application/x-tex">\\sum_{i=1}^n i \\quad \\prod_{i=1}^n i \\quad \\lim_{x \\to \\infty} \\frac{1}{x}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.9291em;vertical-align:-1.2777em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∏</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-2.4em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">lim</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">x</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p>Matrices:</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>a</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>b</mi></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>c</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>d</mi></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>a</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>b</mi></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>c</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>d</mi></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow><annotation encoding="application/x-tex">\\begin{pmatrix} a &amp; b \\\\ c &amp; d \\end{pmatrix}
\\begin{bmatrix} a &amp; b \\\\ c &amp; d \\end{bmatrix}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mtable"><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">a</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">b</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">d</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">[</span></span><span class="mord"><span class="mtable"><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">a</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">b</span></span></span><span style="top:-2.41em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">d</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.95em;"><span></span></span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">]</span></span></span></span></span></span></span></p>
<p>Aligned equations:</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mi>x</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>+</mo><mi>c</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mi>y</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mi>d</mi><mo>+</mo><mi>e</mi><mo>+</mo><mi>f</mi></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">\\begin{aligned}
x &amp;= a+b+c \\\\
y &amp;= d+e+f
\\end{aligned}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.7em;vertical-align:-1.1em;"></span><span class="mord"><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6em;"><span style="top:-3.76em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">x</span></span></span><span style="top:-2.26em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.1em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6em;"><span style="top:-3.76em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">c</span></span></span><span style="top:-2.26em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">d</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">e</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.1076em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.1em;"><span></span></span></span></span></span></span></span></span></span></span></span></p>
<p>Escaping still works: The <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">a=1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> is a TeX equation, while $a=1$ is not.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Footnote <strong>can have markup</strong></p>
<p>and multiple paragraphs. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>Footnote text. <a href="#fnref2" class="footnote-backref">↩︎</a> <a href="#fnref2:1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn3" class="footnote-item"><p>Text of inline footnote <a href="#fnref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
`;export{e as html};