const removeHTMLTags = (str: string): string => str.replace(/<[^>]*>?/gm, '');

export default removeHTMLTags;
