import { useState, useEffect } from "react";
import { Box, Input } from "@chakra-ui/react";

export default function EmojiSearch() {
  const initialState = [
    { symbol: "⏳", title: "Loading...", keywords: ["Loading"] },
  ];
  const [emojiList, setEmojiList] = useState(initialState);
  //   use search term to filter emojiList by title or keyword keys
  const filterEmoji = (searchText, maxResults) => {
    return emojiList
      .filter((emoji) => {
        if (emoji?.title.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }

        if (emoji?.keywords.includes(searchText)) {
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

  const handleChange = (evt) => {
    const filteredList = filterEmoji(evt.target.value, 20);
    setFilteredEmojis(filteredList);
  };
  return (
    <Box>
      <Input placeholder="Emoji Search" name="emoji" onChange={handleChange} />
      <ul>
        {filteredEmojis?.length > 0 ? (
          filteredEmojis.map((emoji, index) => {
            return (
              <li key={index}>
                {emoji.symbol} {emoji.title}
              </li>
            );
          })
        ) : (
          <li>No matches</li>
        )}
      </ul>
    </Box>
  );
}
