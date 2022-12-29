
// lore array
var lore = [
  {content: 'Gaze through me, and witness questions unanswered.', person: 'Mask Inscription', personAdd: '', card: 'Seer\'s Mask'},
  {content: '...Air followed, filling the empty world...', person: 'The Genesis of Sky', personAdd: 'stanza 2', card: 'Air Rune'},
  {content: '...Fire raged into being, and there was life.', person: 'The Genesis of Sky', personAdd: 'stanza 4', card: 'Fire Rune'},
  {content: 'In true darkness, only the light of one\'s own soul can show the way.', person: 'Jakintsu', personAdd: '', card: 'Alight'},
  {content: 'Dreambeast pelts are beautiful... but the way they stick to your skin... it\'s like they\'re trying to replace it.', person: 'Hawkins, Merchant', personAdd: '', card: 'Amalgam'},
  {content: 'A powerful, but easily dispelled incantation, often used by mages in-training to impress their juniors.', person: '', personAdd: '', card: 'Arcane Ray'},
  {content: 'I do not know its origins. I know only that it helps those in need, so I count it as my ally.', person: 'Jakintsu', personAdd: '', card: 'Avatar of Light'},
  {content: 'Some creatures don\'t need teeth or claws. Their size alone protects them.', person: 'Titus', personAdd: '', card: 'Axolotl'},
  {content: 'A conglomerate of self-sustaining synthetic lifeforms, the Iron Hive has operated autonomously for centuries.', person: 'Ari', personAdd: 'Notes', card: 'B Unit'},
  {content: 'Behind you!', person: 'Samya', personAdd: '', card: 'Backstab'},
  {content: 'In the dreamfield, nightmares can do far worse than merely unnerve...', person: 'Axel', personAdd: '', card: 'Bad Dreams'},
  {content: 'My life is my own. I will not be cowed by the fears and laws of tyrants.', person: 'Zoey', personAdd: '', card: 'Blitz'},
  {content: 'Gaze through me, and witness death unfolding.', person: 'Mask Inscription', personAdd: '', card: 'Bone Mask'},
  {content: 'Best case, it saves your life. Worst case, at least they\'ve got something to carry your body back on.', person: 'Bill', personAdd: 'Armorsmith', card: 'Buckler Up'},
  {content: 'The call is ever-present. It is the crying of a lost child, the pleading of the beggar, the prayers of the weak.', person: 'Ada', personAdd: '', card: 'Call to Action'},
  {content: 'Gaze through me, and see Sky unbroken.', person: 'Mask Inscription', personAdd: '', card: 'Canny Mask'},
  {content: 'People will naturally check their backs in a forest, but they seldom look up.', person: '', personAdd: '', card: 'Canopy Archer'},
  {content: 'The Wu-kin hold the keys to vaults full of secrets, but choose to use them as clubs instead.', person: 'Iris', personAdd: '', card: 'Century Key'},
  {content: 'Treefolk seedlings form the bulk of the Etherwald\'s rank and file, eagerly assisting the Dryads in their duties.', person: '', personAdd: '', card: 'Charmling'},
  {content: '...His life\'s story written at last, he headed to bed... and forgot to snuff out the candle upon his desk...', person: 'The Elder and the Candle', personAdd: '', card: 'Cinder'},
  {content: 'Ain\'t nuthin werfs in awll of Skyee tha\'n an angree clawe bar', person: 'Dave Three Teeth', personAdd: 'Bear Wrestler', card: 'Claw Bear'},
  {content: 'I was also born without feathers or wings, but I will still seek the Sky.', person: 'Samya', personAdd: 'to Guru', card: 'Cloud Kid'},
  {content: 'Grave robbing is such an ugly term. I prefer \'financially motivated exhumation.', person: '', personAdd: '', card: 'Crypto'},
  {content: '...and through it all, Dark waited, knowing all would belong to it in the end.', person: 'The Genesis of Sky', personAdd: 'stanza 8', card: 'Dark Rune'},
  {content: 'We\'ve all seen \'The Cube,\' but no one really knows what it is... Well, Banjo might, but he\'s not telling.', person: 'Mira', personAdd: '', card: 'Doubling Cube'},
  {content: '...Earth rose up from below, giving Sky form.', person: 'The Genesis of Sky', personAdd: 'stanza 3', card: 'Earth Rune'},
  {content: 'To the wolf, shivering in the cold, Qui gave a flame that would never die out', person: 'The Quiology', personAdd: '5:19', card: 'Ember Wolf'},
  {content: 'Ada saved my life when I was young. Since that day, I\'ve dedicated it to her ideals.', person: 'Piper', personAdd: 'follower of Ada', card: 'Engine Blade'},
  {content: 'If you would know entry to the Etherwald, leave your weapons at the door.', person: 'Miss Aya', personAdd: '', card: 'Ensnare'},
  {content: 'INTRUDER! HALT OR FACE IMMEDIATE MOLECULAR DESTABILIZATION!', person: 'Armis Drone Alert', personAdd: '', card: 'Eye Spy'},
  {content: '...On the final day, the sun shone so brightly that even the stones rose to pay respect.', person: 'The tale of Qai', personAdd: '', card: 'Flashbang'},
  {content: 'Exo Assassins are especially feared. They are duty-bound to kill their target', person: '', personAdd: '', card: 'Fly guy'},
  {content: 'Mai and I compete as rivals, but we do it side by side, hand in hand.', person: 'Mira', personAdd: '', card: 'Forcefield'},
  {content: 'Vulpine mages covet foxes as their familiars, and seek to win them over with treats, like milk, honey, or bacon.', person: '', personAdd: '', card: 'Fox Familiar'},
  {content: 'Flow like water, cut like ice.', person: 'Samya', personAdd: '', card: 'Frost Clas'},
  {content: 'Though Ethera loves all life, it\'s fair to say the Sporekin have a special place in her heart, and my own.', person: 'Bouran', personAdd: '', card: 'Fun Guy'},
  {content: 'I\'ve often watched him swat that little ball, stop, study it, tweak it slightly, and swat it off again.', person: 'Mira', personAdd: '', card: 'Gato'},
  {content: 'They call us tyrants, but who else are they going to call to save them?', person: 'Armis General', personAdd: '', card: 'Ghost Duster'},
  {content: 'Life is a contest, my dear, and one I intend to win.', person: '', personAdd: '', card: 'Glitter'},
  {content: 'Hatred is a blade that cuts both ways.', person: '', personAdd: '', card: 'Grim Reprisal'},
  {content: 'Students of the \'Origin Thesis\' hold that all things in Sky can be reduced to a sequence of 0\'s and 1\'s.', person: '', personAdd: '', card: 'Hax'},
  {content: 'Free exchange of ideas is usually anything but.', person: 'Axel', personAdd: '', card: 'Hydrate'},
  {content: 'The Primalan believe themselves descendants of the Qui. Pah! They\'re just a bunch of Magpies.', person: 'Horik', personAdd: '', card: 'Icaru'},
  {content: 'The slightest touch of my homeland is enough to freeze the hearts of lesser beings.', person: 'Horik', personAdd: '', card: 'Icy Touch'},
  {content: 'Every time I closed my eyes, visions of horrors yet to come danced before them...', person: 'Axel', personAdd: '', card: 'Insomnia'},
  {content: 'Jacko\'s treats are usually thinly veiled tricks.', person: '', personAdd: '', card: 'Jacko'},
  {content: 'I miss the days when the worst thing I had to worry about while reading was a papercut.', person: 'Mai', personAdd: '', card: 'Kook Book'},
  {content: 'Regarded as heralds of a harsh winter\'s end, the Valkyrn were a common sight before Cryogen\'s reign.', person: 'Histories of Sky', personAdd: '', card: 'Krystal'},
  {content: 'From nothingness came Light, and Sky was born...', person: 'The Genesis of Sky', personAdd: 'stanza 1', card: 'LIght Rune'},
  {content: 'The mages of the Wildlands tend to be hotheaded... often quite literally.', person: 'Mai', personAdd: 'field journal', card: 'Matchstick'},
  {content: 'It\'s a simple creation, really. Just an arc capacitor linked to a neural applicator and run through a talcicite shell', person: 'Mai', personAdd: '', card: 'Mechurai'},
  {content: 'Metal crystallized, bringing order and stability...', person: 'The Genesis of Sky', personAdd: 'stanza 6', card: 'Metal Rune'},
  {content: 'Finally, Mind was born, and Sky came alive with thought and meaning...', person: 'The Genesis of Sky', personAdd: '', card: 'Mind Rune'},
  {content: 'Helped fertilize the jungle', person: 'Saurian Saying, meaning \'Was Eaten by Plants,\'', personAdd: '', card: 'Mulch'},
  {content: 'I\'ve traveled all across sky, but no matter how far or wide I roam, he\'s always one step ahead of me.', person: 'Banjo', personAdd: '', card: 'Niko'},
  {content: 'Tracking Ember Wolves isn\'t hard. Just follow the ashes. Catching them, on the other hand...', person: 'Scorchbrow', personAdd: 'Wildland Hunter', card: 'On the Hunt'},
  {content: 'Why respect Skyweavers, when my potions can do anything they can?', person: 'Grumble', personAdd: 'Potion Seller', card: 'Potion Seller'},
  {content: 'Your freedom is an illusion. You are a puppet, bound by the threads of another\'s will.', person: 'Zoey', personAdd: 'to Mai', card: 'Puppet Strings'},
  {content: 'Vulpine funerals are grand affairs. At times, the light of their burial pyres can blot the stars from the sky.', person: 'Axel', personAdd: '', card: 'Pyrecrafter'},
  {content: 'If blessed by our mother, even a single drop of dew can heal any ill.', person: 'Amaruath', personAdd: '', card: 'Rosewater Charm'},
  {content: 'Savannah Leoran share the manes of their lion ancestors, as well their short tempers.', person: 'Iris', personAdd: 'Journals', card: 'Saber'},
  {content: 'The Lapin may be incredible mechanics, but when it comes to technology, the Tortugan are without equal.', person: 'Ari', personAdd: '', card: 'Scooter'},
  {content: 'Scorch is the first incantation Vulpine mages must learn. Though simple, it is an invaluable tool.', person: '', personAdd: '', card: 'Scorch'},
  {content: 'Our mother had six children, but one is lost. Each day without them tears her apart.', person: 'Hymn of the Hexahedron', personAdd: '', card: 'See Shore'},
  {content: 'Even the Dreamers, children of the Dreamfield, can become lost in its maddening influence.', person: 'Histories of Sky', personAdd: '', card: 'Shade'},
  {content: 'Humans train for years to harness the lightning within. Leoran are born connected to their inner spark.', person: 'Zam', personAdd: '', card: 'Shockpaw'},
  {content: 'You haven\'t lived until you\'ve had Oni Firewine! Though, you might not live much after, either.', person: 'Zoey', personAdd: '', card: 'Sick Burn'},
  {content: 'Dear friend, those goods look so very heavy. You should let me carry them... Wouldn\'t want you to get hurt...', person: '', personAdd: '', card: 'Skeeter'},
  {content: 'The Hoplite don\'t like being called \'cute.\' I learned that the hard way.', person: '', personAdd: '', card: 'Skip'},
  {content: 'I possess an innate desire to move at extremely high velocity', person: 'Speedster Motto', personAdd: '', card: 'Speedster'},
  {content: 'Gaze through me, and witness life unending.', person: 'Mask Inscription', personAdd: '', card: 'Sphinx Mask'},
  {content: 'Our mother\'s hand knows only tenderness. Mine is far less gentle.', person: 'Amaruath', personAdd: '', card: 'Stone Fist'},
  {content: 'What the raptors lack in discipline and finesse, they make up for with raw power and spirit.', person: 'Fox', personAdd: '', card: 'Strike Down'},
  {content: 'The battle is won in the mind before the first blow is struck.', person: 'Surit Teaching', personAdd: '', card: 'Tactitian'},
  {content: 'Born during an ancient age of ice, Thanites carry the memory of that time within themselves.', person: '', personAdd: '', card: 'Thanite'},
  {content: 'I\'m not big on toil, but I\'m always down to make some trouble!', person: 'Zoey', personAdd: '', card: 'Toil & Trouble'},
  {content: '"Putting the \'Death\' in Death Metal."', person: 'Undercroft Poet\'s Motto', personAdd: '', card: 'Tragic Poet'},
  {content: '...Qui saw horse, tethered to the earth, and fashioned him wings of light, that he might ride the winds...', person: 'The Quiology', personAdd: '1:18', card: 'Unikron'},
  {content: 'As with most things, its true beauty is realized only in death.', person: 'Sitti', personAdd: '', card: 'Vialet'},
  {content: '...Water surged into Sky, and there was peace...', person: 'The Genesis of Sky', personAdd: 'stanza 5', card: 'Water Rune'},
  {content: 'DANGER: DON\'T FEED THE PLA...', person: 'Remains of a half-eaten jungle signpost', personAdd: '', card: 'Whipvine'},
  {content: 'Many are enraptured by the dream of flying... but few ever consider the nightmare of falling.', person: 'Ari', personAdd: '', card: 'Wing construct'},
  {content: 'The pain of their sting is horrific, but the real terror is the numbness that follows.', person: 'Iris', personAdd: '', card: 'Yellow Jacket'},
  {content: 'Not every light points the way to safety.', person: '', personAdd: '', card: 'Angler'},
  {content: 'Endure the fire\'s fury, and become one with it. Prove yourself worthy of its blessing.', person: 'Tiamat', personAdd: 'to Ada', card: 'Anoint in Flame'},
  {content: 'The Qui are long gone, but their servitors still wait, and watch. For what, even I am not sure.', person: 'Lotus', personAdd: '', card: 'Bauble'},
  {content: 'Thousands gather to watch Rock play, hoping to catch even a wink, or blown kiss of recognition from her.', person: '', personAdd: '', card: 'Beloved'},
  {content: 'The Cygnan train and study 18 hours a day, from birth to death. Not much of a life, really.', person: 'Zoey', personAdd: '', card: 'Birb'},
  {content: 'Of course, wraiths are merely an old children\'s tale!', person: 'Icaru', personAdd: 'Currently Missing', card: 'Bogi Bogi'},
  {content: 'The Ashlands are filled with innumerable stone guardians, all standing motionless, waiting...', person: '', personAdd: '', card: 'Boulder'},
  {content: 'Fate is cruel indeed, to bless a creature with such thick armor, and curse it with such rich flavor.', person: 'Squiddy', personAdd: 'Privateer', card: 'Breaker Crab'},
  {content: 'May your soul be as fire, warming your beloved, and burning your foes to ash.', person: 'Oni Blessing', personAdd: '', card: 'Brimstone'},
  {content: '\'Bubble Crabs\' can store air in their shells, allowing them to serve as undersea transport for land dwellers.', person: 'Histories of Sky', personAdd: '', card: 'Bubbles'},
  {content: 'My body and mind are Vulpine. But it was my Oni brethren who stoked the fire within my soul.', person: '', personAdd: '', card: 'Burning Blade'},
  {content: 'Promises mean nothing here. Deals are made in coin and carrion, bound in bone and blood.', person: 'Corvid Merchant', personAdd: '', card: 'Carrion Crow'},
  {content: 'Like a chain, authority\'s grasp can seem inescapable. Yet break a single link, and it all unravels.', person: 'Zoey', personAdd: '', card: 'Chain Golem'},
  {content: 'The Vulpine language makes no distinction between its words for \'fire\' and \'life\'.', person: 'Histories of Sky', personAdd: '', card: 'Charkram'},
  {content: 'Some dogs dig for bones. Mine digs for secrets long-forgotten', person: 'Ari', personAdd: '', card: 'Cobalt'},
  {content: 'You won\'t believe the perfectly good things people go and bury in the ground!', person: '', personAdd: '', card: 'Coffin Moth'},
  {content: 'Count yourself fortunate you\'ve never had to deal with an angry Kook Book when doing research', person: 'Mai', personAdd: '', card: 'Cross Reference'},
  {content: 'Acolytes of the Hexahedron believe Sky bore forth Six forces - Strength, Agility, Wisdom, Heart, and Intellect.', person: 'Histories of Sky', personAdd: '', card: 'Cube Junior'},
  {content: 'Hush now, you bucket of bolts.', person: 'Banjo', personAdd: '', card: 'Deactivate'},
  {content: 'My path is one that requires absolute conviction. To look back, to hesitate, is to accept death.', person: 'Horik', personAdd: '', card: 'Dead Weight'},
  {content: 'In the name of the Great-Father, I return you to the earth', person: 'Sven', personAdd: 'Acolyte of Amaruath', card: 'Earth Spike'},
  {content: 'Ethera\'s wardens wander all across sky, sharing their mother\'s gift of life.', person: 'Titus', personAdd: '', card: 'Earth Warden'},
  {content: 'I wonder... if a tree falls on you, will you make a sound?', person: 'Miss Aya', personAdd: '', card: 'Elderfall'},
  {content: 'I made it to ward off Striges, and convert them into something more... useful.', person: 'Mira', personAdd: '', card: 'Electron'},
  {content: 'From nothingness all are born, and to nothingness all will return.', person: 'Allbane', personAdd: '', card: 'Eradicate'},
  {content: 'You\'ve already got... one, two, three... seven eyes! Leave mine alone!', person: 'Niko', personAdd: '', card: 'Eye Spider'},
  {content: 'Relying on weapons is folly. You must be ready to fight with whatever is available, whenever you must.', person: 'Guru', personAdd: 'to Iris', card: 'Fan Dancer'},
  {content: 'While the Ifrit carry great wisdom, few can endure the agony it brings.', person: 'Titus', personAdd: '', card: 'Firesight'},
  {content: '\'Smallest\' is a relative term, after all.', person: 'Ari', personAdd: '', card: 'Fish'},
  {content: 'Harts and Does migrate to the Etherwald each year to bear and raise their young. It is a most joyous time.', person: 'Ivy', personAdd: '', card: 'Friendly Fawn'},
  {content: 'Fire is life. Fire is death. Fire is the tie that binds them together.', person: 'Vulpine Teaching', personAdd: '', card: 'Fuji'},
  {content: 'Ethera knows no enemies. All who raise arms against the Etherwald become part of it in the end.', person: 'Miss Aya', personAdd: '', card: 'Germinate'},
  {content: 'In Rashida, cats serve as the messengers of the royal family. As such, harming one is a grave crime.', person: 'Histories of Sky"In Rashida, cats serve as the messengers of the royal family. As such, harming one is a grave crime.', personAdd: '', card: 'Giza'},
  {content: 'Do not disturb those claimed by Cryogen. Unless, of course, you wish to join their eternal slumber.', person: 'Sitti', personAdd: '', card: 'Glacia'},
  {content: 'The Hex Plague is so saturated here that even the soil itself has succumbed.', person: 'Armis field report', personAdd: '', card: 'Grimstone'},
  {content: 'Juvenile Maw Worms\' diets make them important natural recyclers of flesh and bones.', person: '', personAdd: '', card: 'Grubbs'},
  {content: 'Saurian shamans specialize in rousing a creature\'s primal soul, or \'Anima.\'', person: '', personAdd: '', card: 'Grunk'},
  {content: 'The Primalan laughed at her, Cygnan chided her, Wu-Kin cautioned her. The Sky welcomed her.', person: '', personAdd: '', card: 'Gus'},
  {content: 'The Knight-Errants of Leora travel across all of Sky, seeking a worthy champion to follow.', person: '', personAdd: '', card: 'Halycon'},
  {content: 'Not to be confused with \'Hanny\', Hannah is one of Sky\'s most (in)famous saboteurs.', person: '', personAdd: '', card: 'Hannah'},
  {content: 'Some who explore the Dreamfield blindfold themselves, so as not to be deceived by their own eyes.', person: 'Iris', personAdd: '', card: 'Headcase'},
  {content: 'As a child, I loved dolls. Especially plucking off their eyes, and tearing their stitches to see what was inside.', person: 'Zoey', personAdd: '', card: 'Hexed Doll'},
  {content: 'Come now young ones, seconds are served!...', person: 'Morgana', personAdd: 'Broodwitch', card: 'Homebrew'},
  {content: 'Relax. That archer is over two leagues away. We\'re perfectly safe up here', person: 'Armis sentry', personAdd: 'last words', card: 'Huntaro'},
  {content: 'Advancements in Xavian magic removed the spell\'s formerly detrimental recharge time.', person: 'Banjo', personAdd: '', card: 'Hyper Beam'},
  {content: 'Stray into the Dreamfield, and you may discover that you were the dream all along.', person: 'Primalan Superstition', personAdd: '', card: 'Identity Crisis'},
  {content: 'Don\'t presume that cowering behind the strong will save you from me.', person: 'Bouran', personAdd: '', card: 'Impale'},
  {content: 'It\'s said the Oni were the first to steal Qui\'s secret of fire.', person: 'Histories of Sky', personAdd: '', card: 'Incinerate'},
  {content: 'Ethera\'s daughters may appear peaceful and serene, but even the most beautiful rose has its thorn.', person: 'Mira', personAdd: '', card: 'Ivy'},
  {content: 'The Lapin view technological progress as a contest, with each individual seeking to outdo the other.', person: '', personAdd: '', card: 'Jackrabbit'},
  {content: 'Let Pirates keep their gold and jewels. The sea\'s greatest treasures are far subtler.', person: 'Auntuga', personAdd: '', card: 'Life Stream'},
  {content: 'No shield of Iron or Wood can match one born of Light.', person: 'Kha Met', personAdd: '', card: 'Light Knight'},
  {content: 'Capturing the lightning is easy. Controlling it once released is impossible.', person: 'Mai', personAdd: '', card: 'Lightning Vial'},
  {content: 'Be wary of dreambeasts. What seems a cat one moment may be a writhing mass of eyeballs and teeth the next.', person: 'Lotus', personAdd: '', card: 'Luna'},
  {content: 'Objects that absorb too much Mental energy can take on a life of their own, becoming \'Animata\'.', person: 'Mira', personAdd: 'Research Notes', card: 'Mad Hat'},
  {content: 'The greatest battle is that which we must fight against ourselves.', person: 'Iris', personAdd: '', card: 'Mad Vibes'},
  {content: 'Gaze through me, and witness depths unfathomable.', person: 'Mask Inscription', personAdd: '', card: 'Mer Mask'},
  {content: 'Horik is like a father to me, but the path he\'s on... It can only end in further heartbreak.', person: 'Ada', personAdd: 'to Bouran', card: 'Molten Heart'},
  {content: 'Seed becomes sprout, sprout becomes tree, tree returns to seed, and so the cycle begins anew', person: 'Guru', personAdd: '', card: 'Montage'},
  {content: 'Subject exhibited greatly amplified physical prowess... for 10 seconds... before melting from the inside out.', person: 'Sitti', personAdd: 'Research Notes', card: 'Mutate'},
  {content: 'The Surit, first of the sands, revere light in all its aspects, seeing it as the origin of all things.', person: '', personAdd: '', card: 'Nefurti'},
  {content: 'Never forget that Darkness first stole the secrets of poison from the Earth...', person: 'Ancient Proverb', personAdd: '', card: 'Nettle'},
  {content: 'The beauty of death feeds the insatiable hunger of life.', person: 'Oath of the Crescent Moon', personAdd: 'stanza 19', card: 'Noctourna'},
  {content: 'In the Etherwald, even the stones sway to the rhythm of our great mother.', person: 'Titus', personAdd: '', card: 'Opal Golem'},
  {content: '...A straight flush, huh? Too bad, I\'ve got a hand that\'ll stab right through that...', person: 'Fox', personAdd: '', card: 'Pair of Jacks'},
  {content: 'Pistol Shrimp are maverick hunters. A blast from their sonic cannon feels like being hit by a rock, man.', person: 'Armis Recruit 20XX', personAdd: '', card: 'Pistol Shrimp'},
  {content: 'Those who consume eldritch knowledge risk being consumed themselves.', person: '', personAdd: '', card: 'Ponderous'},
  {content: 'When seeking knowledge, never lose sight of the reason why you sought it. Such paths lead only to suffering.', person: 'Banjo', personAdd: 'to Ari', card: 'Professor'},
  {content: 'Such creatures stalk the dreamfield, hunting minds fat with wisdom, and laden with secrets.', person: 'Lotus', personAdd: '', card: 'Psyche'},
  {content: 'The elementals were the first beings to rise after the dragons...', person: 'Histories of Sky', personAdd: '', card: 'Rage Cage'},
  {content: 'In the Undercroft, bursts of toxic miasma bring sudden hallucinations, euphoria, and death.', person: '', personAdd: '', card: 'Rave'},
  {content: 'Strength is not born. It must be nurtured and cared for, that it may one day bloom in defense of those in need.', person: 'Ada', personAdd: '', card: 'Redwood'},
  {content: 'The reefs of our ocean home offer endless hiding places for prey and predator alike.', person: 'Auntuga', personAdd: '', card: 'Reefus'},
  {content: 'Ensure you find the right priestess for our rites this time, or I\'ll have to write to HR!', person: 'Necromancer\s missive', personAdd: '', card: 'Rite Knight'},
  {content: 'If you mistake a Siren for a Mermaid, be prepared to pay with your skin.', person: 'Capt. Snapjaw', personAdd: '', card: 'Shoal Siren'},
  {content: 'The Oni have a rigid caste system. Shoguns sit at the top, with some ruling entire mountain ranges.', person: 'Histories of Sky', personAdd: '', card: 'Shogun'},
  {content: 'The people of the wildlands seek to emulate the wolf in all its aspects.', person: 'Histories of Sky', personAdd: '', card: 'Shredder'},
  {content: 'To be self-sufficient is a virtue. To have allies by your side is a gift.', person: 'Ada', personAdd: '', card: 'Sidekick'},
  {content: 'To ride a Unikron is an unmatched honor. Only the Primalan have ever known such an honor.', person: 'Iris', personAdd: 'Journals', card: 'Sky Keeper'},
  {content: 'Swing once, cut twice.', person: 'Leoran blessing', personAdd: '', card: 'Slash'},
  {content: 'Let\'s see how you Armis swine enjoy the bite of your own shackles!', person: 'Zoey', personAdd: '', card: 'Snap Trap'},
  {content: 'All life is already driven by electricity. I merely convert raw energy into life.', person: 'Sparky', personAdd: 'Leoran Heretic', card: 'Sparky'},
  {content: 'Starfelidae foster meaningful communities with those around them. They\'re also amazing singers!', person: 'Mira', personAdd: 'Research Notes', card: 'Starfield'},
  {content: 'Well, there go neighborhood.', person: 'Grunk', personAdd: '', card: 'Stomp'},
  {content: 'So let me be the villain of their story. We will save them, whether they want it or not.', person: 'Sitti', personAdd: '', card: 'Subjugate'},
  {content: 'Aspire to change the future, but never forget those in the past, whose great deeds created your present.', person: 'Cygnan Teaching', personAdd: '', card: 'Sudden Gust'},
  {content: 'Individuality, family and freedom are distractions. I will give everything to The Cause. There is nothing else.', person: 'Armis Oath', personAdd: '', card: 'Suit Up'},
  {content: 'There is nothing in this world that will keep me from him. Step aside!', person: 'Horik', personAdd: 'to Ada', card: 'Sunder'},
  {content: 'Have you ever been struck by a fox moving at mach 10? It ain\'t fun, let me tell you.', person: 'Samya', personAdd: '', card: 'Supersonic'},
  {content: 'You may leave the Etherwald, but the Etherwald will never leave you.', person: 'Titus', personAdd: '', card: 'Take Root'},
  {content: 'Youth these days, so full of life... and far too eager to waste it.', person: 'Morgana', personAdd: 'Broodwitch', card: 'Teenage Witch'},
  {content: 'If you want to best a dreamer in battle, you\'ll need to be faster than the speed of thought', person: 'Mai', personAdd: '', card: 'Teleport'},
  {content: 'Well, well! It seems that that spell had had quite an effective effect after all!', person: 'Pandora', personAdd: '', card: 'Think Twice'},
  {content: 'May the eyes of the dreaming dead peer into our minds, and gift us their insight', person: 'Xavian Prayer', personAdd: '', card: 'Thought Leader'},
  {content: 'Blade Sentinels still stand guard by Armis\' throne, awaiting a prince who will never return.', person: 'Fox', personAdd: '', card: 'Throne Blade'},
  {content: 'The Vulpine\'s tricks are usually in jest. But in times of conflict, playful pastime gives way to lethal deception.', person: '', personAdd: '', card: 'Trailblazer'},
  {content: 'Few debate the wisdom of the Tortugan sages, but even fewer possess the patience to listen to them.', person: 'Ada', personAdd: '', card: 'Turtor'},
  {content: 'Without darkness, there can be no light. Without death, there can be no life. All are part of The Cycle.', person: 'Bouran', personAdd: '', card: 'Unfallow'},
  {content: 'Approach a sleeping Vyper.', person: 'Saurian expression meaning "fall for an obvious trap"', personAdd: '', card: 'Vyper Ambush'},
  {content: 'Death took everything from me. It\'s only fair that I repay death in kind.', person: 'Sitti', personAdd: '', card: 'Wed Dead'},
  {content: 'Arrogant rabble. Your fury shall break like a wave against the will of fate.', person: 'Axel', personAdd: '', card: 'Whelm'},
  {content: 'When the winds pick up, my best advice is to hold onto the biggest friend you have.', person: 'Gus', personAdd: '', card: 'Whisk Away'},
  {content: 'Like the wind itself, I am beholden to no one', person: 'Fox', personAdd: '', card: 'Wind Sword'},
  {content: 'Fools wish to change others. The wise wish to change themselves.', person: 'Lotus', personAdd: '', card: 'Wish Deck'},
  {content: 'The Xavian are an ancient people, as old and mysterious as the Dreamfield itself.', person: 'Lotus', personAdd: '', card: 'Xavi'},
  {content: 'In leaving Armis, I lost everything. Family, friends... purpose. But at last, I am free.', person: '', personAdd: '', card: 'Xero'},
  {content: 'Many fools sought to replicate the Qui\'s artificial life. Those who met with failure are the lucky ones.', person: 'Axel', personAdd: '', card: 'Xythe'},
  {content: 'My blade is the breaking wave, washing away all who would oppose me', person: 'Fox', personAdd: '', card: 'Aqua Sword'},
  {content: 'If Alcazar is a tiny lantern of knowledge, the Dreamer\'s Arcadia is the sun itself.', person: 'Lotus', personAdd: '', card: 'Archivist'},
  {content: 'Auntuga led the Tortugan through a golden millennia of prosperity. When she speaks, all fall silent.', person: '', personAdd: '', card: 'Auntuga'},
  {content: 'Sleep is natural, and necessary. Wraiths use that to their advantage.', person: 'Zoey', personAdd: '', card: 'Bane She'},
  {content: 'We call to Lobos! Sharpen our fangs and claws, that we may tear the life from our foes.', person: 'Wildland Prayer', personAdd: '', card: 'Blood Hunter'},
  {content: 'The wind is the breath of Sky itself, sweeping across the heavens and earth.', person: 'Wu-Kin Teaching', personAdd: '', card: 'Blow Away'},
  {content: 'It doesn\'t need eyes to hunt. It smells the electricity coursing within its prey.', person: 'Zoey', personAdd: '', card: 'Bolt'},
  {content: 'Some raptors cast off the trappings of society entirely, choosing to live as their ancestors once did.', person: 'Fox', personAdd: '', card: 'Browl'},
  {content: 'Relinquish all to fire. Hopes, Sorrows, Possessions, Past. When only ashes remain, you will be truly free.', person: 'Ifrit Wisdom', personAdd: '', card: 'Burn Out'},
  {content: 'When I\'m done, there will be nothing left of you to mourn.', person: 'Axel', personAdd: '', card: 'Burn to a Crisp'},
  {content: 'I picked this trick up from an old friend. How fast do you fancy your reflexes to be?', person: 'Fox', personAdd: '', card: 'Card Sling'},
  {content: 'I hope that my own legacy is blazing a path that others can follow.', person: 'Samya', personAdd: '', card: 'Champ'},
  {content: 'Chester can create gold, but in the end, that doesn\'t matter if you end up as its lunch.', person: 'Axel', personAdd: '', card: 'Chester'},
  {content: 'This world is like fire - Wild, destructive, temporary. I desire one of ice - Still, silent, eternal.', person: 'Cryogen', personAdd: '', card: 'Chill'},
  {content: 'When nature bares its claws against you, will you be able to bear the force of its fury?', person: 'Miss Aya', personAdd: '', card: 'Claw Swipe'},
  {content: 'See only Armis\' glory. Hear only Armis\' orders. Speak only Armis\' word.', person: 'Armis Guardmen\s oath', personAdd: '', card: 'Clone Army'},
  {content: 'Clear away the forest. Armis\' destiny does not yield for anyone, or anything.', person: 'Armis field orders', personAdd: '', card: 'Coal Dozer'},
  {content: 'It is not death I grant, but immortality. You will live forever - crystalline, shining, perfect.', person: 'Cryogen', personAdd: '', card: 'Cryogen\s Ire'},
  {content: 'Integration of Hex Plague samples into cybernetics was a success! Sidenote: Find new lab assistant.', person: 'Sitti', personAdd: 'Research Notes', card: 'Cygnus'},
  {content: 'In each wound, insight is earned. In each death, a lesson is learned.', person: 'Necromancer\s Oath', personAdd: '', card: 'Dark Adept'},
  {content: 'The blade of the heretic roared like thunder, struck like lightning, and the tyrant fell, defeated at last.', person: 'The Quiology', personAdd: '38:21', card: 'Dawn Blade'},
  {content: 'I\'ve done it! The recreation of free-willed artificial life is within my grasp!', person: 'Letter found in an empty lab', personAdd: '', card: 'Deep Xlice'},
  {content: 'All things are just ones and zeros my friend... and you\'re about to have a lot more zeros than ones.', person: 'Hax', personAdd: '', card: 'Defragment'},
  {content: 'Day 56: We have failed to curb the crystals growth. Perhaps this is our punishment for subverting nature', person: 'research notes', personAdd: 'final entry', card: 'Doctor Vile'},
  {content: 'I know he still wishes for me to come home, but I left such dreams behind long ago...', person: 'Axel', personAdd: '', card: 'Dreams Undreamt'},
  {content: 'The Exo have shown an intriguing immunity to the Hex Plague - Collect more test subjects.', person: 'Sitti', personAdd: '', card: 'Earwig'},
  {content: 'May water be your shield, and ice your sword.', person: 'Ursine Blessing', personAdd: '', card: 'Ebb & Flo'},
  {content: 'To Eel, who wanted only for food, Qui gave the secret to limitless progress.', person: 'The Quiology', personAdd: '2:87', card: 'Eletric Eel'},
  {content: 'Some scars cannot be healed. Some mistakes cannot be forgotten.', person: 'Ari', personAdd: '', card: 'Enfuego'},
  {content: 'Gaze through me, and witness might unconstrained.', person: 'Mask Inscription', personAdd: '', card: 'Ether Mask'},
  {content: 'I prefer the term \'Enthusiast,\' but it wouldn\'t fit on the mercenary guild register.', person: '', personAdd: '', card: 'Fan of Knives'},
  {content: '...Those who first came to wield fire were hailed as great prophets and leaders.', person: 'Histories of Sky', personAdd: '', card: 'Fire Noble'},
  {content: 'All swords are born of a forge\'s fire. Some more literally than others.', person: 'Ashtooth', personAdd: 'Oni Smith', card: 'Flame Sword'},
  {content: 'Destruction is a natural part of creation. New life blooms from the ashes of the old.', person: 'Tiamat', personAdd: '', card: 'Forest Fire'},
  {content: 'Got some rare things on sale, stranger! Good fortunes, bad fortunes, ... and rarest of all, the chance to change one\'s fortune.', person: '', personAdd: '', card: 'Fortune Seller'},
  {content: 'The Exo regard the waxing of the full moon as a judgement that reveals the weak and unworthy.', person: 'Axel', personAdd: '', card: 'Funeral Moon'},
  {content: 'Gaze through me, and witness rage unfettered.', person: 'Mask Inscription', personAdd: '', card: 'Fury Mask'},
  {content: 'Primalan sword-poets compose songs mid-battle, inspiring their allies to seek even greater glory.', person: '', personAdd: '', card: 'Gale'},
  {content: 'Individually, Gremlings are pests. But together, they can quickly become a plague.', person: 'Mira', personAdd: '', card: 'Getum Gang'},
  {content: 'Qui is spoken of across many cultures. The Rashidan know them as \'Qai, the first Sun of Sky.\'', person: 'Lotus', personAdd: '', card: 'Gift of Qai'},
  {content: 'In our Queen\'s frozen embrace, we will know not of death, only life eternal.', person: 'Oath of the cult of Cryogen', personAdd: '', card: 'glacial of Tomb'},
  {content: 'For better or worse, what Armis does in battle echoes across all of sky.', person: 'Ada', personAdd: '', card: 'Gladiator'},
  {content: 'We thank the sun. May she always warm our bellies, brighten our lives, and light our souls.', person: 'Leoran Prayer', personAdd: '', card: 'Glorious Mane'},
  {content: 'Only ONE rider per griffin - we don\'t want another \'incident\'', person: 'Warning at Armis HQ', personAdd: '', card: 'Griff Scout'},
  {content: 'The Hex Plague is intensifying. We cannot contain it much longer.', person: 'Armis Field Report', personAdd: '', card: 'Grimlord'},
  {content: 'Tend the garden, prune the weeds, watch over tomorrow\'s seeds.', person: 'Treefolk Rhyme', personAdd: '', card: 'Grover'},
  {content: 'To be trained by the Cygnan is both the greatest gift and harshest punishment anyone can receive.', person: 'Iris', personAdd: '', card: 'Honk'},
  {content: 'Four legs. Two Boosters. One Dog. Zero Brakes.', person: '', personAdd: '', card: 'Hot Dog'},
  {content: 'Young wraiths are the most dangerous. Lacking any self-control, they seek to take life energy by force.', person: '', personAdd: '', card: 'Howl Geist'},
  {content: 'Hold fast! It\'s just an illusion, it can\'t hurt us!', person: 'Oni Commander', personAdd: 'Last words', card: 'Illusion'},
  {content: 'Though we made it through the Dreamfield, something seems off with Dan.', person: 'Final missive of a lost Primalan flock', personAdd: '', card: 'Impostor'},
  {content: 'The Masked Dreamers sometimes visit the dreams of mortals, sowing seeds of inspiration in their minds.', person: '', personAdd: '', card: 'Inspirator'},
  {content: 'To be a true protector of the weak, one must possess both a tough exterior and soft heart.', person: 'Ada', personAdd: '', card: 'Ironshell'},
  {content: 'Blood for blood, life for life, death for death. Such is the truth of the world.', person: 'Axel', personAdd: '', card: 'Judgement'},
  {content: 'The Cygnan refer to humans trained by them as \'Lau,\' meaning \'Wanderer.\'', person: 'Histories of Sky', personAdd: '', card: 'Lau Sensei'},
  {content: 'Power is to longevity, as fire is to straw.', person: 'Cygnan Wisdom', personAdd: '', card: 'Lead Goblet'},
  {content: 'Some believe ancient Leoran kings learned a means of binding their souls into metal skins', person: 'Ari', personAdd: '', card: 'Leonitus'},
  {content: 'The Lapin are some of the greatest engineers in all of Sky. Just take care not to mention their height.', person: 'Ari', personAdd: '', card: 'Mechabun'},
  {content: 'No matter how the storm may rage above, deep beneath the waves, all is still.', person: 'Merfolk Proverb', personAdd: '', card: 'Meranda'},
  {content: 'Calling upon the moon via prism power can be a very transformative experience.', person: 'Banjo', personAdd: '', card: 'Moonbeam'},
  {content: 'Some monsters cannot be found. Some monsters find you.', person: '', personAdd: '', card: 'Nessie'},
  {content: 'I will protect the present from the past, so that the future may be saved.', person: 'Wu-Kin oath', personAdd: '', card: 'Nimbus'},
  {content: 'It is the sacred duty of the Poreling elders to ensure the youth of their society develop strong Morels.', person: '', personAdd: '', card: 'Old Fogy'},
  {content: 'Where the powers of light and life converge, darkness can hold no sway', person: 'Kha Mhet', personAdd: '', card: 'Olifant'},
  {content: 'The speaker of Kha Mhet, Olympia is known all across Sky as the greatest warrior of Rashida.', person: '', personAdd: '', card: 'Olympia'},
  {content: 'Raptor mages cast out of the heavens found dark and terrifying power in the Undercroft.', person: 'Histories of Sky', personAdd: '', card: 'Ominous Hoo'},
  {content: 'Dreams planted today, bloom into the reality of tomorrow.', person: 'Dryad teaching', personAdd: '', card: 'Orchid'},
  {content: 'Rumors surround Sitti like flies, yet no one seems to know when or how she became a Skyweaver.', person: 'Ada', personAdd: 'to Fox', card: 'Overmind'},
  {content: 'Pandora has traveled so far, and seen so much, yet she remembers it all.', person: 'Iris', personAdd: '', card: 'Pandora'},
  {content: 'Even if destiny is already written, I will take the quill that penned it and scribe my own anew.', person: 'Sitti', personAdd: '', card: 'Phoenix Plume'},
  {content: 'I learned much from the Vulpine. Foremost, that I shall never allow myself to be chained again.', person: 'Fox', personAdd: '', card: 'Rocket'},
  {content: '... So did Devilkin secede from their Oni brothers, choosing exile, rather than the tyranny of their rule.', person: 'History of the Devilkin-Oni War', personAdd: '', card: 'Rubble Devil'},
  {content: 'Move faster! Strike harder! Go beyond what is possible, and discover your true limits!', person: 'Fox', personAdd: '', card: 'Run Wild'},
  {content: 'In the Saurian jungle, the line between Flora and Fauna has become shockingly blurred.', person: 'Mira', personAdd: 'Research Notes', card: 'Sabletooth'},
  {content: 'People marvel at nature\'s beauty, forgetting the toxic thorns, strangling roots, and infinite death it blooms from.', person: 'Sitti', personAdd: '', card: 'Savage Garden'},
  {content: 'All living beings have a purpose. Mine is to keep our sacred knowledge away from your unworthy eyes.', person: '', personAdd: '', card: 'Scrollkeeper'},
  {content: 'Any compass can show you where you are. This one will show you where you need to be', person: 'Ari', personAdd: '', card: 'Seek'},
  {content: 'The size of one\'s body does not define the size of their spirit.', person: 'Mira', personAdd: '', card: 'Shrink Ray'},
  {content: 'Any true Songrider would gladly sacrifice their own life before their steed\'s.', person: '', personAdd: '', card: 'Songrider'},
  {content: 'Do not despair at your own mortality. The fact that our lives are temporary is why they have value.', person: 'Bouran', personAdd: '', card: 'Soul Guide'},
  {content: 'The best defense is that which your foes cannot find.', person: 'Ari', personAdd: '', card: 'Soul Shield'},
  {content: 'It\'s all too easy to make demands of the weak...', person: 'Horik', personAdd: '', card: 'Soul Taunt'},
  {content: 'It\'s not uncommon for the Exo and Revenant to form alliances, often with terrifying results', person: 'Axel', personAdd: '', card: 'Spiderella'},
  {content: 'The servitors date back to the time of Qui, when Sky was but an infinite void of light and wind.', person: 'Lotus', personAdd: '', card: 'Spirit of Sleep'},
  {content: 'When agitated, Sporekin will release a toxic blast of spores, to confuse and debilitate would-be predators.', person: '', personAdd: '', card: 'Spore Blast'},
  {content: 'WANTED: Squiddy, for piracy, skullduggery, and suckering people in with his schemes.', person: 'Armis Arrest Warrant', personAdd: '', card: 'Squiddy'},
  {content: 'Some Dreambeasts gorge upon a single sensory stimulus, becoming manifestations of it.', person: '', personAdd: '', card: 'Stink Eye'},
  {content: 'Strike a thousand blows in training, that you might strike but one in battle.', person: 'Cygnan Wisdom', personAdd: '', card: 'Strikestorm'},
  {content: 'Those who wrong the Dreamers seldom remember their crimes... or anything else, for that matter.', person: '', personAdd: '', card: 'Supermind'},
  {content: 'Take my hand. It is not yet your time.', person: 'Hope', personAdd: '', card: 'Take Flight'},
  {content: 'Rashidan tattoos are more than mere art. They transcribe their bearer\'s life, and the lives of those before them.', person: '', personAdd: '', card: 'Tatt'},
  {content: 'Most guardians protect the living. Here in Rashida, they protect the dead.', person: 'Iris', personAdd: 'Journals', card: 'Temple Watch'},
  {content: 'Those who betray our Cause are unworthy of existence. Eliminate all defectors!', person: 'Armis Order 77', personAdd: '', card: 'Tox'},
  {content: 'Carry a mirror as your shield, so your foes may be cursed as they break it.', person: 'Old Fable', personAdd: '', card: 'Trapper Keeper'},
  {content: 'The only \'box of loot\' you will ever find in Sky.', person: 'Banjo', personAdd: '', card: 'Treasure Chest'},
  {content: 'Merfolk dwell deep beneath the waves, watching over the Sea\'s greatest secrets.', person: 'Histories of Sky', personAdd: '', card: 'Trident True'},
  {content: 'The Primalan seek ancient trinkets and artifacts, hoping to piece together the puzzle of their own past.', person: '', personAdd: '', card: 'Trinketeer'},
  {content: 'Any weapon a golem holds is changed. Whether into a thing of legend or pile of scrap depends on its mood.', person: 'Ari', personAdd: '', card: 'Twisted Metal'},
  {content: 'Power is power, no matter its origin. I will use any means necessary to achieve my goal.', person: 'Horik', personAdd: '', card: 'Undragon\s Pact'},
  {content: 'Chop through a block of iron? Honestly, I had hoped for a challenge.', person: 'Katnu', personAdd: 'Elder Monk', card: 'Unstoppable Chop'},
  {content: 'Many fools see death as the end. The Cycle knows no beginning or end. It is all things. It is eternal.', person: 'Bouran', personAdd: '', card: 'Vanessa'},
  {content: 'Rashida\'s priestesses do not prepare the dead for burial, but rebirth.', person: 'Histories of Sky', personAdd: '', card: 'Vishiva'},
  {content: '"In the Undercroft, not a single drop of life goes to waste."', person: 'Zoey', personAdd: '', card: 'Void Knight'},
  {content: 'Many seek to contain fire, to break its will. Few live long enough to regret their mistake.', person: 'Tiamat', personAdd: '', card: 'Volcanic Potion'},
  {content: 'Saurian believe that their males take after the Lizard, and their females after the Serpent.', person: '', personAdd: '', card: 'Vyper Charmer'},
  {content: 'A true Waneblade is forged in darkness, lit only by the life leaving its victims\' eyes.', person: 'King Slay', personAdd: '', card: 'Wane Blade'},
  {content: 'We rise with the tides, and our enemies shall fall with them', person: 'Seaweaver', personAdd: '', card: 'Waterline'},
  {content: 'Would you catch the north wind in a bottle?', person: 'Primalan saying', personAdd: 'meaning \'That\s impossible', card: 'Wicked Twister'},
  {content: 'Entrust your fate to the winds, that they might carry you to your destiny.', person: 'Cygnan Teaching', personAdd: '', card: 'Windweave'},
  {content: 'It loosens restraints on magic while restraining opponents! Humorous, wouldn\'t you agree?', person: 'Ari', personAdd: '', card: 'Andromeda'},
  {content: 'Yeah, Servitors are cold, faceless automatons of dubious purpose. But plush ones sure do sell well!', person: 'Primalan Merchant', personAdd: '', card: 'Angelo'},
  {content: 'A nearly extinct order, the Anti-Mago regard prism-based weaving as an affront to Sky itself.', person: '', personAdd: '', card: 'Anti Mago'},
  {content: 'No matter how mighty I may be, without friends at my back, I am nothing.', person: 'Titus', personAdd: '', card: 'Archeloth'},
  {content: 'Among the Exo, leaders last only as long as they can thwart the attempts on their own lives.', person: 'Horik', personAdd: '', card: 'Beatle'},
  {content: 'Many mortal beings live years, even decades. Most ideas live but for a fleeting instant before vanishing forever.', person: 'Bouran', personAdd: '', card: 'Casket'},
  {content: 'Armis armor is waterproof... however, the Glitch Storm brings far worse than mere rain.', person: '', personAdd: '', card: 'Chain Storm'},
  {content: 'Kha Mhet\'s Adjudicators will show no pity or mercy to those who abandon the light.', person: 'Olympia', personAdd: '', card: 'Chief Justice'},
  {content: 'Move like lightning, and strike a thundering blow against your oppressors.', person: 'Samya', personAdd: '', card: 'Clapback'},
  {content: 'Some say we Leoran have nine lives. I only need two to stop you.', person: '', personAdd: '', card: 'Cleo'},
  {content: 'I trained with the Cygnan, but I lacked discipline. I could not stand by as they did, while the world cried out in pain', person: 'Titus', personAdd: '', card: 'Cloud Guard'},
  {content: 'Its whole body is made of Ionized Magnetite. On a related note, my computer needs replacing.', person: 'Mai', personAdd: 'Field Journal', card: 'Crusher'},
  {content: 'If the Qui had wanted you to find their secrets, they would not have buried them so.', person: 'Wu-Kin Wisdom', personAdd: '', card: 'Crystal Cache'},
  {content: 'Eons of evolution separate the Raptors from birds, but they do still appreciate a good bauble.', person: 'Mai', personAdd: '', card: 'Curious'},
  {content: 'I fear Revenants more than Wraiths. They\'re cunning, prideful, always wanting. Too much like humans.', person: 'Titus', personAdd: '', card: 'Death\'s King'},
  {content: 'Don\'t worry about the fine print. It\'s just a formality. No one reads it anyways.', person: 'The Beast', personAdd: '', card: 'Demon Pact'},
  {content: 'Empty your mind of \'what is.\' Open your mind to \'what if.\'', person: 'Dreamer\s Wisdom', personAdd: '', card: 'Desire'},
  {content: 'Sing a song for those we\'ve lost, may the river their souls safely cross.', person: 'Primalan Lament', personAdd: '', card: 'Dirge'},
  {content: 'Such is the beauty of The Cycle. Death eclipses Life, and Life shines ever brighter in its embrace.', person: 'Bouran', personAdd: '', card: 'Eclipse'},
  {content: 'In the Undercroft, a raven\'s cry is seen not an omen of death\'s arrival, but its departure.', person: 'Bouran', personAdd: '', card: 'Evermore'},
  {content: 'If I am to die, I\'ll die as the phoenix - In a blaze of glory that burns my foes to ash.', person: 'Horik', personAdd: '', card: 'Flame Phoenix'},
  {content: 'Saurian hunters commonly form bonds with their dinosaur kin.', person: 'Histories of Sky', personAdd: '', card: 'Flank Rider'},
  {content: 'Life is short and empty... It\'s the friends you make, and the things you break together, that give it meaning.', person: 'Zoey', personAdd: '', card: 'Flurry'},
  {content: 'I\'m telling you, it wasn\'t me!', person: 'Rags', personAdd: 'undercroft delver, last words', card: 'Foul Stench'},
  {content: 'Life is a gift, as is its opposite.', person: 'Bouran', personAdd: '', card: 'Full Bloom'},
  {content: 'As oil is to gears in a machine, inspiration is to the gears in my mind.', person: 'Mira', personAdd: '', card: 'Gear Grind'},
  {content: 'Hail to the Queen!', person: 'Samya', personAdd: '', card: 'Hail of Arrows'},
  {content: 'Elevate your mind, and clear it of material concerns. Let them be as clouds in the breeze.', person: 'Guru', personAdd: '', card: 'Head in the Clouds'},
  {content: 'Oni Ascetics of the mountain ranges of Sky, the Ifrit endure the cold with nothing but the heat of their own rage.', person: '', personAdd: '', card: 'Ifrit'},
  {content: 'Idle minds sow dark seeds, blooming into evil deeds.', person: 'Dryad Saying', personAdd: '', card: 'Ill Will'},
  {content: 'Strength alone is meaningless. It is what you protect with your strength that gives it worth.', person: 'Ada', personAdd: '', card: 'Light Ranger'},
  {content: 'In Sky, it\'s often the princess who rescues the brave knight...', person: 'Banjo', personAdd: '', card: 'Lilly'},
  {content: 'Sporekin care little for lineage or direct relations. Each cares for the community\'s young as though they were their own.', person: '', personAdd: '', card: 'Ma Shroom'},
  {content: 'Like a snake shedding its skin, new life emerges from the husk of the old.', person: 'Zoey', personAdd: '', card: 'Mamba'},
  {content: 'Why waste time remembering spells when I can remember one spell to do it for me!', person: 'Mai', personAdd: '', card: 'Manage Memory'},
  {content: 'You waste your mind\'s potential. I\'ll put it to better use.', person: 'Sitti', personAdd: '', card: 'Mind Control'},
  {content: 'To Hoplite, who lacked a strong voice, Qui gave the gift of endless song.', person: 'The quiology', personAdd: '10:87', card: 'Minstrel'},
  {content: 'Eldest daughter of Ethera, Aya travels the realms of Sky, sowing the seeds of new life.', person: '', personAdd: '', card: 'Miss Aya'},
  {content: 'You didn\'t need that, did you?', person: '', personAdd: '', card: 'Mortal Blow'},
  {content: 'Ethera watches over all life in Sky. She appears only in fragments, each a sliver of her true power.', person: '', personAdd: '', card: 'Mother Ethera'},
  {content: 'He helps keep our library free of dust, vermin, and unwanted guests.', person: 'Lotus', personAdd: '', card: 'Mr. Whiskers'},
  {content: 'Forest Ursine are cousins of the Nordic Ursine, who traveled south during an Ancient Age of Ice.', person: 'Histories of Sky', personAdd: '', card: 'Mushka'},
  {content: 'Free yourself of the blocks and chains of this world... become one with the Void, and find power in its emptiness.', person: '', personAdd: '', card: 'Nakamoto'},
  {content: 'Feel the gentle embrace of our mother, and take this time to reflect on your crimes.', person: 'Miss Aya', personAdd: '', card: 'Nature\s Grasp'},
  {content: 'The Hex Plague offers only death, but some will always be willing to discard their lives for a mere taste of power.', person: 'Ari', personAdd: '', card: 'Necrosiss'},
  {content: '...Drops of Dread Yxxathoxzz\'s foul blood still stain the Dreamfield\'s soil...', person: 'Dreamer\s Poem', personAdd: '', card: 'Nightmare'},
  {content: 'Sunrise, we map the sands. Sunset, the sands shift. Sunrise, we map the sands again.', person: 'Surit Scout\s Mantra', personAdd: '', card: 'Nomad'},
  {content: 'The Coleoid are a secretive people. Most sailors regard them as a myth told to spook children.', person: 'Histories of Sky', personAdd: '', card: 'Octomage'},
  {content: 'When the bear roared, I froze up, in more ways than one.', person: 'Bjorn', personAdd: 'Artic Guide', card: 'Polar Bear'},
  {content: 'I\'ve known Ursine Ascetics to survive on Vyperoot and Toxberries. Your poisons are mere seasoning to them.', person: 'Horik', personAdd: '', card: 'Puddo'},
  {content: '"Halt. Else. Face. Doom.', person: 'Sentinal Warning', personAdd: '', card: 'Quadra'},
  {content: 'The Sun mages of Rashida take the term \'raise an army\' very literally.', person: 'Iris', personAdd: 'Journal', card: 'Raise Arms'},
  {content: 'Paladins of the Ashlands carry the dust of their fallen foes with them to help bear their sins.', person: '', personAdd: '', card: 'Righteous'},
  {content: 'The ocean will show no patience or mercy to those who fail to show it proper respect.', person: 'Auntuga', personAdd: '', card: 'Riptide'},
  {content: 'Hah! A thousand gold for removing one squirrel?! This will be too easy!', person: 'Max', personAdd: 'Big Game Hunter, currently MIA', card: 'Rodent Problem'},
  {content: 'To Gremlings, salvage and sabotage are one and the same.', person: 'Axel', personAdd: '', card: 'Salvage'},
  {content: 'The multitudes of life in the Sky are nothing compared to those in the sea.', person: 'Meranda', personAdd: '', card: 'School of Fish'},
  {content: 'The Seaweaver\'s Epic Poem, \'The Infinitium\' tells of a lost time of limitless power.', person: '', personAdd: '', card: 'Sea Mage'},
  {content: '...Letting her draw that last rune on the ground nearly cost me my life.', person: 'Fox', personAdd: '', card: 'Seal of Doom'},
  {content: 'Sure, they\'re useful, provided your brain can keep up with your feet.', person: 'Mai', personAdd: '', card: 'Speed Boots'},
  {content: 'Dreambeasts feed on thoughts and emotions. The more you fear and hate them, the stronger they become.', person: 'Mootichi', personAdd: '', card: 'Spite & Malice'},
  {content: 'Wraiths\' most wicked victims become Stridges, spirits ever hungering for the lifeforce stolen from them.', person: '', personAdd: '', card: 'Strige Strike'},
  {content: 'The Revenant\'s frightful reputation is largely unearned. Like all people, they have their heroes... and their villains', person: 'Axel', personAdd: '', card: 'Swamp Walker'},
  {content: 'The Oni can be intimidating, but I know few people who are more dependable in a pinch.', person: 'Fox', personAdd: '', card: 'Sworn Oni'},
  {content: 'Its favorite prey is the one that thinks itself too clever to be caught, safely hidden from sight.', person: 'Fox', personAdd: '', card: 'Talonous'},
  {content: 'Light was born threefold - Qai, The Sun; Umem, the lightning; and Roh, the soul.', person: 'Rashidan Legend', personAdd: '', card: 'Tempest Brew'},
  {content: 'Looks like your time is up, my friend.', person: 'Banjo', personAdd: '', card: 'Tooth Hurty'},
  {content: 'You wish to leave my court? Sure, you can.', person: 'Daijo', personAdd: 'Oni Shogun', card: 'Uppercut'},
  {content: 'Don\'t be shy now, take a sip! Fresh from the Dreamfield! One swig and all your wildest dreams should come true!', person: '', personAdd: '', card: 'Vial Vendor'},
  {content: 'The earth is Ethera\'s flesh, and fire, her boiling blood.', person: 'Tiamat', personAdd: '', card: 'Volcanic Blast'},
  {content: 'I\'ve heard the Exo have great cities in the Undercroft, sprawling hives laden with dark secrets.', person: 'Brigid', personAdd: 'Town Gossipmonger', card: 'Webweaver'},
  {content: 'Ethera does not create life. She is life. Every living thing in Sky is a part of her.', person: 'Amaruath', personAdd: '', card: 'World Tree'},
  {content: 'Her blades, the lighting, her voice, the thunder, and her hair, the shining sun.', person: 'Leoran Romantic Poem', personAdd: '', card: 'Zapeta'},
  {content: 'The match that burns fastest burns brightest.', person: 'Zoey', personAdd: '', card: 'Zoomie'},
  {content: 'I stand for all who cannot stand for themselves. To falter, to accept defeat, would be to abandon them.', person: 'Ada', personAdd: 'to Fox', card: 'Aegis of Light'},
  {content: 'Some sailors drop anchors onto the seabed. I find dropping them onto enemy ships far more effective', person: 'Capt. Snapjaw', personAdd: '', card: 'Anchor Drop'},
  {content: 'Just as you wear a mask to take on a new identity, so shall the Arcadeum Mask wear you.', person: 'Histories of Sky', personAdd: '', card: 'Arcadeum Mask'},
  {content: 'Armis weapon orders are up 400% this year. Personally, I\'d rather not know why.', person: 'Bill', personAdd: 'Weaponsmith', card: 'Bill'},
  {content: 'Few humans live in the Wildlands. Those who do are either fearless, peerless, or witless.', person: 'Zoey', personAdd: '', card: 'Blademaster'},
  {content: 'Ada fights for others with a searing passion. One day, I fear she\'ll burn herself down to nothing.', person: 'Fox', personAdd: '', card: 'Blaze Glory'},
  {content: 'To sort even a fraction of the tomes in Alcazar by hand would take a lifetime. Fortunately, we have other methods.', person: 'Lotus', personAdd: '', card: 'Book Casey'},
  {content: 'Massive bodies foster similarly massive appetites.', person: 'Titus', personAdd: '', card: 'Chomp'},
  {content: 'At Dreamfield\'s heart lies Dead Yxxahthoxzz, kept dreaming by his court of faceless musicians.', person: 'Soures Unknown', personAdd: '', card: 'Cosmicon'},
  {content: 'The Hexbound spread further each day. Our containment efforts are failing.', person: 'Armis Field Log', personAdd: '', card: 'Dead Beats'},
  {content: 'Let the forests keep their dryads. The ocean has far sturdier protectors.', person: 'Auntuga', personAdd: '', card: 'Deepus'},
  {content: 'Doom Shrooms watch over entire communities of sporekin, shielding them from danger.', person: '', personAdd: '', card: 'Doom Shroom'},
  {content: 'Music is the soul giving thanks for the gift of life.', person: 'Titus', personAdd: '', card: 'Drum Up'},
  {content: 'Don\'t be too disappointed - this first one\'s still in beta.', person: 'Mai', personAdd: '', card: 'Dual Boot'},
  {content: 'Once a common sight in Sky, Earth Golems were hunted nearly to extinction for their healing properties.', person: '', personAdd: '', card: 'Earth Golem'},
  {content: 'Life is merely another form of energy. Like all energy, it can be harnessed. Or contained.', person: 'Sitti', personAdd: 'Thesis', card: 'Encapsulate'},
  {content: 'Freedom is not something that can be given. It\'s something you must achieve for yourself.', person: 'Fox', personAdd: '', card: 'Epic Eagle'},
  {content: 'As their children turned against them, the tyrant let loose a cry of rage that split Sky itself in two.', person: 'The Quiology', personAdd: '06:66', card: 'Extinction Event'},
  {content: 'Relax, there\'s a foot-thick wall of wood between us and their pitiful arrows.', person: 'Last missive from Fort Ashborn', personAdd: '', card: 'Flame Volley'},
  {content: 'Crows aren\'t the only birds that can create a murder.', person: 'zoey', personAdd: '', card: 'Flock'},
  {content: 'Is he the Forest\'s Hart or the Heart of the Forest? Only Ethera knows for certain.', person: 'Titus', personAdd: '', card: 'Forest Hart'},
  {content: 'Let\'s debate whether Frank is the name of the monster, or its creator, from a safe distance.', person: 'Ada', personAdd: 'to Ari', card: 'Frank'},
  {content: 'We Raptors already have beaks and talons of Iron. Protecting the rest of our bodies was a logical next step', person: 'Madame Gepei', personAdd: '', card: 'Garuda'},
  {content: 'The Etherwald unites its life with your own. You are forevermore a part of each other.', person: 'Miss Aya', personAdd: '', card: 'Gift of Aya'},
  {content: 'You tamper with forces you barely understand, much less respect! It will be the death of you!', person: 'Ada', personAdd: 'to Horik', card: 'Gravekin'},
  {content: 'The earth knows patience unthinkable to mortal beings. But, like all things, it eventually runs out.', person: 'Horik', personAdd: '', card: 'Ground Pound'},
  {content: 'Gusto seldom speaks, but when he does, all in Sky listen.', person: 'Iris', personAdd: '', card: 'Gusto\s Retort'},
  {content: 'We have countless advanced weapons. Sonic cannons, Ion Swords, Laser Bows... but you can\'t beat the classics.', person: '', personAdd: '', card: 'Hammerhead'},
  {content: 'Ether Crystals form symbiotic relationships with living beings, granting power and protection.', person: 'Mira', personAdd: 'Research Notes', card: 'Heavy Cavalry'},
  {content: 'B-Units operate with staggering efficiency, guided by their \'hive\' leaders.', person: 'Ari', personAdd: 'Notes', card: 'Hive'},
  {content: '"o the Armis, honor is found only in living for \'The cause\'... and dying for it.', person: 'Fox', personAdd: '', card: 'Honor Guard'},
  {content: 'Hope flies on wings of light, but perseveres on heart alone.', person: 'Unknown Poet', personAdd: '', card: 'Hope'},
  {content: 'The famous last words of many generals and admirals.', person: '', personAdd: '', card: 'It\s a Trap!'},
  {content: 'For every soul I heal, another cries out in pain. So long as conflict continues, my work is never done.', person: '', personAdd: '', card: 'Jakintsu'},
  {content: 'When the Khan asks you a question, you\'d best answer, lest he \'Axe\' you another.', person: 'Gibbler', personAdd: 'Minstrel', card: 'Khan'},
  {content: 'Most die young in the Undercroft. You\'d do well to fear the old there who still live.', person: 'Horik', personAdd: '', card: 'King Slay'},
  {content: 'Don\'t worry Phil, we won\'t get lost as long as we watch each others backs... Phil?', person: '', personAdd: '', card: 'Lost in the Fog'},
  {content: 'The keepers of the Alcazar Library have little patience for visitors, especially talkative ones.', person: 'Iris', personAdd: '', card: 'Plane Ranger'},
  {content: 'Are we not all puppets, guided by an unseen hand?', person: 'Mootichi', personAdd: '', card: 'Puppet Master'},
  {content: 'Hold the line until your last breath! If you fall, you fall for the glory of Armis!', person: 'Armis Rallying Cry', personAdd: '', card: 'Reinforce'},
  {content: 'Rhumblers roam across sky, eating seeds and pollen. When one dies, a forest sprouts from its body.', person: 'Mira', personAdd: 'Research Notes', card: 'Rhumbo'},
  {content: 'Keep your weapon at the ready. I\'ve seen 30-50 of them show up in as little as 3-5 minutes.', person: 'Max', personAdd: 'Big Game Hunter', card: 'Roothog'},
  {content: 'Cryogen encased most of her followers in ice. Her lost kindness still lives on in the few that escaped.', person: 'Banjo', personAdd: '', card: 'Sapphire'},
  {content: 'The Armis once sought to conquer the Undercroft. The few who survived are corrupted beyond recognition.', person: 'Axel', personAdd: '', card: 'Scorpio'},
  {content: 'What Tiamat\'s offspring lack in size, they make up for with enthusiasm.', person: 'Titus', personAdd: '', card: 'Scraggy'},
  {content: 'Kha Mhet has seen fit to lend you new life. Take care not to waste it.', person: 'Vishiva', personAdd: '', card: 'Second Chance'},
  {content: 'Any fool can forge a cheap proxy of life with the right material. What I seek is far greater.', person: 'Sitti', personAdd: '', card: 'Soul Forge'},
  {content: 'You can clip the Primalan\'s wings, but their spirits are far harder to break.', person: 'Sitti', personAdd: '', card: 'Soul Shepherd'},
  {content: 'One to punish the crime. One to absolve the soul. One to brand the guilty.', person: 'Oni Punishment', personAdd: '', card: 'Three Lashes'},
  {content: 'Ethera\'s designs are elegant, but there\'s nothing science and some cybernetics cannot improve', person: 'Sitti', personAdd: '', card: 'Timber'},
  {content: 'It holds the memories of every past beast, bird, and flower. In it, they await rebirth.', person: '', personAdd: '', card: 'Toh Tem'},
  {content: 'Capable of tunneling through glaciers like loose soil, Wyrms sit at the top of the arctic food chain.', person: 'Mira', personAdd: 'Research Notes', card: 'Tundra Wyrm'},
  {content: 'Do the tides turn in time or does time turn in tides?', person: 'Wu-Kin Paradox', personAdd: '', card: 'Turn the Tide'},
  {content: 'Think hard before venturing into the Dreamfield. Many never return, and those who do are never the same.', person: 'Axel', personAdd: '', card: 'Twist & Turn'},
  {content: 'One of my early experiments was... difficult. I banished Vla... him... to the Wildlands.', person: 'Sitti', personAdd: 'research notes', card: 'Vlad'},
  {content: 'I\'d recommend you stay well away from Hoplite lands, unless you have a desire to croak.', person: 'Axel', personAdd: '', card: 'Wartlock'},
  {content: 'Many battles have been decided by who has the song of the Bard echoing at their back.', person: 'Histories of Sky', personAdd: '', card: 'Bard Rock'},
  {content: 'Skywhales are an ancient species, as much at home in the heavens as beneath the sea\'s waves.', person: 'Histories of Sky', personAdd: '', card: 'Breacher'},
  {content: 'The spell\'s creator managed to raze a fortress in 9 hours. Skyweavers since have cut that record way down.', person: '', personAdd: '', card: 'Burninate'},
  {content: 'Catch!', person: 'Samya', personAdd: '', card: 'Catch!'},
  {content: 'Distant relatives of the Wu-kin, Skysloths prefer to spend their time contemplating the past, rather than guarding it.', person: '', personAdd: '', card: 'Cloud Sloth'},
  {content: 'I will step over the fallen without guilt or pause. Their bodies are the stones paving the path to our destiny.', person: 'Sitti', personAdd: '', card: 'Doomsday'},
  {content: 'Up here, even the boiling water of a geyser falls as a hail of deadly icicles.', person: 'Mai', personAdd: 'field journal', card: 'Frigid Blizzard'},
  {content: 'The Hoplite posture in imitation of fictional knights and monarchs. Pathetic.', person: 'Horik', personAdd: '', card: 'Frog King'},
  {content: 'Cryogen\'s cultists shuffle through the frozen north, seeking souls to inflict her \'gifts\' upon.', person: 'Iris', personAdd: 'Journals', card: 'Frost Adept'},
  {content: 'Even the stones themselves rise to impede your sacrilege, Skyweaver!', person: 'Anti-Mago', personAdd: '', card: 'Geod'},
  {content: 'I would hardly call the chance to fight and die for the whims of another a \'gift.\'', person: 'Titus', personAdd: '', card: 'Gift of Swords'},
  {content: 'It may be big, but one good hit and it\'ll come crashing down. Better stand back.', person: 'Fox', personAdd: '', card: 'Glacial Hulk'},
  {content: 'The Qui took our wings, that our spirits and minds might soar above all others.', person: 'Cygnan Teaching', personAdd: '', card: 'Guru'},
  {content: 'I howl without breath, cut without knife, fly without wings, and die, having never known life.', person: 'Wu-Kin riddle', personAdd: '', card: 'Hurricane'},
  {content: 'Dracomantium bestows her blessing upon those who live to protect others.', person: 'Ada', personAdd: '', card: 'Mighty Steed'},
  {content: 'My feet have traveled a hundred realms. My mind has traveled a thousand more.', person: '', personAdd: '', card: 'Mootichi'},
  {content: 'I rule a kingdom of arrows that want for no bow.', person: 'Primalan Riddle', personAdd: '', card: 'Queen of Jacks'},
  {content: 'Poor little light-dweller, lost in the dark... No amount of praying will save you now.', person: '', personAdd: '', card: 'Scythe Mantis'},
  {content: 'It has been centuries since the Tortugan went to war, and millennia more since their last recorded defeat.', person: 'Histories of Sky', personAdd: '', card: 'Shell Officer'},
  {content: 'Contracts with The Beast grant you his protection... But who will protect you from him?', person: 'Mira', personAdd: '', card: 'The Beast'},
  {content: 'Amazing! It is not a new species at all, but a symbiotic bond between Vypers and Elementals.', person: 'Mai', personAdd: 'field journal', card: 'Trydra'},
  {content: 'Sporekin never truly die. So long as a single spore remains, new life will always follow the old.', person: '', personAdd: '', card: 'Undergrowth'},
  {content: 'A castle built upon a mountain of corpses is a castle no less.', person: 'Sitti', personAdd: '', card: 'Wall of Dead'},
  {content: 'My first memory is of darkness, and a lantern, guiding me to the light. One day, I shall follow it back into darkness.', person: 'Bouran', personAdd: '', card: 'Allbane'},
  {content: 'My greatest blessing is but a token compared to my Mother\'s smallest.', person: 'Miss Aya', personAdd: '', card: 'Band Together'},
  {content: 'Why so hasty, my dear? After all, the sweetest rewards come to those who wait...', person: '', personAdd: '', card: 'Broodwitch'},
  {content: 'The oldest accounts of dreambeasts describe them only as \'Logos net Hyeim.\' \'Monsters beyond Reason.\'', person: 'Histories of Sky', personAdd: '', card: 'el Monstruo'},
  {content: 'Death, the ultimate punishment? No - to be cut from the cycle, unable to die... that is the harshest end of all.', person: 'Bouran', personAdd: '', card: 'Jar Souls'},
  {content: 'Eternal sun, Firstborn of Sky, Morningstar. He is the vision of the light\'s glory.', person: 'Iris', personAdd: 'Journals', card: 'Kha Meht'},
  {content: 'The light protects those most in need of its aid. Do not call upon it idly.', person: 'Oylmpia', personAdd: '', card: 'Libra'},
  {content: 'Sirens believe the Maelstrom is a portal to another world. None have ever returned to confirm it.', person: 'Iris', personAdd: 'Journals', card: 'Maelstrom'},
  {content: 'Dreams are the playground of the resting mind. But it is possible to turn idle fun into creative might, if one knows how.', person: 'Histories of Sky', personAdd: '', card: 'Magnanimous'},
  {content: 'All things are just ones and zeros my friend... and you\'re about to have a lot more zeros than ones.', person: 'Hax', personAdd: '', card: 'Mass Confuse'},
  {content: 'Adult Worms ensure that food for their Grubbs is never in short supply.', person: '', personAdd: '', card: 'Maw Worm'},
  {content: 'Firemanders bear and raise their young in volcanoes. The hotter the nest, the more prolific the clutch', person: 'Mira', personAdd: 'research Notes', card: 'Mothermander'},
  {content: 'If I had nine lives, or a hundred, I would give them all in defense of those in need.', person: '', personAdd: '', card: 'Mountain Lion'},
  {content: 'Qui dreamed of a world of equality, and from that dream, it emerged.', person: 'The Quiology', personAdd: '3:33', card: 'Orion'},
  {content: 'From light, all was born. Stand back, and witness creation incarnate.', person: 'Kha Mhet', personAdd: '', card: 'Prismata'},
  {content: 'Lightning is woven into all things. I merely tug at the threads that bind it.', person: '', personAdd: '', card: 'Zam'},
  {content: 'I call upon those long past! Arise, and fulfill your duty to the people of Rashida!', person: 'Kha Mhet', personAdd: '', card: 'Ancients Rise'},
  {content: 'Every hole we cut in its hide only led more limbs, mouths and teeth to spill forth from within.', person: 'Armis Patrol Survivor', personAdd: '', card: 'Colossoid'},
  {content: 'Many golems date back eons, to the time of the Qui... It is much, much older than that.', person: 'Banjo', personAdd: '', card: 'Eldest'},
  {content: 'They till the Dreamfield\'s soil, harvesting forgotten ideas and sowing the seeds of the new.', person: '', personAdd: '', card: 'Enigma Golem'},
  {content: 'When our mother weeps, all life rises up to defend her.', person: 'Amaruath', personAdd: '', card: 'Etherwall'},
  {content: 'Tortugan are often atheistic, but some do give thanks to "Mother Testudo,\' who poured out the seas from her shell.', person: '', personAdd: '', card: 'Floodwater'},
  {content: 'Does it share its own strength to help others, or merely because it despises those unlike itself?', person: 'Mira', personAdd: 'Research Notes', card: 'Gemini'},
  {content: 'Horizon Lord, Unstoppable Storm, Eternal Traveller. His is the only example I\'ll ever follow.', person: 'Fox', personAdd: '', card: 'Great Gusto'},
  {content: 'Do not speak of the Undragon! It is an abomination, a blight upon Sky itself!', person: 'Kha Mhet', personAdd: 'to Bouran', card: 'Kha\'s Wrath'},
  {content: 'The secrets of books, and of old men, are nothing compared to those of the sea.', person: 'Tortugan Wisdom', personAdd: '', card: 'Krakus'},
  {content: 'The histories say the Dragons sealed the Titans beneath the earth, but I know of at least one they forgot.', person: 'Titus', personAdd: '', card: 'Moltenous'},
  {content: 'The Ocean reaches out with endless arms to embrace its children, and crush its enemies.', person: 'Turtor', personAdd: '', card: 'Octavian'},
  {content: 'Light Ebbs. Water Dries. Earth Spoils. Fire Dies. Air Fouls. Metal Breaks. Mind Fails. Darkness Fades. It Endures.', person: '', personAdd: '', card: 'Sky Phoenix'},
  {content: 'True enlightenment is found not in knowing everything, but in accepting that such a feat is impossible.', person: 'Cygnan Proverb', personAdd: '', card: 'Skychannel'},
  {content: 'I will not bow to fate. If the dice fall against me, I\'ll cut off the hand that cast them.', person: 'Horik', personAdd: '', card: 'Weighted Die'},
  {content: 'Ethera\'s Firstborn, King of the Etherwald, Great-Father. He watches over his mother\'s boundless creations.', person: 'Titus', personAdd: '', card: 'Amaruath'},
  {content: 'Queen of Ice, Accursed One, Endbringer. She wishes only to see all life in Sky \'preserved\'...', person: 'Ari', personAdd: '', card: 'Cryogen'},
  {content: 'Bulwark of the meek, tender yet unbreakable, youngest of her kin. She is the example all should follow.', person: 'Mira', personAdd: '', card: 'Dracomantium'},
  {content: 'Amaruath may be the firstborn of Ethera, but that does not make him the strongest.', person: 'Horik', personAdd: '', card: 'Hydrex'},
  {content: 'Shaper of dreams, Eternal Moon, Eveningstar. We think, and therefore, she is.', person: 'Lotus', personAdd: '', card: 'Meng\'long'},
  {content: 'Flee North, South, East, or West. The winds will ever hunt you.', person: 'Primalan Curse', personAdd: '', card: 'Morsudovest'},
  {content: 'Queen of Flames, All-Mother. She is the forge from which all who seek justice are born', person: 'Ada', personAdd: '', card: 'Tiamat'},
  {content: 'Kha Mhet is wise to fear the dark. Even his own light is but a candle, flickering in the abyss.', person: 'Undragon', personAdd: '', card: 'Grave Roil'},
  {content: 'Gaze through me, and witness order unquestioned.', person: 'Mask Inscription', personAdd: '', card: 'Iron Mask'},
  {content: 'Many assumed Sky\'s Dinosaurs were extinct, but it appears that life has found a \'particularly violent\' way.', person: 'Banjo', personAdd: '', card: 'Titanic'},
  {content: 'Legend says the Genesis Prism could reshape Sky itself. Such a disruption would bear dire cost.', person: 'Lotus', personAdd: '', card: 'Touch the Sky'},
  {content: 'The Undragon was dead long before Sky was born, and it shall live on, long after Sky is dead.', person: 'Sitti', personAdd: '', card: 'Undragon'},
  {content: 'Chrome ready, stabilizers online... begin casting!... What!? Another connection error!?', person: 'Mira', personAdd: '', card: 'Cast in Chrome'},
  {content: 'Take care what ideas you invite into your mind. Some are most inhospitable guests.', person: 'Mootichi', personAdd: '', card: 'Eldritch Lore'},
  {content: 'True enlightenment is found in the stones one lays in the path they walk towards it.', person: 'Iris', personAdd: 'Journals', card: 'Invest'},
  {content: 'You see light as life, and darkness as death. A comforting delusion perhaps, but a fatal one.', person: 'Bouran', personAdd: '', card: 'Smite'},
  {content: 'Humans train to unleash their inner spark. The Leoran to keep it contained.', person: '', personAdd: '', card: 'Supercharge'},
  {content: 'Like fire, I am both creator and destroyer, crafter of beauty and ruin alike.', person: 'Oni Smith\'s Creed', personAdd: '', card: 'Oni Smith'},
  {content: 'Gusto speaks only in singular words, yet each is etched into its listener\'s soul forever.', person: 'Aili', personAdd: 'Disciple of Gusto', card: 'Disciple of Gusto'},
  {content: 'Though long-dead, Rashida\'s first king still stands in defense of her people', person: 'Iris', personAdd: 'Journals', card: 'Pharonis'},
  {content: 'As I raised my blade to strike down the intruder, I saw my own eyes staring back at me, filled with unnatural malice', person: 'Armis Guard', personAdd: 'field report', card: 'Mercurial Mimic'},
  {content: 'It is possible to rescue the captured from its clutches, but those who come out are rarely the same as those that went in.', person: '', personAdd: '', card: 'Grasping Maiden'},
  {content: 'I\'m always three steps ahead', person: '', personAdd: '', card: 'Ari\'s Insight'},
  {content: 'Bouran has held the heart prism since I first discovered them as a child, alone in the Undercroft.', person: 'Allbane', personAdd: '', card: 'Bouran\'s Ethos'},
  {content: 'Gaze through yourself, and enter your dreams', person: '', personAdd: '', card: 'Lotus\'s Reflection'},
  {content: 'The Strength prism did not choose you because your body is strong. It chose you because your will is strongest of all.', person: 'Horik', personAdd: 'to Ada', card: 'Ada\s Valor'},
  {content: 'Even before becoming a Skyweaver, Samya\'s incredible speed and skill as an athelete were legendary. Now, even the wind fears her.', person: '', personAdd: '', card: 'Semya\'s Speed'},
  {content: 'My favored are the small, the meek, those whose strength requires a nurturing hand to bloom in full.', person: '', personAdd: '', card: 'Amaruath\'s Will'},
  {content: 'Relics of an ancient civilization, They are generally harmless... unless disturbed.', person: 'Saurian Jungle Research Logs', personAdd: '', card: 'Jade Guardian'},
  {content: 'The stoic sentries of Alcazar could hear a pin drop across Sky. Sworn to an oath of silence, they protect Alcazar\'s forbidden knowledge from those who would abuse it\'s power.', person: '', personAdd: '', card: 'Silent Warden'},
  {content: 'With innumerable arms Qui etched the elements upon sacred stones, and raised great obelisks to bear their stories.', person: 'The Quiology', personAdd: '1:05', card: 'Runecalling'},
  {content: 'Young one, you are so impatient... Well, if you truly wish to reach your destiny faster, I may have just the thing.', person: 'Morgana', personAdd: '', card: 'Bewitching Brew'},
  {content: 'Queen of the merfolk, Encantadora\'s enchanted songs bolster her people in the face of Armis\' relentless expansion.', person: '', personAdd: '', card: 'Ecantadora'},
  {content: 'Dread Yxxathoxxz, devour our reason, fill us with hunger, that we might feast upon this world.', person: 'Scrap of an ancient tome', personAdd: '', card: 'Gift of Yxxath'},
  {content: 'My Mellin brothers and sisters trained me in the art of breaking in where I\'m least wanted.', person: 'Zoey', personAdd: '', card: 'Chainlasher'},
  {content: 'Though perfectly at home in the dirt, sporekin often take pride in keeping their homes tidy and clean.', person: 'Histories of Sky', personAdd: '', card: 'Broom Shroom'},
  {content: '...Under the light of the blood moon, Lobos grants her children the blessing of hunger and the gift of fury.', person: 'Wildland teaching', personAdd: '', card: 'Hunter\'s Howl'},
  {content: 'Few can navigate the saurian Jungle, follow the guide closely, they won\'t wait for you.', person: 'Iris', personAdd: '', card: 'Jungle Guide'},
  {content: 'I once worked to fell the forest. But it still saw fit to save and protect me, and I shall repay it tenfold.', person: 'Titus', personAdd: '', card: 'Nurtured Bond'},
  {content: 'Oni commanders often set their own banners ablaze before a battle, making their forces appear like a roaring wildfire rushing towards the enemy.', person: 'Histories of Sky', personAdd: '', card: 'Raze the Banners'},
  {content: 'Are you willing to embark on a fantastic journey for your dreams? To solve a thrilling mystery?', person: '', personAdd: '', card: 'Meng\'Long\'s Wish'},
  {content: 'Striges arise from the regrets of the wicked... and you know what they say about misery loving company.', person: 'Axel', personAdd: '', card: 'Strige Swarm'},
  {content: 'All life grows only though consuming. Be it for flesh, flora, water, or sun, every living thing must hunger.', person: 'Wraith Teaching', personAdd: '', card: 'Food Chain'},
  {content: 'Most Valkyrn stood against Cryogen and were destroyed. Most that remain are those few who betrayed their kin to join her.', person: 'Histories of Sky', personAdd: '', card: 'Frostmaiden'},
  {content: 'The creatures of shadow have no right to exist in the light. Purify them all!', person: 'Kha Mhet', personAdd: '', card: 'Eliminate'},
  {content: 'Where most hear the droning of wings, I hear songs. Songs of strife and sadness, and an uncertain future.', person: '', personAdd: '', card: 'Swarmsinger'},
  {content: 'Behold, the elements joined as one! What more proof could you need that the gensis prism exists!', person: 'Hexate', personAdd: 'grand matron of the cult of the hexahedron', card: 'Genesis Avatar'},
  // Enchants
  {content: 'I\'d be still now, if you want to make it out of this in one piece.', person: 'Ari', personAdd: '', card: 'Frostbite'},
  {content: 'Chill out man. Sit down for a moment, and listen to the rhythm of the world.', person: 'Titus', personAdd: '', card: 'Roots'},
  {content: 'I won\'t be outdone by Mira! if she has made an antimagic field, I\'ll just make an antimatter one!', person: 'Mai', personAdd: '', card: 'Shield'},
  {content: 'This is fine. We\'re Fine...', person: '', personAdd: '', card: 'Flames'},
  {content: 'Cast off the chains of those who would oppress you, and seize control of your own destiny!', person: 'Zoey', personAdd: '', card: 'Chains'},
  {content: 'Those infected with the Hex Plague tend to live just long enough to start begging for death.', person: 'Sitti', personAdd: 'research notes', card: 'Hex'},
  {content: 'Hm, oh, what is it? Sorry, I wasn\'t really paying attention.', person: 'Banjo', personAdd: '', card: 'Dazed'},
  {content: 'All things have a primal soul within them, straining and clawing like a feral animal, desperate to escape.', person: 'Horik', personAdd: '', card: 'Anima'},
  {content: 'Like air, Wisdom is all around us, and quickly often forgotten, yet utterly essential to our survival.', person: 'Lotus', personAdd: '', card: 'Shroud'},
  {content: 'I stand against all injustice. So long as I live, you\'ll never move me.', person: 'Ada', personAdd: '', card: 'Lead'},
  {content: 'You are far too eager to speak. Be silent a moment, and listen.', person: 'Iris', personAdd: '', card: 'Silence'},
  {content: 'The Cycle is eternal, but each individual\'s own journey will inevitably end.', person: 'Bouran', personAdd: '', card: 'Fate'},
  {content: '... In desperation, I asked the Witch to free me of my visions. She stole my eyes, but the visions remain...', person: 'Axel', personAdd: '', card: 'Blind'},
  {content: 'If you can\'t take the heat, get out of my way.', person: 'Fox', personAdd: '', card: 'Fury'},
  {content: 'Antimagic field online, switching KRS-1555 to combat mode. I\'d like to see Mai top this!', person: 'Mira', personAdd: '', card: 'Barrier'},
  {content: 'My breath is the one thing I can\'t run fast enough to catch.', person: 'Samya', personAdd: '', card: 'Vapors'},
  // Clash of Inventors
  {stack: 'coi', content: 'An ancient piece, this still functioning mecha was recovered from the ruins of old Armis. Ionic dating places it at over 500 years old!', person: '', personAdd: '', card: 'Steam Knight'},
  {stack: 'coi', content: 'Mira brings us this amazing advancement in nonviolent threat dispersal and hazard warning. Earplugs are mandatory within the viewing area.', person: '', personAdd: '', card: 'Sonic Jammer'},
  {stack: 'coi', content: 'Truly remarkable! Rather than seeking to outdo nature, this design works in harmony with it! Sidenote, establish 100m perimeter around display area.', person: 'Festival Judge\'s Notes', personAdd: '', card: 'Chromeosaur'},
  {stack: 'coi', content: 'One day I\'ll be big enough to swing this sword myself', person: 'Buster, Squire', personAdd: '', card: 'Buster, Squire'},
  {stack: 'coi', content: 'After breaking the High Striker game for the third consecutive year in a row, Big Fighting Robot 9001 was unfortunately barred from using it.', person: '', personAdd: '', card: 'B.F.R. 9001'},
  {stack: 'coi', content: 'Lemures are harmless little spirits... but if you scare one, even a little, its shrieks will let every harmful thing in the jungle know that dinner is served.', person: 'Rags, Lemur Wrangler', personAdd: '', card: 'Ether Lemure'},
  {stack: 'coi', content: 'New expeditions into the Saurian Jungle to unearth its secrets are ongoing! Casualties remain within the anticipated range.', person: 'Exhibit Description', personAdd: '', card: 'Discover'},
  {stack: 'coi', content: 'The festival\'s mech battling competition took a wild turn when it was discovered that, in fact, there was no written rule saying the Saurian \'couldn\'t register a dinosaur as their \'invention\'.', person: '', personAdd: '', card: 'Primal Clash'},
  {stack: 'coi', content: 'While the festival reveled, half a world away, Tiamat raged, and the Hexbound burned.', person: 'Samya', personAdd: '', card: 'Tiamat\'s Rage'},
  {stack: 'coi', content: 'Always interested in mortal affairs, Dracomantium graced the festival with a much lauded appearance, though she accidentally pulverized the landing strip on entry.', person: '', personAdd: '', card: 'Dracoimpact'},
  {stack: 'coi', content: 'None but Samya are fast enough to stop their arrows.', person: 'Jack R. Abit, Lapin Inventor', personAdd: '', card: 'Cyber Sniper'},
  {stack: 'coi', content: 'And here we have Mai\'s submission! It seems guaranteed to \'bore\' the competition to death!', person: '', personAdd: '', card: 'Drillbot'},
  {stack: 'coi', content: 'For the first time in the festival\'s two century history, emissaries from the Exo were permitted to attend. The reception was somewhat frigid.', person: '', personAdd: '', card: 'Bloodletter'},
  {stack: 'coi', content: 'Many of Kore\'s youth entered the grand race using modified standard-issue lightboards, but only those few with true skill could keep up with real inventions.', person: '', personAdd: '', card: 'Lightboarder'},
  {stack: 'coi', content: 'For the Wildfolk, it\'s not about winning or losing. It\'s about how big the crashes are, and how many get to witness them.', person: 'Mai', personAdd: '', card: 'Wildland Biker'},
  {stack: 'coi', content: 'Here comes famed daredevil E. Vul Kitnevel, preparing to jump fifteen Coal Dozers! We\'ve got paramedics on standby.', person: '', personAdd: '', card: 'Dare-Devulpine'},
  {stack: 'coi', content: 'Come one, come all! And bring a friend!', person: 'Ticket Inscription', personAdd: '', card: 'Fair Ticket'},
  {stack: 'coi', content: 'Micron Drones are programmed to complete their mission, no matter the cost to themselves.', person: 'Zoey', personAdd: '', card: 'Drone Surge'},
  {stack: 'coi', content: 'The revenants showcased a project focused on harnessing and concentrating the river Mavron\'s natural energies into a power source.', person: '', personAdd: '', card: 'Baneful Strike'},
  {stack: 'coi', content: 'They\'re coming to the finish line now! WAIT, WAIT, NO ONE HAS EVER DONE THAT IN THE HISTORY OF SKY!', person: 'Gaius, Race Announcer', personAdd: '', card: 'Dash for the Cup'},
  {stack: 'coi', content: 'You want it, I have it! As long as \'it\' is among the opulent, extravagant, and exorbitant vintages.', person: '', personAdd: '', card: 'Mixolotron'},
  {stack: 'coi', content: 'In spite of all our technological advancements, Pokey somehow manages to deliver the festival\'s flyers one step ahead of us.', person: '', personAdd: '', card: 'Pokey, Mailpig'},
  {stack: 'coi', content: 'Glizzcorp is not responsible for any injuries sustained due to flying consumables', person: 'Glizzbot Liability Warning', personAdd: '', card: 'Glizzbot 325'},
  {stack: 'coi', content: 'This one seems to be a huge hit with the kids this year - we can only hope it lasts long enough to make it to final judging!', person: '', personAdd: '', card: 'Dessert Golem'},
  {stack: 'coi', content: 'A cook is only as fresh as her ingredients and as sharp as her knife.', person: 'Mila, Tortugan Chef', personAdd: '', card: 'Tortugan Cook'},
  {stack: 'coi', content: 'This entry was actually rediscovered after over half a century in storage due to a misfiling, but as you can see, under its rust of course, it\'s still as potent as ever!', person: '', personAdd: '', card: 'Junk Golem'},
  {stack: 'coi', content: 'Turn my daughter back into a turtle, THIS INSTANT!', person: 'Unhappy Tortugan Mother', personAdd: '', card: 'Croakus Pocus'},
  {stack: 'coi', content: 'This is your bi-hourly reminder that the Festival of Invention is sponsored by Gepei Loan Incorporated, funding the dreams of the people of Kore City, no matter how big or small!', person: '', personAdd: '', card: 'Overdraft'},
  {stack: 'coi', content: 'For their contribution to the Festival, the dreamers performed grand illusions in the night, making it seem as though the stars themselves had descended to embrace the earth.', person: 'Samya', personAdd: '', card: 'Dreamcalling'},
  {stack: 'coi', content: 'Ether Crystals bond with living things, infusing both crystal and bonded with new life energy', person: 'Armis research notes', personAdd: '', card: 'Gigabloom'},
  {stack: 'coi', content: 'Tireless scavengers, they dig through piles of scrap for weeks to find a single half-burned out Ether Crystal.', person: '', personAdd: '', card: 'Scarabot'},
  {stack: 'coi', content: 'Crush it, smash it, burn it to the ground. Life will still spring back into gear with renewed vigor.', person: 'Bouran', personAdd: '', card: 'Mechshroom'},
  {stack: 'coi', content: 'Tickets are sold out, you say? Well, I happen to have some right here. Fair tickets... for a \'fair\' price.', person: '', personAdd: '', card: 'Shady Dealer'},
  {stack: 'coi', content: 'Just strip off the paint, replace the screws, the panels, gears, wires, and replace 90% of the machinery. It\'ll be good as new!', person: 'Samya', personAdd: '', card: 'Crystal Restorer'},
  {stack: 'coi', content: 'Sitti did not bring an invention of her own. She simply raised her hand, and all the rejected, broken, and forgotten inventions arose as one to form her champion.', person: '', personAdd: '', card: 'Scrapstrosity'},
  {stack: 'coi', content: 'We Revenant are born among the bones of countless fallen civilizations. It\'s only natural we build great things from what they left behind', person: 'Kiri, Revenant Steamcrafter', personAdd: '', card: 'Harbinger'},
  {stack: 'coi', content: 'Everything we achieve is the result of generations upon generations of inventors working across lifetimes to push others to even greater heights.', person: 'Mekk A. Bunn II, gadgeteer', personAdd: '', card: 'Tireless Iteration'},
  {stack: 'coi', content: 'I do not raise the dead against The Cycle\'s will, I implore The Cycle to allow them to aid me, if they so choose. We are not the same.', person: 'Bouran, to Sitti', personAdd: '', card: 'Rise From Scrap'},
  {stack: 'coi', content: 'Armis uses Ether Crystals gained by clear-cutting forests as a power source and no-one makes a peep. I use a few mortal souls and everyone loses it.', person: 'Allbane', personAdd: '', card: 'Soul Drain'},
  {stack: 'coi', content: 'Of the five Mellin projects accepted to the festival for being \'of sufficiently low combustible risk\', only half of one was left intact by the festival\'s end.', person: '', personAdd: '', card: 'Self Destruct'},
  {stack: 'coi', content: 'As expected, the Lapin are out in force this year! Look at those Micron Drones multiply!', person: '', personAdd: '', card: 'Lapin Microneer'},
  {stack: 'coi', content: 'Dear Qui, WHY?', person: 'Festival Judge\'s Memo', personAdd: '', card: 'Fren-Z'},
  {stack: 'coi', content: 'Micron Drones were originally just meant as servants, but now they\'re so much more.', person: '', personAdd: '', card: 'Torques'},
  {stack: 'coi', content: 'It seems Ari has devised a means of improving upon his family\'s Micron Drones by creating an even more efficient system to organize and dispatch them! Truly impressive!', person: '', personAdd: '', card: 'Micro-Manager'},
  {stack: 'coi', content: 'Own mobility... insufficient... acquiring new mobility unit.', person: '', personAdd: '', card: 'Body Snatcher'},
  {stack: 'coi', content: 'It seems that a local library felt left out and it has decided to join in the festivities! Please remain at a safe distance to avoid paper cuts.', person: 'Festival intercom', personAdd: '', card: 'Tome Golem'},
  {stack: 'coi', content: 'Future Note - When selecting judges, ensure \'sparkliness\' is not the sole factor they rank inventions on!', person: 'Internal Festival Memo', personAdd: '', card: 'Ooh! Shiny!'},
  {stack: 'coi', content: 'At the slightest hint of trouble, Micron Drones are deployed to neutralize any threat to the festival\'s security.', person: '', personAdd: '', card: 'Micro-Swarm'},
  {stack: 'coi', content: 'Pandora\'s new mental subdivider promised to \'double\' one\'s mental output. Unfortunately, it seems to still have a few kinks in need of smoothing out.', person: 'Judges Notes', personAdd: '', card: 'Double Trouble'},
  {stack: 'coi', content: 'One particularly ignored booth at the festival provided highly accurate models and predictions on the Glitch Storm, and the catastrophic consequences looming just upon the horizon.', person: '', personAdd: '', card: 'Glitchbreak'},
  {stack: 'coi', content: 'Ether crystals strengthen their host\'s own body and health, later taking back a small portion of that renewed vigor into themselves.', person: 'Armis research notes', personAdd: '', card: 'Crystalceratops'},
  {stack: 'coi', content: 'The result of a thousand years of techonolgical advancement is still no match for a million of Simian evolution.', person: '', personAdd: '', card: 'Wu-Kin Scrapper'},
  {stack: 'coi', content: 'When we have gathered knowledge of everything that was, is, and is yet to be, then may we rest.', person: 'Dreamer\'s Oath', personAdd: '', card: 'Lorekeeper'},
  {stack: 'coi', content: 'It was submitted anonymously with the title \'the price of your sins.\' Neutralize it and burn the remains.', person: 'Internal Missive', personAdd: '', card: 'Mechaboid'},
  {stack: 'coi', content: 'All great things in this world were born through the efforts of the small.', person: 'Mira', personAdd: '', card: 'Big Friend'},
  {stack: 'coi', content: 'I don\'t care if its within the Festival\'s rules! If they got it from the Dreamfield, they need to take it back!', person: 'Fair Admissions', personAdd: '', card: 'Blood of Yxxath'},
  {stack: 'coi', content: 'Better to try your best and crash than give up without trying!', person: '', personAdd: '', card: 'Reckless Racer'},
  {stack: 'coi', content: 'Events like this need funding. Just how much does Kore\'s brass owe Gepei\'s financiers at this point?', person: 'Zoey', personAdd: '', card: 'Farcat Banker'},
  {stack: 'coi', content: 'The Oni have delivered these fantastic fireworks to us, garunteed to send the Festival off with a BANG!', person: '', personAdd: '', card: 'Festival Cannon'},
  {stack: 'coi', content: 'Made entirely of junk code, the beast quickly stole the data of several submissions before dissapearing into the night.', person: '', personAdd: '', card: 'Bit Shifter'},
  {stack: 'coi', content: 'All right, the Doom Shrooms are taken care of... Dear Qui! What is that!?', person: 'Festival Security', personAdd: '', card: 'Hugeify'},
  {stack: 'coi', content: 'Testing with the Firepack V2 went great until the customers with fur noticed they didn\'t have any after its usage.', person: '', personAdd: '', card: 'Turboboost'},
  {stack: 'coi', content: 'OH! that one has got to hurt!', person: 'Mech battling announcer', personAdd: '', card: 'Shield Bash'},
  {stack: 'coi', content: 'What do you mean \'is now a good time for the Doom Shrooms?\' There\'s never a good time for Doom Shrooms!', person: 'Festival Security', personAdd: '', card: 'Rising Doom'},
  {stack: 'coi', content: 'When our mother sings, all life raises its voice in concert with her.', person: 'Miss Aya', personAdd: '', card: 'Ethersurge'},
  {stack: 'coi', content: 'As the great inventor\'s race drew nearer, competitors tried anything to get an edge over their rivals.', person: '', personAdd: '', card: 'Tune-Up'},
  {stack: 'coi', content: 'Grief is ice, freezing the soul, making all numb. Anger is flame, searing, burning, melting away all hestation.', person: 'Zoey', personAdd: '', card: 'Searing Rage'},
  {stack: 'coi', content: 'All invention begins with a spark of inspiration, setting the soul aflame with passion', person: 'Mai', personAdd: '', card: 'Stoke'},
  {stack: 'coi', content: 'The Dryads performed an elaborate dance for onlookers, weaving toxic vines into fantastic topiaries as deadly as they were beautiful.', person: '', personAdd: '', card: 'Boon of Nettles'},
  {stack: 'coi', content: 'Overclocking to 200%. WARNING, WARNING. Exceeding regulation limits could have dire consequences.', person: '', personAdd: '', card: 'Overdrive'},

  // Fan Theories
  {content: 'UM we\'re getting a 6th prism and considering the genesis prism has been hinted at a lot I wonder if we\'ll be able to mix more than 2 prisms.', person: 'MissRex', personAdd: '', card: 'Fan Theory'},
  {content: 'Also I think the Tortugan are badass and could defeat Armis with their eyes closed but they\'re just minding their own business.', person: 'MissRex', personAdd: '', card: 'Fan Theory'},
  {content: 'Undragon is either beyond the cycle, in some type of rebellion against it, or is a physical embodiment of the cycle itself', person: 'JustAddBacon', personAdd: '', card: 'Fan Theory'},
  {content: 'What Horik is trying to unleash is Undragon. Ada and Bouran will team up against him, while Sitti will team up with Horik because she also wants to unleash the undead dragon albeit for a different reason.', person: 'HenryChess', personAdd: '', card: 'Fan Theory'},
  {content: 'Fox is runaway royalty, and perhaps had former connections with Armis.', person: 'JustAddBacon', personAdd: '', card: 'Fan Theory'},
  {content: 'Technology and magic are the same thing manifested in different ways. Just look at magic wielders in Sky: many of them have technological patterns on their outfits.', person: 'HenryChess', personAdd: '', card: 'Fan Theory'}

]


