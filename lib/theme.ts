export const themeStorageKey = "theme";

// Runs before first paint (inline in the layout) so a forced theme never flashes the system one.
export const themeInitScript = `try{var t=localStorage.getItem("${themeStorageKey}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
