const mainColors = {
    blue1: "#082641",
    blue2: "#0A3356",
    dark1: "#0A0A0A",
    dark2: "#212529",
    light: "#FFFFFF",
    grey: "#EDEEF0",
    dark3: "#E9E9E9",
    red1: "#DC3545",
    green1: "#2ECC71",
    black2: 'rgba(0, 0, 0, 0.8)'

}

export const colors = {
    primary: mainColors.blue1,
    secondary: mainColors.blue2,
    tertiary: mainColors.dark2,
    foutery: mainColors.dark1,
    fivetery: mainColors.red1,
    sixtiary: mainColors.green1,
    disable: mainColors.dark2,
    grow: mainColors.light,

    text: {
        primary: mainColors.dark1,
        secondary: mainColors.dark2,
        menuInActive: mainColors.dark2,
        menuActive: mainColors.dark1,
    },

    button: {
        primary: {
            background: mainColors.blue2,
            text: 'white'
        },
        secondary: {
            background: mainColors.light,
            text: mainColors.dark1
        },
        disable: {
          background: mainColors.grey,
          text: mainColors.dark3
        }
      },

      border: mainColors.blue1,
      borderError: mainColors.red1,
      loadingBackground: mainColors.black2,
};
