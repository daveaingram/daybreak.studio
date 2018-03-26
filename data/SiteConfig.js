module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Daybreak Studio", // Site title.
  siteTitleAlt: "Daybreak Studio - Marketing Technology Consulting, Implementation and Experience Design", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://daybreak.studio", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Marketing Technology Implementation and Consulting, and Experience Design.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  //siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-116422517-1", // GA tracking ID.
  disqusShortname: "daybreak-studio", // Disqus shortname.
  postDefaultCategoryID: "MarTech", // Default category for posts.
  userName: "Dave Ingram", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Charleston, South Carolina", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Helping organizations make better use of technology to reach people in more meaningful ways.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/daveaingram",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:dave@daybreak.studio",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Daybreak Studio", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
