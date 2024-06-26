const marked = require('marked')
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkDownContent(markDownContent){

    const turndownService = new TurndownService();

    //1. convert markDownContent into the normal html
    const convertedHtml = marked.parse(markDownContent);

    //2. Sanitize the html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags.concat(['img']),
    })

    //3. convert the sanitized html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    return sanitizedMarkdown;
}

// const input = `
// # hello

// ### there is markdown

// - something

// <script>alert("Jealous")</script>

// [Link](www.google.com)
// `

// sanitizeMarkDownContent(input);

module.exports = sanitizeMarkDownContent;