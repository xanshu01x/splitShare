export const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
};

// Example Input: 2024-08-24T17:25:40.062Z
export const convertToIST = (dateStr) => {
    const date = new Date(dateStr);

    // Extract the time zone offset in minutes
    const localTimeZoneOffset = date.getTimezoneOffset(); // Returns offset in minutes, e.g., -330 for IST

    // If the offset is -330 minutes (i.e., IST), return the date as is
    if (localTimeZoneOffset === -330) {
        return date.toISOString().replace('Z', '+05:30');
    }

    // If not IST, convert it to IST
    const istOffset = 5.5 * 60; // 5.5 hours converted to minutes

    // Adjust the date by adding the difference between IST and the current time zone
    const istDate = new Date(
        date.getTime() + (istOffset + localTimeZoneOffset) * 60 * 1000
    );

    // Return the IST date in ISO format with the correct IST time zone indicator
    return istDate.toISOString().replace('Z', '+05:30');
};
