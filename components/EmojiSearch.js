import { useState, useEffect } from "react";

export default function EmojiSearch(props) {
  const { onClose, onEmojiChange } = props;
  const initialState = [
    { symbol: "🔎", title: "Search Emojis", keywords: ["search"] },
  ];
  const [emojiList, setEmojiList] = useState(initialState);
  //   use search term to filter emojiList by title or keyword keys
  const filterEmoji = (searchText, maxResults) => {
    return emojiList
      .filter((emoji) => {
        if (emoji?.title.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }

        if (emoji?.keywords.includes(searchText.toLowerCase())) {
          return true;
        }

        return false;
      })
      .slice(0, maxResults);
  };
  const [filteredEmojis, setFilteredEmojis] = useState(filterEmoji("", 20));

  //   get initial list of emojis upon initial component render
  useEffect(() => {
    // emoji list to render
    fetch(
      "https://raw.githubusercontent.com/ahfarmer/emoji-search/master/src/emojiList.json"
    )
      .then((data) => data.json())
      .then((data) => {
        setEmojiList(data);
      });
  }, []);

  function selectEmoji(evt) {
    const emoji = evt.target.childNodes[0].data;
    const emojiTitle = evt.target.innerText.slice(2);
    if (emojiTitle !== "Search Emojis") {
      onEmojiChange(emoji, emojiTitle);
      onClose();
    }
  }

  return (
    <div>
      <input
        placeholder="Emoji Search"
        name="emoji"
        onChange={(e) => setFilteredEmojis(filterEmoji(e.target.value, 20))}
      />
      <ul>
        {filteredEmojis?.length > 0 ? (
          filteredEmojis.map((emoji, index) => {
            return (
              <li key={index} onClick={(emoji) => selectEmoji(emoji)}>
                {emoji.symbol} {emoji.title}
              </li>
            );
          })
        ) : (
          <li>No matches</li>
        )}
      </ul>
    </div>
  );
}
