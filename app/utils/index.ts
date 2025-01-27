import { useOutletContext } from "react-router";

/**
 * Gets a user's city and state location data, or uses a default
 *
 * @param {boolean} showState Show current location state
 *
 * @returns {string} The current user's location details
 *
 * @example
 * 'Philadelphia, Pennsylvania'
 */
export const displayLocation = (showState?: boolean): string | undefined => {
  interface UserLocationData {
    city: string;
    stateProv: string;
    stateProvCode: string;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locationData = useOutletContext<UserLocationData>();
  const formattedCity = locationData?.city?.split(`(`)[0].trim();

  switch (locationData?.stateProvCode) {
    case `DE`:
    case `MD`:
    case `NJ`:
    case `PA`:
      return `${formattedCity}${showState ? `, ${locationData?.stateProv}` : ``}`;
    default:
      return `your area`;
  }
};

/**
 * Create a full URL to an image stored on the Uploadcare CDN
 *
 * @param {string} id The unique image id
 * @param {string} size An optional string to represent rendered image size
 * 
 * @returns {string} The full path to the stored image
 *
 * @example
 * 'https://ucarecdn.com/abc-123-def-456/-/preview/1200x600/-/format/auto/-/quality/smart/'
 */
export const getImageParameters = (id: string, size: string = `1000x560`) =>
  `https://ucarecdn.com/${id}/-/preview/${size}/-/format/auto/-/quality/smart/`;

/**
 * Retrieve user's location data based on IP address
 *
 * @returns {Object} JSON object for current user's location data
 *
 * @example
 * {
 *   city: 'Philadelphia',
 *   stateProv: 'Pennsylvania',
 *   stateProvCode: 'PA'
 * }
 */
export const getUserLocation = async () => {
  try {
    const response = await fetch(`https://api.db-ip.com/v2/free/self/`);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error: any) {
    console.error(`Error fetching data:`, error);
  }
};

/**
 * Takes in a raw string value - digits only - of a phone number, and formats accordingly
 *
 * @param phoneNumberValue The current phone number value
 * @param previousPhoneNumberValue The previous phone number value
 * 
 * @returns {string} The formatted phone number string
 * 
 * @example
 * '(123) 456-7890'
 */
export const phoneNumberAutoFormat = (phoneNumberValue: string, previousPhoneNumberValue: string): string | undefined => {
  if (!phoneNumberValue) return phoneNumberValue;

  const phoneNumber = phoneNumberValue.replace(/[^\d]/g, ``);

  if (!previousPhoneNumberValue || phoneNumberValue.length > previousPhoneNumberValue.length) {
    if (phoneNumber.length < 4) return phoneNumber;

    if (phoneNumber.length < 7) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }
};