// live search bar
$(document).ready(function(){
  $("#searchInput").keyup(function(){
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;
    // Loop through the comment list
    $(".loreBlock").each(function(){
        // If the list item does not contain the text phrase fade it out
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();
        // Show the list item if the phrase matches and increase the count by 1
        } else {
          $(this).show();
            count++;
          }
    });
    // Update the count
    var numberItems = count;
    $(".amount").text(count + " Results");
});
});

//copy lore to clipbaord
function copyLore() {
  $(".fa-clipboard").click(function() {
      var text = $(this).closest(".loreBlock").find('.loreContent').text();
      console.log(text);
      navigator.clipboard.writeText(text);
      alert("Lore content copied!");
  });
};

// move faction on screen
function moveFaction() {
  $('#factionbtn').on('click', function() {
    $('#factionhelp').toggle();
    $('.factions').toggleClass('factionmove');
  })
  $('#factionclose').on('click', function() {
    $('.factions').toggleClass('factionmove');
  })
}

//copy sequence wallet
function copyWallet() {
  let value = '0x380C31A8960B2d694b463756f00fd406422C756B';
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(value);
  /* Alert the copied text */
  alert("Wallet address copied!");
}


// play sky theme
function skyTheme() {
  var myAudio = document.getElementById("theme");
  myAudio.volume = 0.5;

  var isPlaying = false;


  $('#playtheme').on('click', function() {
    console.log('music click');
    isPlaying ? myAudio.pause() : myAudio.play();
  })

  myAudio.onplaying = function() {
    isPlaying = true;
  };
  myAudio.onpause = function() {
    isPlaying = false;
  };
}

