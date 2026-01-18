// Used for loaders with items
export const createArray = length => {
  return Array.from({
    length
  }, (_, index) => {
    return index;
  });
};

//Color hover handle - Convert Hex to Rgb -- Returns rgb value
export function hexToRgb(hex) {
  //Remove #
  hex = hex.replace('#', '');
  if (hex.length === 6) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return {
      r,
      g,
      b
    };
  } else {
    return null; // Return null if the hex code is invalid or doesn't match the expected format
  }
}

//Checks how bright color is -- Returns true: color is bright, false: color is dark
export const testBrightness = (color, threshold = 220) => {
  const testColor = hexToRgb(color);
  if (!testColor) {
    return false;
  }

  // Calculate brightness using luminance formula
  const brightness = 0.2126 * testColor.r + 0.7152 * testColor.g + 0.0722 * testColor.b;

  // Compare brightness with threshold
  return brightness > threshold;
};
export const styleElement = (element, property, value, isWhite) => {
  if (element) {
    element.style.setProperty(property, value);
  }
};

// Set table row style different shades
export const styleElementByIndex = (type, index) => {
  if (type === 'even' && index % 2 === 0) {
    return 'lighter-row';
  }
  if (type === 'even' && index % 2 !== 0) {
    return 'darker-row';
  }
  if (type === 'odd' && index % 2 !== 0) {
    return 'lighter-row';
  }
  if (type === 'odd' && index % 2 === 0) {
    return 'darker-row';
  }
};

// Format date of game/events
export const formatDate = date => {
  const [year, month, day] = date.split('-'); // Split the date by "-"
  const shortYear = year.slice(-2); // Get the last two digits of the year
  return `${month}/${day}/${shortYear}`;
};

// Return player age (pass in date of birth)
export const getAge = date => {
  const birthDate = new Date(date);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  if (monthDiff < 0 || monthDiff === 0 && dayDiff < 0) {
    age--;
  }
  return age;
};
export const formatName = name => {
  const splitName = name.split(' ');
  return splitName;
};

// Group players by position (goalkeepers, defenders, midfielders, forwards, managers )
export const findPosition = playerPosition => {
  switch (true) {
    case playerPosition.includes('Wing') || playerPosition.includes('Forward') || playerPosition.includes('Striker') || playerPosition.includes('Attacker'):
      return 'forward';
    case playerPosition.includes('Midfield'):
      return 'midfielder';
    case playerPosition.includes('Back') || playerPosition.includes('Defender'):
      return 'defender';
    case playerPosition.includes('Goalkeeper'):
      return 'goalkeeper';
    case playerPosition.includes('Manager'):
      return 'manager';
    case playerPosition.includes(''):
      return null;
  }
};
export const findPositionFormation = playerPosition => {
  switch (true) {
    case playerPosition.includes('Wing') || playerPosition.includes('Forward') || playerPosition.includes('Striker') || playerPosition.includes('Attacker'):
      return 'forward';

    //if GroupBY.... or isFormation/// whatever some kind of boolean to pass in to differntiage the function from the findPosition but make it one funciton
    case playerPosition.includes('Attacking'):
      return 'attacking-midfield';
    case playerPosition.includes('Midfield'):
      return 'midfielder';
    case playerPosition.includes('Back') || playerPosition.includes('Defender'):
      return 'defender';
    case playerPosition.includes('Goalkeeper'):
      return 'goalkeeper';
    case playerPosition.includes(''):
      return '';
  }
};
const validStatTypes = ["Ball Possession", "Total Shots", "Shots on Goal", "Total passes", "Passes accurate", "Fouls", "Corner Kicks", "Offsides", "Yellow Cards", "Red Cards", "Goalkeeper Saves"];

//Only retreive relevant stats - sort them in order
export const filterAndSortGameStats = gameStats => {
  const filteredStats = gameStats.filter(item => validStatTypes.includes(item.statType)).sort((a, b) => {
    const indexA = validStatTypes.indexOf(a.statType);
    const indexB = validStatTypes.indexOf(b.statType);
    return indexA - indexB;
  });
  return filteredStats;
};
export const reduceHonours = data => {
  // Step 1: Count occurrences of each competition
  const competitionCount = data.reduce((acc, item) => {
    const competition = item.competition;

    // Increment the count of the competition
    acc[competition] = (acc[competition] || 0) + 1;
    return acc;
  }, {});

  // Step 2: Create an array of PlayerHonour objects with updated amounts
  const result = Object.keys(competitionCount).map(competition => {
    return {
      competition,
      amount: competitionCount[competition] // Set the amount based on count
    };
  });
  return result;
};

//Round the last table row bottom corners
export const setRounded = (index, length, rounded) => {
  if (index === length - 1) {
    console.log(rounded);
    return `rounded-b-lg`;
  } else {
    return '';
  }
};
export const sortStatsByNumber = arr => {
  return [...arr].sort((a, b) => b.stat.total - a.stat.total);
};