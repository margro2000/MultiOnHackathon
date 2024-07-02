export default function sitemap() {
    return [
        {
            url: 'YOUR_WEBSITE',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'YOUR_WEBSITE/EXPLAIN',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}