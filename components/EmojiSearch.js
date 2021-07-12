import { useState, useEffect } from "react";
import { Box, Input, List, ListItem } from "@chakra-ui/react";

export default function EmojiSearch(props) {
  const { onClose, onEmojiChange } = props;
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

  function selectEmoji(evt) {
    const emoji = evt.target.childNodes[0].data;
    onEmojiChange(emoji);
    onClose();
  }

  return (
    <Box>
      <Input
        placeholder="Emoji Search"
        name="emoji"
        onChange={(e) => setFilteredEmojis(filterEmoji(e.target.value, 20))}
      />
      <List spacing={1}>
        {filteredEmojis?.length > 0 ? (
          filteredEmojis.map((emoji, index) => {
            return (
              <ListItem key={index} onClick={(evt) => selectEmoji(evt)}>
                {emoji.symbol} {emoji.title}
              </ListItem>
            );
          })
        ) : (
          <li>No matches</li>
        )}
      </List>
    </Box>
  );
}
