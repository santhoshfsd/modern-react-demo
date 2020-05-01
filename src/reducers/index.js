import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "No Scrubs", duration: "5.0" },
    { title: "Vathi Raid", duration: "4.0" },
    { title: "Vaathi coming", duration: "3.26" },
    { title: "VIP ", duration: "3.56" },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectSongReducer,
});
