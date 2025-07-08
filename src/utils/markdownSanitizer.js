const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){

    const turndownService = new TurndownService();
    // convert the markdown to HTML
    const convertedHtml = marked.parse(markdownContent);

    console.log("Converted HTML",convertedHtml);

    //Sanitize HTML
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml , {
        allowedtags: sanitizeHtmlLibrary.defaults.allowedTags
    });

    console.log("Sanitized HTML",sanitizedHtml);

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    console.log("Sanitized Markdown",sanitizedMarkdown)

    return sanitizedMarkdown;
}


module.exports = sanitizeMarkdownContent;