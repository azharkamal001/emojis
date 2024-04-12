import React, { useState } from 'react';

const EmojiInputBox= () => {

  const [inputValue, setInputValue] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    setInputValue(text);

    // Replace emojis with corresponding text
    let textWithEmojisReplaced = text;
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😊/g, 'Smiley');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😀/g, 'grinning face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😃/g, 'grinning face with big eyes');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😄/g, 'grinning face with smiling eyes');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😁/g, 'beaming face with smiling eyes');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😆/g, 'grinning squinting face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😅/g, 'grinning face with sweat');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤣/g, 'rolling on the floor laughing');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😂/g, '	face with tears of joy');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙂/g, 'slightly smiling face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙃/g, '	upside-down face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😉/g, 'winking face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😊/g, 'smiling face with smiling eyes');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😇/g, 'smiling face with halo');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🥰/g, 'smiling face with hearts');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😍/g, 'smiling face with heart-eyes');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤩/g, 'star-struck');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😋/g, '	face savoring food');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😛/g, 'face with tongue');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😜/g, '	winking face with tongue');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤪/g, 'zany face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😝/g, 'squinting face with tongue');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤑/g, '	money-mouth face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤗/g, 'smiling face with open hands');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤭/g, '	face with hand over mouth');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤫/g, '	shushing face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤔/g, 'thinking face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤐/g, 'zipper-mouth face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤨/g, '	face with raised eyebrow');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😐/g, '	neutral face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😑/g, 'expressionless face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😶/g, '	face without mouth');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😏/g, 'smirking face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😌/g, '	relieved face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😔/g, 'pensive face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤤/g, 'drooling face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😴/g, 'sleeping face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😷/g, 'face with medical mask');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤒/g, 'face with thermometer');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤕/g, 'face with head-bandage');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤢/g, 'nauseated face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤮/g, 'face vomiting');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😎/g, '	smiling face with sunglasses');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😕/g, 'confused face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😟/g, 'worried face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙁/g, '	slightly frowning face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😮/g, 'face with open mouth');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😯/g, '	hushed face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😨/g, '	fearful face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😭/g, '	loudly crying face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😢/g, 'crying face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😞/g, '	disappointed face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😓/g, 'downcast face with sweat');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😩/g, '	weary face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🥱/g, '	yawning face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😤/g, '	face with steam from nose');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😡/g, 'enraged face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😠/g, 'angry face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤬/g, 'face with symbols on mouth');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😈/g, '	smiling face with horns');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👿/g, 'angry face with horns');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤡/g, 'clown face');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👻/g, 'ghost');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😺/g, '	grinning cat');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😸/g, 'grinning cat with smiling eyes');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/😾/g, 'pouting ca');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/💝/g, '	heart with ribbon');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/💯/g, '	hundred points');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/💫/g, 'dizz');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/💦/g, '	sweat droplets');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/💨/g, 'dashing away');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/💬/g, '	speech balloon');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👋/g, 'waving hand');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤚/g, 'raised back of hand');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🖐/g, '	hand with fingers splayed');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/✋/g, 'raised hand');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🖖/g, '	vulcan salute');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👌/g, 'OK hand');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/✌/g, 'victory hand');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👍/g, 'thumbs up');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👏/g, 'clapping hands');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙌/g, '	raising hands');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤲/g, '	palms up together');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🤝/g, '	handshake');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙏/g, 'folded hands');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/✍/g, 'writing hand');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👶/g, '	baby');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🧒/g, '	child');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👦/g, 'boy');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👧/g, '	girl');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🧑/g, 'person');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👱/g, '	person: blond hair');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👨/g, '	man');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🧔/g, 'person: beard');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👨‍🦲/g, 'man: bald');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👩/g, 'woman');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👴/g, '');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👵/g, 'old woman');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙍/g, '	person frowning');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙍‍♂️/g, '	man frowning');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙍‍♀️/g, '	woman frowning');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙎‍♂️/g, '	man pouting');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙎‍♀️/g, 'woman pouting');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙋‍♂️/g, '	man raising hand');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🙋‍♀️/g, '	woman raising hand');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👨‍⚕️/g, 'man health worker');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👩‍⚕️/g, 'woman health worker');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👨‍🎓/g, 'man student');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👩‍🎓/g, '	woman student');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👨‍🏫/g, 'man teacher');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👩‍🏫/g, '	woman teacher');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👨‍⚖️/g, '	man judge');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👩‍⚖️/g, '	woman judge');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👨‍🌾/g, 'man farmer');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👨‍🍳/g, 'man cook');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👩‍🍳/g, 'woman cook');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👨‍👩‍👧‍👦/g, '	family: man, woman, girl, boy');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🐕/g, '	dog');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🌹/g, '	rose');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🍇/g, '	grapes');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🍈/g, 'melon');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🍉/g, '	watermelon');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🍊/g, '	tangerine');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🍦/g, '	soft ice cream');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🥛/g, 'glass of milk');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/⛰/g, 'mountain');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🌋/g, 'volcano');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/⛪/g, 'church');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🕌/g, '	mosque');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🛕/g, 'hindu temple');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🕍/g, 'synagogue');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/⛩/g, '	shinto shrine');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🕋/g, '	kaaba');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🚑/g, 'ambulance');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🚕/g, 'taxi');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/⛽/g, 'fuel pump');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🚥/g, 'traffic light');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🚀/g, '🚀	rocket');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/⌚/g, 'watch');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🌈/g, 'rainbow');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🔥/g, 'fire');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/💧/g, 'droplet');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🎈/g, '	balloon');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🎁/g, 'wrapped gift');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/🏆/g, 'trophy');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/⚽/g, 'soccer ball');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/👓/g, 'goggles');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/📱/g, 'mobile phone');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/💻/g, 'laptop');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/📷/g, '	camera');
    textWithEmojisReplaced = textWithEmojisReplaced.replace(/📦/g, 'package');
  

    
    setGeneratedText(textWithEmojisReplaced);
  };

  return (
    <div className="InputBox">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text or emojis here"
      />
      <p>Generated text: {generatedText}</p>
    </div>
  );
};

export default EmojiInputBox;