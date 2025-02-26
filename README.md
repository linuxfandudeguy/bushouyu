# bushouyu   
![Bushouyu Linguistic Seal](./assets/chinese_seal.png)


(or also called <ruby>
  咅<rp>(</rp><rt>pǒu</rt><rp>)</rp>
  阝<rp>(</rp><rt>yì</rt><rp>)</rp>
  首<rp>(</rp><rt>shǒu</rt><rp>)</rp>
  讠<rp>(</rp><rt>yán</rt><rp>)</rp>
  吾<rp>(</rp><rt>wú</rt><rp>)</rp>
</ruby> in the language)

***YT VID WORK IN PROGRESS***

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

---

>**亻吏 用  B u n  一廾 ？又 、 氵则 讠式 、 辶云 行 禾口 扌丁 勹巳  J a v a S c r i p t  ？一  T y p e S c r i p t  工页 目 。  B u n  日疋 一 士示欠 入玉 亼口 一 白勺  J a v a S c r i p t  辶** >**云 行 日寸 ？又 工 目一八 勹巳 ， ？一 丶力丶 高 忄生 厶⺼匕匕 讠殳 讠十 ， 冂人 罒直 扌丁 勹巳 口口犬口口 、 氵则 讠式 辶云 行 口口犬口口 ？人 ？又 ？一  N o d e . j s  丷彐禾禾 宀谷 白勺 勹巳 ⺮官**
>**王里 口口犬口口 。  B u n  白勺 目 木示 日疋 宀头 王见  1 0 0 %  白勺  N o d e . j s  丷彐禾禾 宀谷 忄生 .**


(***rénlì yòng      yīgǒng yòu  shuǐzé yánshì  chuòyún xíng hékǒu shǒudīng bāosì             yī             gōngyè mù       rìpǐ yī shìshìqiàn rùyù jíkǒu yī báisháo             chuòyún xíng rìcùn yòu gōng mùyībā bāosì  yī diǎnlìdiǎn gāo xīnshēng sībǐbǐ yánshū yánshí  jiǒngrén wǎngzhí shǒudīng bāosì kǒukǒuquǎnkǒukǒu  shuǐzé yánshì chuòyún xíng kǒukǒuquǎnkǒukǒu rén yòu yī          hajìhéhé gàigǔ báisháo bāosì zhúguān wánglǐ kǒukǒuquǎnkǒukǒu       báisháo mù mùshì rìpǐ gàitóu wángjiàn       báisháo          hajìhéhé gàigǔ xīnshēng*** )

> *Develop, test, run, and bundle JavaScript & TypeScript projects—all with Bun. Bun is an all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager. Bun aims for 100% Node.js compatibility.*

this is currently unfinished as of right now

# credits

https://github.com/eleanormally/hanziyu/tree/main for the Dictionary file and inspiration for this whole project in general

https://gist.github.com/branneman/f93d596ac236f0dbd9fb5b1a5099122f for the radical.json file

Me for coming up with this random idea in the first place
