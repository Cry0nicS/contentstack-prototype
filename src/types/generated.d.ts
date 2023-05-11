export interface File {
    uid: string;
    created_at: string;
    updated_at: string;
    created_by: string;
    updated_by: string;
    content_type: string;
    file_size: string;
    tags: string[];
    filename: string;
    url: string;
    ACL: any[];
    is_dir: boolean;
    parent_uid: string;
    _version: number;
    title: string;
    publish_details: {
        environment: string;
        locale: string;
        time: string;
        user: string;
    };
}

export interface Link {
    title: string;
    href: string;
}

export interface Accordion {
    /** Entry */
    element?: {
        /** Title */
        title: string;
        /** Slug */
        slug: string;
        /** Description */
        description: string;
    }[];
}

/** Embed a form from Formcycle using its ID */
export interface Formcycle {
    /** FormId */
    form_id?: number;
}

/** It contains SEO related information. */
export interface Seo {
    /** Meta Title */
    meta_title?: string;
    /** Meta Description */
    meta_description?: string;
    /** Meta Keywords */
    keywords?: string;
    /** Enable Search Indexing */
    enable_search_indexing?: boolean;
}

/** Just like service, but using the modular blocks */
export interface ModularService {
    /** Title */
    title: string;
    /** URL */
    url?: string;
    /** Teaser */
    teaser: string;
    /** Featured image */
    featured_image: File;
    /** Modular Blocks */
    modular_blocks?: (
        | {
              paragraph: {
                  /** paragraph */ paragraph?: any;
              };
              sub_title: undefined;
              image: undefined;
              accordion: undefined;
              formcycle: undefined;
          }
        | {
              sub_title: {
                  /** Sub-Title */ sub_title?: string[];
              };
              paragraph: undefined;
              image: undefined;
              accordion: undefined;
              formcycle: undefined;
          }
        | {
              image: {
                  /** File */ file?: File;
              };
              paragraph: undefined;
              sub_title: undefined;
              accordion: undefined;
              formcycle: undefined;
          }
        | {
              accordion: Accordion;
              paragraph: undefined;
              sub_title: undefined;
              image: undefined;
              formcycle: undefined;
          }
        | {
              formcycle: Formcycle;
              paragraph: undefined;
              sub_title: undefined;
              image: undefined;
              accordion: undefined;
          }
    )[];
    /** Related articles */
    related_articles?: (ModularService | Service)[];
    /** SEO */
    seo?: Seo;
}

export interface SocialIcons {
    /** Title */
    title: string;
    /** Platforms */
    platforms?: SocialShare[];
}

export interface SocialShare {
    /** Title */
    title: string;
    /** URL */
    url?: string;
    /** Icon */
    icon: File;
}

export interface Service {
    /** Title */
    title: string;
    /** URL */
    url?: string;
    /** Teaser */
    teaser: any;
    /** Featured image */
    featured_image: File;
    /** Body */
    body: any;
    /** Social icons */
    social_icons?: SocialShare[];
    /** Related articles */
    related_articles?: (Service | ModularService | BlogPost)[];
    /** GlobalSEO */
    globalseo?: Seo;
}

/** It contains blog authors */
export interface Author {
    /** Full Name */
    title: string;
    /** Picture */
    picture: File;
    /** Bio */
    bio?: string;
}

