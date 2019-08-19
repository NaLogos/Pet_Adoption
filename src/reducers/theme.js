export default function theme(state = "Chartreuse", action) {
  if (action.type === "CHANGE_THEME") {
    return action.payload;
  } else {
    return state;
  }
}
