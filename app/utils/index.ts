import { useOutletContext } from 'react-router';

/**
 * Gets a user's city and state location data, or uses a default
 *
 * @returns {string} The current user's location details
 * 
 * @example
 *    'Philadelphia, Pennsylvania'
 */
export const displayLocation = () => {
  interface UserLocationData {
    city: string;
    stateProv: string;
    stateProvCode: string;
  }

  const { city, stateProv, stateProvCode } = useOutletContext<UserLocationData>();

  if (!city) return;

  const formattedCity = city.split('(')[0].trim();

  switch (stateProvCode) {
    case 'DE':
    case 'MD':
    case 'NJ':
    case 'PA':
      return `${formattedCity}, ${stateProv}`;
    default:
      return 'your area';
  }
};

/**
 * Create a full URL to an image stored on the Uploadcare CDN
 *
 * @param {string} id The unique image id
 * @param {string} size An optional string to represent rendered image size
 * @returns {string} The full path to the stored image
 * 
 * @example
 *    'https://ucarecdn.com/abc-123-def-456/-/preview/1200x600/-/format/auto/-/quality/smart/'
 */
export const getImageParameters = (id: string, size: string = '1000x560') =>
  `https://ucarecdn.com/${id}/-/preview/${size}/-/format/auto/-/quality/smart/`;

/**
 * Retrieve user's location data based on IP address
 *
 * @returns {Object} JSON object for current user's location data
 * 
 * @example
 *    {
 *      city: 'Philadelphia',
 *      stateProv: 'PA',
 *      stateProvCode: 'Pennsylvania'
 *    }
 */
export const getUserLocation = async () => {
  try {
    const response = await fetch('https://api.db-ip.com/v2/free/self/');

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error: any) {
    console.error('Error fetching data:', error);
  }
};