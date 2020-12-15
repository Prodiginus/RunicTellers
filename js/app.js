const runes = {
	0: {
	'name': 'Fehu',
	'literal': 'Domestic Cow, Wealth',
	'blurb': 'Luck will be in your favor to come.',
	'deep': 'Luck, Plenty, Success, Energy, Foresight',
	'negBlurb': 'Greed may be a downfall for your actions.',
	'negDeep': 'Greed, Burnout, Discord, Poverty',
  'n': 0
},
	1: {
		'name': 'Uruz',
		'literal': 'Wild Ox, Wild Bull',
		'blurb': 'Power will be in your corner with you.',
		'deep': 'Physical Strength, Courage, Action, Freedom',
		'negBlurb': 'Weakness overwhelms the rune, careful.',
		'negDeep': 'Weakness, Obession, Domination',
    'n': 1
	},
	2: {
		'name': 'Thurisaz',
		'literal': 'Thorn, Giant',
		'blurb': 'Great conflict is in your runes.',
		'deep': 'Reactive Force, Conflict, Instinctual Will',
		'negBlurb': 'Danger and defenselessness is brought forward.',
		'negDeep': 'Danger, Compulsion, Torment, Evil, Bad Human',
    'n': 2
	},
	3: {
		'name': 'Ansuz',
		'literal': 'Odin, Wisdom',
		'blurb': 'This shows you have the insight needed.',
		'deep': 'True Vision, Insight, Communication',
		'negBlurb': 'Misunderstanding and manipulation is shown.',
		'negDeep': 'Misunderstanding, Delusion, Vanity, Boredom',
    'n': 3
	},
	4: {
		'name': 'Raidho',
		'literal': 'Wagon, Chariot',
		'blurb': 'A journey is shown with this rune.',
		'deep': 'Travel, Evolution, Perspective Change',
		'negBlurb': 'Your rune shows delocation, and seperation with in and out.',
		'negDeep': 'Rigidity, Stasis, Possible Death',
    'n': 4
	},
	5: {
		'name': 'Kenaz',
		'literal': 'Beacon, Torch',
		'blurb': 'This Rune shows the light and truth.',
		'deep': 'Creativity, Revalation, Inspiration',
		'negBlurb': 'Darkness will bring instability. Watch out for false hope.',
		'negDeep': 'Disease, Breakup, False Hope, Exposure',
    'n': 5
	},
	6: {
		'name': 'Gebo',
		'literal': 'Gift, Presents',
		'blurb': 'Gifts and Offerings are yours to obtain.',
		'deep': 'Relationships, Contracts, Sacrafice, Generosity',
		'negBlurb': 'This rune shows greed and obligations. Too much on one side.',
		'negDeep': 'Loneliness, Dependence, Obligation, Bribery',
    'n': 6
	},
	7: {
		'name': 'Wunjo',
		'literal': 'Joy, Happiness',
		'blurb': 'A moment of enjoyment and smiles.',
		'deep': 'Fellowship, Harmony, Glory, Pleasure',
		'negBlurb': 'Sorrow and pain fills this rune, watch out for rage.',
		'negDeep': 'Sorrow, Strife, Intoxication, Rage, Delirium',
    'n': 7
	},
	8: {
		'name': 'Hagalaz',
		'literal': 'Hail, Snow-storm',
		'blurb': 'Uncontrolled Forces are brought by this.',
		'deep': 'Destruction, Weather, Controled Crisis',
		'negBlurb': 'Pain and Loss is shown in this rune.',
		'negDeep': 'Stagnation, Loss of Power, Pain, Suffering, Hardship',
    'n': 8
	},
	9: {
		'name': 'Nauthiz',
		'literal': 'Need, Want',
		'blurb': 'Your endurance is needed for the rune.',
		'deep': 'Delays, Confusion, Power to overcome',
		'negBlurb': 'Depravity and Want is shown. Reflect on the issue.',
		'negDeep': 'Necessity, Want, Depravity, Need, Emotional Hunger',
    'n': 9
	},
	10: {
		'name': 'Isa',
		'literal': 'Ice, Snow',
		'blurb': 'A challenge or struggle is set for you.',
		'deep': 'Challenge, Waiting, Standstill, Blocks',
		'negBlurb': 'Treachery and Deceit are coming.',
		'negDeep': 'Ego-Mania, Dullness, Illusion,  Stealth, Ambush',
    'n': 10
	},
	11: {
		'name': 'Jera',
		'literal': 'A Year, Good Harvest',
		'blurb': 'Calming times and good reaping comes.',
		'deep': 'Prosperity, Success Earned, Fruitful Season',
		'negBlurb': 'Sudden Setbacks and poverty are shown by the rune.',
		'negDeep': 'Repetition, Bad Timing, Reversal,  Conflict',
    'n': 11
	},
	12: {
		'name': 'Eihwaz',
		'literal': 'Yew Tree, Steel',
		'blurb': 'The Rune shows unbending and unbreaking.',
		'deep': 'Reliability, Trustworthiness, Endurance',
		'negBlurb': 'Confusion is brought forward by this.',
		'negDeep': 'Confusion, Destuction, Weakness',
    'n': 12
	},
	13: {
		'name': 'Perthro',
		'literal': 'Dice Box, Unknown',
		'blurb': 'The unknown shadows this rune. Be wary.',
		'deep': 'Uncertain, Mystery, Occult, Destiny',
		'negBlurb': 'The same will repeat, Stagnation into malaise.',
		'negDeep': 'Addiction, Stagnation, Loneliness, Malaise',
    'n': 13
	},
	14: {
		'name': 'Algiz',
		'literal': 'Elk, Protection',
		'blurb': 'Defense and Protection are brought forward.',
		'deep': 'Defense, Guarding,  Awakening, Higher Life',
		'negBlurb': 'This rune shows a warning, something taboo.',
		'negDeep': 'Hidden Danger, Warning, Turning Away',
    'n': 14
	},
	15: {
		'name': 'Sowilo',
		'literal': 'The Sun, Light',
		'blurb': 'Great Goals and Health show future success.',
		'deep': 'Life-Force, Health, Success, Victory',
		'negBlurb': 'Goals planned are shown to fail. Prepare yourself.',
		'negDeep': 'False Goals, Bad Counsel, Retribution',
    'n': 15
	},
	16: {
		'name': 'Tiwaz',
		'literal': 'Tyr, Sky',
		'blurb': 'Leadership and Honor are given with this.',
		'deep': 'Justice, Analysis, Self-Sacrifice, Rationality',
		'negBlurb': 'Passion is dwindling, to where seperation can happen.',
		'negDeep': 'Seperation, War, Over-Analysis, Failure',
    'n': 16
	},
	17: {
		'name': 'Berkano',
		'literal': 'Berchta, Abundance',
		'blurb': 'Personal Growth or Renewal is to come.',
		'deep': 'Birth, Total Growth, Regeneration, New Beggingings',
		'negBlurb': 'Abandon and Loss of Control are on the horizon.',
		'negDeep': 'Sterility, Stagnation, Loss of Control, Deceit',
    'n': 17
	},
	18: {
		'name': 'Ehwaz',
		'literal': 'Horse, Twins',
		'blurb': 'Large change is to come with this rune.',
		'deep': 'Transportation, Movement, Change, Marriage',
		'negBlurb': 'Mistrust and Betrayal can happen with this rune.',
		'negDeep': 'Disharmony, Betrayal, Reckless Haste, Confined',
    'n': 18
	},
	19: {
		'name': 'Mannaz',
		'literal': 'Man, Humankind',
		'blurb': 'Social cooperation, a team, is needed.',
		'deep': 'Intellect, Creation, Skill, Ability, Awareness',
		'negBlurb': 'Expect no help from others with this rune.',
		'negDeep': 'Depression, Mortality, Blindness, Calculation',
    'n': 19
	},
	20: {
		'name': 'Laguz',
		'literal': 'Water, River',
		'blurb': 'Reciving mysterious growth and change.',
		'deep': 'Dreams, Fantasy, Organic Growth, Deep',
		'negBlurb': 'You may be making wrong decisions or have poor judgement.',
		'negDeep': 'Fear, Avoidance, Madness, Obession, Despair, Sickness',
    'n': 20
	},
	21: {
		'name': 'Ingwaz',
		'literal': 'Ing, Earth',
		'blurb': 'This rune shows a home, a family, or you.',
		'deep': 'Virtues, Common Sense, The Home, Rest',
		'negBlurb': 'Labor and Work are the rune\'s reading. Toiling is happening.',
		'negDeep': 'Impotence, No Movement, Labor, Work, Slavery',
    'n': 21
	},
	22: {
		'name': 'Dagaz',
		'literal': 'Day, Dawn',
		'blurb': 'A sudden Breakthrough will happen.',
		'deep': 'Awakening, Clarity, Power to Change, Release',
		'negBlurb': 'An ending is coming.',
		'negDeep': 'Limit, Full Circle, Hopelessness, Blindness',
    'n': 22
	},
	23: {
		'name': 'Orthala',
		'literal': 'Ancenstral Property, Heritage',
		'blurb': 'Remember the past, remember what has happened.',
		'deep': 'Experience, Aid by Elders, Source of Saftey, Order',
		'negBlurb': 'This rune states you do what you are bound to do.',
		'negDeep': 'Bad Karma, Prejudice, Totalitarianism',
    'n': 23
	}
}
/* custom rune spread functions */
const to = (num, el) => {
  let current = document.querySelectorAll('.runesWrapper .rune').length
  if(num >= current) {
    for (let i = 0; i < num - current; i++) {
      runeContainer1.appendChild(makeRune())
    }
  } else {
    for (let i = current - num; i > 0; i--) {
      document.querySelectorAll('.runesWrapper .rune')[0].remove();
    }
  }
}
const makeRune = () => {
  let img = document.createElement('div')
  img.classList.add('img')
  let desc = document.createElement('div')
  desc.classList.add('desc')
  let rune = document.createElement('div')
  rune.classList.add('rune')
  rune.appendChild(img)
  rune.appendChild(desc)
  return rune
}
/* generating runes */
const fetchRunes = (num) => {
  let r = []
  let i = 0
  while(i < num) {
    let randRune = randomRune();
    if (!r.includes(randRune)) { r.push(randRune); i++ }
  }
  return r
}
const randomRune = () => {
  let n = Math.floor(Math.random() * 24)
  if((Math.floor(Math.random() * 1000)) < 200) {
    n = -n
  }
  return n
}
const genSpread = (el, rNum) => {
  /* if cookie exists, do some stuff first */
  el = el.closest("section")
  let c = el.classList[0]
  let r = fetchRunes(rNum)
  let rr = []
  r.forEach((a) => {
    if(a < 0) { rr.push([false, runes[Math.abs(a)]]) } else { rr.push([true, runes[a]]) }
  })
  if (el.classList.contains('daily')) {
    addCookie(r)
  }
  let l = document.querySelectorAll(`.${c} .runeContainer>.rune`)
  for(let i = 0; i < l.length; i++) {
    if(rr[i][0] === false) {
      l[i].innerHTML = `<div class="img" style=\"background-image:url(\"images/Numbered/${rr[i][1].n < 10 ? '0'+rr[i][1].n : rr[i][1].n}.png\")\"></div><div class="desc">${rr[i][1].negBlurb}</div>`
    } else {
      l[i].innerHTML = `<div class="img" style=\"background-image:url(\"images/Numbered/${rr[i][1].n < 10 ? '0'+rr[i][1].n : rr[i][1].n}.png\")\"></div><div class="desc">${rr[i][1].blurb}</div>`
    }
  }
}
/* util funcs */
const addCookie = (arrNum) => {

}
const parseCookie = () => {

}