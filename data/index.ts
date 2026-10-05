import siteData from "./duracare.json";

const brand = siteData.categories.DuraCare;
const sections = brand.sections;

export type SectionProps<T = unknown> = {
  data?: T;
  className?: string;
};

export type TemplateData = (typeof brand.templateComponents)["template-1"];

export type GlobalData = typeof sections.Global.variants.DuraCareGlobal1;
export type LabelsData = GlobalData["labels"];
export type TopbarData = typeof sections.Topbar.variants.DuraCareTopbar1;
export type HeaderData = typeof sections.Header.variants.DuraCareHeader1;
export type FooterData = typeof sections.Footer.variants.DuraCareFooter1;

export type PageBannerConfigData = typeof sections.PageBanners.variants.DuraCarePageBanners1;
export type PagesData = PageBannerConfigData["pages"];
export type PageKey = keyof PagesData;
export type PageBannerData = PagesData[PageKey]["banner"];

export type HeroData = typeof sections.HeroBanner.variants.DuraCareHeroBanner1;
export type AboutData = typeof sections.AboutUs.variants.DuraCareAboutUs1;

export type ServicesData = typeof sections.Services.variants.DuraCareServices1;
export type ServiceItemData = ServicesData["list"][number];
export type ServiceDetailsConfigData = ServicesData["serviceDetails"];
export type ServiceDetailEntryData = ServiceDetailsConfigData["list"][number];
export type ServiceDetailsData = ServiceItemData & { details: ServiceDetailEntryData };

export type WhyChooseUsData = typeof sections.WhyChooseUs.variants.DuraCareWhyChooseUs1;
export type AchievementsData = typeof sections.Achievements.variants.DuraCareAchievements1;
export type FaqData = typeof sections.Faq.variants.DuraCareFaq1;

export type BlogData = typeof sections.BlogNews.variants.DuraCareBlogNews1;
export type BlogPostData = BlogData["posts"][number];

export type GalleryData = typeof sections.Gallery.variants.DuraCareGallery1;
export type GalleryMediaData = GalleryData["images"] | GalleryData["videos"];

export type ContactPageData = typeof sections.ContactPage.variants.DuraCareContactPage1;
export type QuotePageData = typeof sections.QuotePage.variants.DuraCareQuotePage1;
export type EnquiryFormData = ContactPageData["form"] | QuotePageData["form"];

export type HeadingData = { main: string; highlight: string; end?: string; middle?: string };

const global = sections.Global.variants.DuraCareGlobal1;
const pageBanner = sections.PageBanners.variants.DuraCarePageBanners1;
const services = sections.Services.variants.DuraCareServices1;

export const site = {
  template: brand.templateComponents["template-1"],
  global,
  meta: global.site,
  labels: global.labels,
  contact: global.contact,
  socials: global.socials,
  logo: global.logo,
  topbar: sections.Topbar.variants.DuraCareTopbar1,
  header: sections.Header.variants.DuraCareHeader1,
  footer: sections.Footer.variants.DuraCareFooter1,
  pageBanner,
  pages: pageBanner.pages,
  hero: sections.HeroBanner.variants.DuraCareHeroBanner1,
  about: sections.AboutUs.variants.DuraCareAboutUs1,
  services,
  serviceDetails: services.serviceDetails,
  whyChooseUs: sections.WhyChooseUs.variants.DuraCareWhyChooseUs1,
  achievements: sections.Achievements.variants.DuraCareAchievements1,
  faq: sections.Faq.variants.DuraCareFaq1,
  blog: sections.BlogNews.variants.DuraCareBlogNews1,
  gallery: sections.Gallery.variants.DuraCareGallery1,
  contactPage: sections.ContactPage.variants.DuraCareContactPage1,
  quotePage: sections.QuotePage.variants.DuraCareQuotePage1,
};

export function getService(slug: string): ServiceDetailsData | undefined {
  const service = services.list.find((s) => s.slug === slug);
  const details = services.serviceDetails.list.find((d) => d.slug === slug);
  return service && details ? { ...service, details } : undefined;
}

export function getPost(slug: string): BlogPostData | undefined {
  return site.blog.posts.find((p) => p.slug === slug);
}

export const splitLines = (text: string) =>
  text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

export default site;
