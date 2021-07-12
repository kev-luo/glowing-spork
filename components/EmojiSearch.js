import { useState, useEffect } from "react";
import { Box, Input } from "@chakra-ui/react";

export default function EmojiSearch() {
  // emoji list to render
  let emojiList = [
    {
      symbol: "⏳",
      title: "Loading...",
    },
  ];

  //   use search term to filter emojiList by title or keyword keys
  const filterEmoji = (searchText, maxResults) => {
    return emojiList
      .filter((emoji) => {
        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }

        if (emoji.keywords.includes(searchText)) {
          return true;
        }

        return false;
      })
      .slice(0, maxResults);
  };
  const { filteredEmojis, setFilteredEmojis } = useState(filterEmoji("", 20));

  //   update state after filtering emojis when search input is changed
  const searchText = (evt) => {
    setFilteredEmojis(filterEmoji(evt.target.value, 20));
  };

  //   get initial list of emojis upon initial component render
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ahfarmer/emoji-search/master/src/emojiList.json"
    )
      .then((data) => data.json())
      .then((data) => {
        emojiList = data;
        searchText("");
      });
  }, []);

  return (
    <Box>
      <Input placeholder="Emoji Search" name="emoji" onChange={searchText} />
      <ul>
        {filteredEmojis.length > 0 ? (
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