// go full screen
$('#fullscreen').on('click', function() {
  toggleFullScreen();
  $(this).find('i').toggleClass('fa-maximize fa-minimize');
})

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

$('.play').on('click',function() {
  $(this).find("i").toggleClass("fa-music-slash fa-music");
});

//show patch Notes
function showNotes() {
  $('#notes').on('click', function() {
    $('#patchsection').toggleClass('patchSlide');
  })
}
//close nothinges with x
function closeNotes() {
  $('#closenotes').on('click', function() {
    $('#patchsection').removeClass('patchSlide');
  })
}

// hidden egg/giveaway function
// hidden gem icons - <i class="fad fa-gifts"></i><i class="fad fa-tree-christmas"></i>
function hiddenGem() {
  var text = $('.card').innerText;
  //console.log(text);
}

// display lore blocks
function showLore() {
  var result = '';
  result = lore.map(function(item) {
  var text = item.card; //Trinketeer
  if(item.card == 'Trinketeer') {
    $('.loreBlock').addClass('special');
  }
  return "<div class='loreBlock'>"
    + "<h3 class='loreContent'>" + item.content + "</h3>"
    + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
    + "<p class='card'>Card: " + item.card + "</p></div>"
    + "<i class='fa-solid fa-clipboard'></i>"
  });
  $('.allLore').html(result);
}

