interface MenuProps {
    id: number
    link: string
    content: string[]
}

interface FeatureHighlightContentProps {
    id: number
    title: string
    description: string
}

interface ProductShowcaseContentProps {
    id: number
    title: string
    description: string
}

export const menu: MenuProps[] = [
    { id: 1, link: "Product", content: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"] },
    { id: 2, link: "Company", content: ["About", "Team", "Blog", "Careers"] },
    { id: 3, link: "Connect", content: ["Contact", "Newsletter", "LinkedIn"] }
]

export const featureHighlightContent: FeatureHighlightContentProps[] = [
    { id: 1, title: "Introducing an extensible editor", description: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog." },
    { id: 2, title: "Robust content management", description: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control." },
]

export const productShowcaseContent: ProductShowcaseContentProps[] = [
    { id: 1, title: "Free, open, simple", description: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn." },
    { id: 2, title: "Powerful tooling", description: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites." },
]