/** Re-usable content template that can be extended to fit many use cases. Example: Landing page, Contact page, About page, etc. */
export interface Page {
    /** Title */
    title: string;
    /** URL */
    url?: string;
    /** Page Components */
    page_components?: (
        | {
              hero_banner: {
                  /** Banner Image */ banner_image?: File;
                  /** Bg color */
                  bg_color?: string;
                  /** Text color */
                  text_color?: string;
                  /** Banner Title */
                  banner_title?: string;
                  /** Banner Description */
                  banner_description?: string;
                  /** Call to Action */
                  call_to_action?: Link;
              };
              contact_details: undefined;
              section_with_buckets: undefined;
              section: undefined;
              section_with_cards: undefined;
              section_with_html_code: undefined;
              from_blog: undefined;
              our_team: undefined;
              widget: undefined;
          }
        | {
              contact_details: {
                  /** Address */ address?: string;
                  /** Phone */
                  phone?: string;
                  /** Email */
                  email?: string;
              };
              hero_banner: undefined;
              section_with_buckets: undefined;
              section: undefined;
              section_with_cards: undefined;
              section_with_html_code: undefined;
              from_blog: undefined;
              our_team: undefined;
              widget: undefined;
          }
        | {
              section_with_buckets: {
                  /** Title H2 */ title_h2?: string;
                  /** Description */
                  description?: string;
                  /** Bucket tabular */
                  bucket_tabular?: boolean;
                  /** Buckets */
                  buckets?: {
                      /** Title H3 */
                      title_h3?: string;
                      /** Description */
                      description?: any;
                      /** Icon */
                      icon: File;
                      /** Call to Action */
                      call_to_action?: Link;
                  }[];
              };
              hero_banner: undefined;
              contact_details: undefined;
              section: undefined;
              section_with_cards: undefined;
              section_with_html_code: undefined;
              from_blog: undefined;
              our_team: undefined;
              widget: undefined;
          }
        | {
              section: {
                  /** Title H2 */ title_h2?: string;
                  /** Description */
                  description?: string;
                  /** Call to Action */
                  call_to_action?: Link;
                  /** Image */
                  image: File;
                  /** Image Alignment */
                  image_alignment?: "Left" | "Right";
              };
              hero_banner: undefined;
              contact_details: undefined;
              section_with_buckets: undefined;
              section_with_cards: undefined;
              section_with_html_code: undefined;
              from_blog: undefined;
              our_team: undefined;
              widget: undefined;
          }
        | {
              section_with_cards: {
                  /** Cards */
                  cards?: [
                      {
                          /** Title H3 */
                          title_h3?: string;
                          /** Description */
                          description?: string;
                          /** Call to Action */
                          call_to_action?: Link;
                      },
                      {
                          /** Title H3 */
                          title_h3?: string;
                          /** Description */
                          description?: string;
                          /** Call to Action */
                          call_to_action?: Link;
                      },
                      {
                          /** Title H3 */
                          title_h3?: string;
                          /** Description */
                          description?: string;
                          /** Call to Action */
                          call_to_action?: Link;
                      }
                  ];
              };
              hero_banner: undefined;
              contact_details: undefined;
              section_with_buckets: undefined;
              section: undefined;
              section_with_html_code: undefined;
              from_blog: undefined;
              our_team: undefined;
              widget: undefined;
          }
        | {
              section_with_html_code: {
                  /** Title */ title?: string;
                  /** Description */
                  description?: any;
                  /** HTML Code */
                  html_code?: string;
                  /** HTML Code Alignment */
                  html_code_alignment?: "Left" | "Right";
              };
              hero_banner: undefined;
              contact_details: undefined;
              section_with_buckets: undefined;
              section: undefined;
              section_with_cards: undefined;
              from_blog: undefined;
              our_team: undefined;
              widget: undefined;
          }
        | {
              from_blog: {
                  /** Title H2 */ title_h2?: string;
                  /** Featured Blogs */
                  featured_blogs?: BlogPost[];
                  /** View Articles */
                  view_articles?: Link;
              };
              hero_banner: undefined;
              contact_details: undefined;
              section_with_buckets: undefined;
              section: undefined;
              section_with_cards: undefined;
              section_with_html_code: undefined;
              our_team: undefined;
              widget: undefined;
          }
        | {
              our_team: {
                  /** Title H2 */ title_h2?: string;
                  /** Description */
                  description?: string;
                  /** Employees */
                  employees?: {
                      /** Name */
                      name?: string;
                      /** Designation */
                      designation?: string;
                      /** Image */
                      image: File;
                  }[];
              };
              hero_banner: undefined;
              contact_details: undefined;
              section_with_buckets: undefined;
              section: undefined;
              section_with_cards: undefined;
              section_with_html_code: undefined;
              from_blog: undefined;
              widget: undefined;
          }
        | {
              widget: {
                  /** Title H2 */ title_h2?: string;
                  /** Type */
                  type?: "Blog Archive" | "Related Posts";
              };
              hero_banner: undefined;
              contact_details: undefined;
              section_with_buckets: undefined;
              section: undefined;
              section_with_cards: undefined;
              section_with_html_code: undefined;
              from_blog: undefined;
              our_team: undefined;
          }
    )[];
    /** SEO */
    seo?: Seo;
}

/** It contains blog posts */
export interface BlogPost {
    /** Title */
    title: string;
    /** URL */
    url?: string;
    /** Author */
    author: Author[];
    /** Date */
    date?: string;
    /** Featured Image */
    featured_image: File;
    /** Body */
    body?: any;
    /** Related Post */
    related_post?: BlogPost[];
    /** Is Archived? */
    is_archived?: boolean;
    /** SEO */
    seo?: Seo;
}

/** It contains navigation, social media links and copyright text. */
export interface Footer {
    /** Title */
    title: string;
    /** Logo */
    logo: File;
    /** Navigation */
    navigation?: {
        /** Link */
        link?: Link[];
    };
    /** Social */
    social?: {
        /** Social Share */
        social_share?: {
            /** Link */
            link?: Link;
            /** Icon */
            icon: File;
        }[];
    };
    /** Copyright */
    copyright?: any;
}

/** It contains the company logo, main navigation and notification bar. */
export interface Header {
    /** Title */
    title: string;
    /** Logo */
    logo: File;
    /** Navigation Menu */
    navigation_menu?: [
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        },
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        },
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        },
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        },
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        },
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        },
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        },
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        },
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        },
        {
            /** Label */
            label?: string;
            /** Page Reference */
            page_reference: Page[];
        }
    ];
    /** Notification Bar */
    notification_bar?: {
        /** Announcement Text */
        announcement_text?: any;
        /** Show Announcement? */
        show_announcement?: boolean;
    };
}
