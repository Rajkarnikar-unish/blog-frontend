export default class Blog {

    constructor(
        content,
        title,
        createdAt,
        lastUpdated,
        author
    ) {
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.lastUpdated = lastUpdated;
        this.author = author;
    }
}