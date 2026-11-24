export interface SiteSection {
  heading: string;
  body: string;
}

export interface SiteFaqItem {
  question: string;
  answer: string;
}

export interface SitePageContent {
  slug: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  ctaHref: string;
  sections: SiteSection[];
  faqItems?: SiteFaqItem[];
}

export interface SitePage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  purpose: string;
  indexable: boolean;
  content?: SitePageContent;
}

export const siteConfig: {
  siteName: string;
  domain: string;
  brand: {
    name: string;
    tagline: string;
  };
  pages: SitePage[];
} = {
  "siteName": "Electronics",
  "domain": "abc.triomx.com",
  "brand": {
    "name": "Electronics",
    "tagline": "A list of electronics from amazon"
  },
  "pages": [
    {
      "slug": "",
      "title": "Electronics — A list of electronics from amazon",
      "description": "A list of electronics from amazon",
      "h1": "Electronics",
      "purpose": "A list of electronics from amazon",
      "indexable": true,
      "content": {
        "slug": "",
        "heroHeadline": "Electronics",
        "heroSubheadline": "A list of electronics from amazon",
        "ctaText": "Explore Solutions",
        "ctaHref": "#overview",
        "sections": [
          {
            "heading": "Overview",
            "body": "Electronics delivers overview tailored for General visitors and prospective customers. A list of electronics from amazon"
          },
          {
            "heading": "Why Choose Us",
            "body": "Electronics delivers why choose us tailored for General visitors and prospective customers. A list of electronics from amazon"
          },
          {
            "heading": "Get Started",
            "body": "Electronics delivers get started tailored for General visitors and prospective customers. A list of electronics from amazon"
          }
        ]
      }
    }
  ]
};
