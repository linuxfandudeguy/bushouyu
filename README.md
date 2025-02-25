# bushouyu   

(or also called <ruby>
  咅<rp>(</rp><rt>pǒu</rt><rp>)</rp>
  阝<rp>(</rp><rt>yì</rt><rp>)</rp>
  首<rp>(</rp><rt>shǒu</rt><rp>)</rp>
  讠<rp>(</rp><rt>yán</rt><rp>)</rp>
  吾<rp>(</rp><rt>wú</rt><rp>)</rp>
</ruby> in the language)

***YT VID COMING SOON***

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# interesting discoveries

this is an interesting artifact found in the dictionary.  
the ipa schwa symbol (ə) unexpectedly maps to the radical breakdown for "<ruby>𰻞<rt>"biang"</rt></ruby>" (**⿺‌辶⿱穴⿱⿲月⿱⿲幺言幺⿲長馬長刂心**).  

this is likely due to how the database was structured and how certain characters were categorized and is also an artifact from the original project i took the dictionary from. 
 
```json
  "ə": {
    "radical": "⺀",
    "decomposition": "⿺辶⿱穴⿱⿲月⿱⿲幺言幺⿲長馬長刂心",
    "matches": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
```

it remains in the system as a documented anomaly for those curious.  

> **biang might not show up for some people because of the unicode character being relatively new due to how complicated it is**

<ruby>ə<rt>"uh"</rt></ruby> → **<ruby>⿺‌辶⿱穴⿱⿲月⿱⿲幺言幺⿲長馬長刂心<rt>"biang"</rt></ruby>**

# samples
key:

- > **blockquote bold** - orthographic writing (the chinese characters)

- (***italic bold parentheses***) - pinyin

- > *blockquote italic* - english translation

---




> **木艮 扌居 户斤 ？月 ？ 矢口 白勺 舟亢 穴工 氵去 贝刂 ， 宓虫 虫夆 一？ 丁口 厶⺼匕匕 飞 行 。  宀匕 白勺 支羽 ⺼旁 大丶 小 ， 无 氵去 扌乇 走己 宀匕 ⺼半 ⺼半 白勺 身 亻本 。  ⺌彐 肰灬 ， 宓虫 虫夆** > **辶不 日疋 人云 飞 ，  囗大 丶力丶 宓虫 虫夆 扌？ 一？ 才土 丿？丷 人 米大 讠人 丶力丶 一？ 丁口 厶⺼匕匕 白勺 一口彐亅 忄青 。**

(***mùgèn shǒujū hùjīn yuè  shǐkǒu báisháo zhōukàng xuègōng shuǐqù bèidāo  mìchóng chóngféng yī dīngkǒu sībǐbǐ fēi xíng   gàibǐ báisháo zhīyǔ páng dàdiǎn xiǎo  wú shuǐqù shǒutuō zǒujǐ gàibǐ bàn bàn báisháo shēn rénběn   jì ránhuǒ  mìchóng chóngféng chuòbù rìpǐ rényún fēi   wéidà diǎnlìdiǎn mìchóng chóngféng shǒu yī cáitǔ piěha rén mǐdà yánrén diǎnlìdiǎn yī dīngkǒu sībǐbǐ báisháo yīkǒujìgōu xīnqīng*** )

> *"According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don’t care what humans think is impossible."*

# credits

https://github.com/eleanormally/hanziyu/tree/main for the Dictionary file and inspiration for this whole project in general

https://gist.github.com/branneman/f93d596ac236f0dbd9fb5b1a5099122f for the radical.json file

Me for coming up with this random idea in the first place
