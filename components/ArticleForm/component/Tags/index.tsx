import { FC, useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "@material-ui/core";
import tagsArr from "./tags";
import useStyles from "./styles";

const Tags: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const [inputValue, setInputValue] = useState<string>("");
  const [tagsList, setTagsList] = useState<
    (
      | {
          name: string;
          rules_html: string;
        }
      | {
          name: string;
          rules_html: null;
        }
    )[]
  >([]);
  const [selectedTags, setSelectedTags] = useState<(string | false)[]>([]);
  const [showingTopTags, setShowingTopTags] = useState(false);
  const [searchResults, setSearchResults] = useState<
    (
      | {
          name: string;
          rules_html: string;
        }
      | {
          name: string;
          rules_html: null;
        }
    )[]
  >([]);
  const [topTags, setTopTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTagsList(tagsArr);
  }, [setTagsList]);

  const insertSpace = (value: string, position: number) => {
    return `${value.slice(0, position)} ${value.slice(position, value.length)}`;
  };

  const getCurrentTagAtSelectionIndex = (value: string, index: number) => {
    let tagIndex = 0;
    const tagByCharacterIndex: any = {};

    value.split("").forEach((letter: string, letterIndex: number) => {
      if (letter === ",") {
        tagIndex += 1;
      } else {
        tagByCharacterIndex[letterIndex] = tagIndex;
      }
    });

    const tag = value.split(",")[tagByCharacterIndex[index]];

    if (tag === undefined) {
      return "";
    }
    return tag.trim();
  };

  function handleChange(
    evt: React.ChangeEvent<HTMLInputElement> | React.BaseSyntheticEvent<any>
  ) {
    var { value } = evt.target;

    if (evt.target.selectionStart !== null) {
      setInputValue(value);
      const isTypingAfterComma =
        evt.target.value[evt.target.selectionStart - 2] === ",";
      if (isTypingAfterComma) {
        value = insertSpace(value, evt.target.selectionStart - 1);
      }
    }
    console.log(evt);
    if (evt.nativeEvent.data === ",") {
      value += " ";
      setInputValue(value);
    }
    if (evt.target.selectionStart != null) {
      const query = getCurrentTagAtSelectionIndex(
        evt.target.value,
        evt.target.selectionStart - 1
      );
      setSearchQuery(query);
    }
  }

  const handleTagClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    let tagName = (evt.target as HTMLElement).dataset.content || "";
    const input = document.getElementById("tag-input");
    input?.focus();

    insertTag(tagName);
  };

  const getRangeBetweenCommas = (value: string, index: number | null) => {
    let start = 0;
    let end = value.length;
    let toPreviousComma = 0;
    if (index !== null) {
      if (index !== undefined && index !== null) {
        toPreviousComma = value
          .slice(0, index)
          .split("")
          .reverse()
          .indexOf(",");
      }
      const toNextComma = value.slice(index).indexOf(",");

      if (toPreviousComma !== -1) {
        start = index - toPreviousComma + 1;
      }

      if (toNextComma !== -1) {
        end = index + toNextComma;
      }
      return [start, end];
    }
    return [0, 0];
  };

  const insertTag = (tag: string) => {
    const input = document.getElementById("tag-input") as HTMLInputElement;
    const maxTags = 4;
    const range = getRangeBetweenCommas(input.value, input.selectionStart);
    const insertingAtEnd = range && range[1] === input.value.length;
    const maxTagsWillBeReached = handleSelecteTags().length === maxTags;
    let tagValue = tag;
    if (insertingAtEnd && !maxTagsWillBeReached) {
      tagValue = `${tagValue}, `;
    }

    // Insert new tag between commas if there are any.
    const newInput =
      input.value.slice(0, range[0]) +
      tagValue +
      input.value.slice(range[1], input.value.length);

    setInputValue(newInput);
    setSelectedTags(handleSelecteTags());
  };

  const handleSelecteTags = useCallback(() => {
    return inputValue
      .split(",")
      .map((item) => item !== undefined && item.trim())
      .filter((item) => {
        if (typeof item === "string") {
          return item.length > 0;
        }
      });
  }, [inputValue]);

  const fetchTopTagSuggestions = useCallback(() => {
    searchResults.length > 0 && setShowingTopTags(true);
    if (tagsList.length > 0) {
      return setSearchResults(
        tagsList.filter(
          (t) => !selectedTags.includes(t.name) && t.name.includes(searchQuery)
        )
      );
    }
  }, [searchResults.length, tagsList, selectedTags, searchQuery]);

  const fetchMatchedTag = useCallback(() => {
    setShowingTopTags(true);
    search(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    fetchTopTagSuggestions();
    console.log("fetch");
  }, [fetchTopTagSuggestions]);

  useEffect(() => {
    setSelectedTags(handleSelecteTags());
  }, [inputValue]);

  useEffect(() => {
    fetchMatchedTag();
  }, [fetchMatchedTag, searchQuery]);

  useEffect(() => {
    searchResults.length <= 0 && setShowingTopTags(false);
  }, [searchResults]);

  const handleTagEnter = (evt: React.KeyboardEvent<HTMLDivElement>) => {};

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    fetchTopTagSuggestions();
    searchResults.length > 0 && setShowingTopTags(true);
  };

  const search = (query: string) => {
    if (query === "") {
      return fetchTopTagSuggestions();
    }
    let arr;
    if (handleSelecteTags().length > 0) {
      arr = tagsList.filter(
        (t) => t.name === query || !selectedTags.includes(t.name)
      );
      setSearchResults(arr);
    }
  };

  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (document?.activeElement?.id === "tag-input") {
        return;
      }
      setShowingTopTags(false);
    }, 250);
  };

  const searchResultElm = searchResults.map((tag) => {
    return (
      <div
        key={`option-${tag.name}`}
        tabIndex={-1}
        className={`${classes.searchResultRow}`}
      >
        <div
          role="button"
          className={`${classes.clickableSearchResultRow}`}
          onClick={handleTagClick}
          onKeyDown={handleTagEnter}
          data-content={tag.name}
        ></div>
        <span>{tag.name}</span>
      </div>
    );
  });

  return (
    <div className={classes.Tags}>
      <input
        className={classes.tagsInput}
        type="text"
        id="tag-input"
        data-testid="tag-input"
        aria-label="Post tags"
        placeholder={`Add up to 4 tags...`}
        autoComplete="off"
        onInput={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
      />
      {searchResults && showingTopTags ? (
        <div className={classes.searchResult}>
          <h2 className={classes.searchResultHeading}>Top tags</h2>
          {searchResultElm}
        </div>
      ) : null}
    </div>
  );
};

export default Tags;
