// EnglishCards — vocabulary data
// Same shape as anki-german.jsx, adapted for English:
//   { id, level, english, spanish, wordType, topic, example, notes,
//     plural,                       // nouns
//     regularity, pastSimple, pastParticiple, presentSimple,
//     phrasalVerb, particle, modal, // verbs
//     comparative, superlative,     // adjectives
//     conjType,                     // conjunctions
//     register }
// wordType: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'phrase' | 'other'
// level: matches a deck id, e.g. 'A1', 'A2', 'B1.1', 'B1.2'
//
// A handful of sample cards below just to test that everything renders
// correctly (study screen, tarjetas list/grid, filters, search, stats...).
// Delete them whenever you're ready to load your real vocabulary.
var CARDS = [
  {id:1, level:'A1', english:'hello', spanish:'hola', wordType:'phrase', topic:'Greetings',
    example:'Hello! How are you today?', notes:'Informal or neutral greeting, works any time of day.'},

  {id:2, level:'A1', english:'house', spanish:'casa', wordType:'noun', topic:'Housing',
    plural:'houses', example:'They bought a small house near the beach.'},

  {id:3, level:'A1', english:'child', spanish:'ni\u00f1o / ni\u00f1a', wordType:'noun', topic:'Family',
    plural:'children', example:'The child was playing in the garden.',
    notes:'Irregular plural.'},

  {id:4, level:'A1', english:'to be', spanish:'ser / estar', wordType:'verb', topic:'Daily Life',
    regularity:'irregular', pastSimple:'was/were', pastParticiple:'been', presentSimple:'is',
    example:'I am a student.', notes:'The most irregular verb in English.'},

  {id:5, level:'A1', english:'to work', spanish:'trabajar', wordType:'verb', topic:'Jobs & Work',
    regularity:'regular', pastSimple:'worked', pastParticiple:'worked', presentSimple:'works',
    example:'She works at a hospital.'},

  {id:6, level:'A2', english:'to give up', spanish:'rendirse / dejar de hacer algo', wordType:'verb', topic:'Daily Life',
    regularity:'irregular', pastSimple:'gave up', pastParticiple:'given up',
    phrasalVerb:true, particle:'up',
    example:'Don\u2019t give up, you\u2019re almost there!'},

  {id:7, level:'A1', english:'can', spanish:'poder', wordType:'verb', topic:'Daily Life',
    modal:true, example:'Can you help me, please?', notes:'Modal verb; no -s in third person, no \u201cto\u201d before the next verb.'},

  {id:8, level:'A1', english:'happy', spanish:'feliz / contento', wordType:'adjective', topic:'Daily Life',
    comparative:'happier', superlative:'happiest', example:'She looks very happy today.'},

  {id:9, level:'A2', english:'beautiful', spanish:'hermoso / bonito', wordType:'adjective', topic:'Daily Life',
    comparative:'more beautiful', superlative:'most beautiful',
    example:'What a beautiful sunset!', notes:'Long adjective \u2192 uses more/most instead of -er/-est.'},

  {id:10, level:'A1', english:'quickly', spanish:'r\u00e1pidamente', wordType:'adverb', topic:'Daily Life',
    example:'He finished his homework quickly.'},

  {id:11, level:'A1', english:'under', spanish:'debajo de', wordType:'preposition', topic:'Housing',
    example:'The cat is sleeping under the table.'},

  {id:12, level:'A1', english:'because', spanish:'porque', wordType:'conjunction', topic:'Communication',
    conjType:'subordinating conjunction',
    example:'I stayed home because it was raining.'},

  {id:13, level:'A2', english:'both...and', spanish:'tanto... como', wordType:'conjunction', topic:'Communication',
    conjType:'correlative conjunction',
    example:'She speaks both English and French.'},

  {id:14, level:'A1', english:'thank you', spanish:'gracias', wordType:'phrase', topic:'Greetings',
    example:'Thank you very much for your help!'},

  {id:15, level:'A2', english:'gonna', spanish:'ir a (informal, = going to)', wordType:'other', topic:'Communication',
    register:'informal', example:'I\u2019m gonna call you later.',
    notes:'Very common in spoken English; avoid in formal writing.'},

  {id:16, level:'A2', english:'to take off', spanish:'despegar (avi\u00f3n) / quitarse (ropa)', wordType:'verb', topic:'Tourism',
    regularity:'irregular', pastSimple:'took off', pastParticiple:'taken off',
    phrasalVerb:true, particle:'off',
    example:'The plane takes off at 9am.'}
];