function showCOILore() {
  var result = '';
    result = lore.map(function(item) {
    if (item.stack == ('coi')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showMaskLore() {
  var result = '';
    result = lore.map(function(item) {
    if (item.person == ('Mask Inscription')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showHeroLore() {
  var result = '';
    result = lore.map(function(item) {
    if ((item.person == 'Zoey') || (item.person == 'Iris') || (item.person == 'Samya') || (item.person == 'Titus') ||
    (item.person == 'Horik') || (item.person == 'Ada') || (item.person == 'Lotus') || (item.person == 'Bouran') ||
    (item.person == 'Axel') || (item.person == 'Mira') || (item.person == 'Mai') || (item.person == 'Banjo') ||
    (item.person == 'Sitti') || (item.person == 'Ari') || (item.person == 'Fox')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showGenesis() {
  var result = '';
    result = lore.map(function(item) {
    if (item.person == ('The Genesis of Sky')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showHistory() {
  var result = '';
    result = lore.map(function(item) {
    if (item.person == ('Histories of Sky')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showQui() {
  var result = '';
    result = lore.map(function(item) {
    if (item.person == ('The Quiology')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showJak() {
  var result = '';
    result = lore.map(function(item) {
    if (item.person == ('Jakintsu')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showDragon() {
  var result = '';
    result = lore.map(function(item) {
    if ((item.person == 'Amaruath') || (item.person == 'Tiamat') || (item.person == 'Cryogen') ||
      (item.person == 'Undragon') || (item.person == 'Kha Mhet') || (item.person == 'Great Gusto') ||
      (item.person == 'Dracomantium')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showEarth() {
  var result = '';
    result = lore.map(function(item) {
    if (item.person == ('Miss Aya')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showArmis() {
  var result = '';
    result = lore.map(function(item) {
    if (item.person.includes('Armis')) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showOni() {
  var result = '';
    result = lore.map(function(item) {
    if ((item.content.includes('Oni')) || (item.person.includes('Oni'))) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showDream() {
  var result = '';
    result = lore.map(function(item) {
    if ((item.content.includes('Dreamfield')) || (item.person.includes('Dreamfield'))) {
      return "<div class='loreBlock'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function showFans() {
  var result = '';
    result = lore.map(function(item) {
    if (item.card.includes('Fan Theory')) {
      return "<div class='loreBlock fanblocks'>"
        + "<h3>" + item.content + "</h3>"
        + "<div class='loreExtra'><p class='person'>Origin: " + item.person + "</p>"
        + "<p class='card'>Card: " + item.card + "</p></div>"
        + "<i class='fa-solid fa-clipboard'></i>"
    }
  });
  $('.allLore').html(result);
}

function clickCOI() {
    $('#clash').on('click', function() {
      showCOILore()
      getCount()
    })
}

function getCount() {
  var count = $('.loreBlock').length + ' Results';
  $('.amount').html(count);
};

function clickAll() {
    $('#all').on('click', function() {
      showLore()
      getCount()
    })
}

function clickMask() {
    $('#mask').on('click', function() {
      showMaskLore()
      getCount()
    })
}

function clickHero() {
    $('#hero').on('click', function() {
      showHeroLore()
      getCount()
    })
}

function clickGenesis() {
    $('#genesis').on('click', function() {
      showGenesis()
      getCount()
    })
}

function clickHistory() {
    $('#history').on('click', function() {
      showHistory()
      getCount()
    })
}

function clickQui() {
    $('#qui').on('click', function() {
      showQui()
      getCount()
    })
}

function clickDream() {
    $('#dream').on('click', function() {
      showDream()
      getCount()
    })
}

function clickJak() {
    $('#jak').on('click', function() {
      showJak()
      getCount()
    })
}

function clickDragon() {
    $('#dragon').on('click', function() {
      showDragon()
      getCount()
    })
}

function clickEarth() {
    $('#earth').on('click', function() {
      showEarth()
      getCount()
    })
}

function clickArmis() {
    $('#armis').on('click', function() {
      showArmis()
      getCount()
    })
}

function showMobile() {
    $('#showMobileMenu').on('click', function() {
      $('.nav').toggleClass('menuOut');
    })
}
function catMenuMobileToggle() {
    $('.mobileTrack').on('click', function() {
      $('.nav').toggleClass('menuOut');
    })
}

function showDonate() {
    $('#dono').on('click', function() {
      $('.eth').toggleClass('show');
    })
}

function clickOni() {
    $('#oni').on('click', function() {
      showOni()
      getCount()
    })
}

$(function () {
hiddenGem();
showMobile();
getCount();
showLore();
clickAll();
clickMask();
clickHero();
clickGenesis();
clickHistory();
clickQui();
clickJak();
showDonate();
clickDragon();
clickEarth();
clickArmis();
showNotes();
closeNotes();
clickOni();
skyTheme();
catMenuMobileToggle();
moveFaction();
clickCOI();
copyLore();
clickDream();
});
