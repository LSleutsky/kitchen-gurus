import type { UserLocationData } from "./constants";

/**
 * Gets a user's city and state location data, or uses a default
 *
 * @param {UserLocationData} locationData The user's location data
 * @param {boolean} showState Show current location's state
 *
 * @returns {string} The current user's location details
 *
 * @example
 * 'Philadelphia, Pennsylvania'
 */
export const displayLocation = (locationData: UserLocationData, showState: boolean = false): string => {
  switch (locationData?.region) {
    case `Delaware`:
    case `Maryland`:
    case `New Jersey`:
    case `Pennsylvania`:
      return `${locationData?.city}${showState ? `, ${locationData?.region}` : ``}`;
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
 * Takes in a raw string value - digits only - of a phone number, and formats accordingly
 *
 * @param phoneNumberValue The current phone number value
 * 
 * @returns {string} The formatted phone number string
 * 
 * @example
 * '(123) 456-7890'
 */
export const phoneNumberAutoFormat = (phoneNumberValue: string): string | undefined => {
  if (!phoneNumberValue) return phoneNumberValue;

  const phoneNumber = phoneNumberValue.replace(/[^\d]/g, ``);
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};
