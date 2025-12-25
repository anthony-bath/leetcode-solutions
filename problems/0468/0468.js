/**
 * @param {string} queryIP
 * @return {string}
 */
const validIPAddress = function (queryIP) {
  let parts = queryIP.split('.');

  if (parts.length === 4) {
    let validIPv4 = true;

    for (const part of parts) {
      if (!part || (part.startsWith('0') && part.length > 1) || /[^\d]/.test(part)) {
        validIPv4 = false;
        break;
      }

      const num = Number(part);

      if (num < 0 || num > 255) {
        validIPv4 = false;
        break;
      }
    }

    if (validIPv4) {
      return 'IPv4';
    }
  }

  parts = queryIP.split(':');

  if (parts.length === 8) {
    if (parts.every((part) => /^[0-9a-fA-F]{1,4}$/.test(part))) {
      return 'IPv6';
    }
  }

  return 'Neither';
};
