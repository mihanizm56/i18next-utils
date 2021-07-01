export const getBrowserCookie = (name: string): string | undefined => {
  try {
    const result: Record<string, string> = {};

    document.cookie.split(';').forEach(function(el) {
      const [name, value] = el.split('=');
      result[name.trim()] = value.trim();
    });

    return result[name];
  } catch {
    return '';
  }
};
