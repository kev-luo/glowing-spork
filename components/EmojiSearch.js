import { useState, useEffect } from "react";

import SearchIcon from "./SVG/SearchIcon";
import PostImage from "./FrontPage/PostImage";
import CloseButton from "./CloseButton";

export default function EmojiSearch(props) {
  const { onEmojiChange, post } = props;
  const initialState = [{ symbol: "", title: "search", keywords: [""] }];
  const [emojiList, setEmojiList] = useState(initialState);
  const [searchState, setSearchState] = useState("");

  const handleChange = (evt) => {
    const filteredList = filterEmoji(evt.target.value, 20);
    setFilteredEmojis(filteredList);
    setSearchState(evt.target.value);
  };
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

  function selectEmoji(emoji) {
    const { title, symbol } = emoji;
    if (title !== "") {
      onEmojiChange(symbol, title);
      setSearchState("");
      console.log(title);
    }
  }

  return (
    <>
      {post.postEmoji === "" ? (
        <section
          className={`${
            post.postEmoji ? "hidden" : "block"
          } relative w-full max-w-md rounded-md`}
        >
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon />
            </span>

            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Emoji Search"
              name="emoji"
              value={searchState}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {searchState != "" && (
            <div className="absolute inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-gray-800 dark:border-transparent">
              <div className="flex">
                {filteredEmojis?.length > 0 ? (
                  filteredEmojis.map((emoji, index) => {
                    return (
                      <button key={index} onClick={() => selectEmoji(emoji)}>
                        <span className="p-1 shadow-none cursor-pointer hover:shadow-inner rounded">
                          {emoji.symbol}
                        </span>
                      </button>
                    );
                  })
                ) : (
                  <div>No matches</div>
                )}
              </div>
            </div>
          )}
        </section>
      ) : (
        <div>
          <PostImage label={post.title} emoji={post.postEmoji} />
          <CloseButton onEmojiChange={onEmojiChange} />
        </div>
      )}
    </>
  );
}
