const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){

    const turndownService = new TurndownService();
    // convert the markdown to HTML
    const convertedHtml = marked.parse(markdownContent);

    //Sanitize HTML
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml , {
        allowedtags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;
}


module.exports = sanitizeMarkdownContent;