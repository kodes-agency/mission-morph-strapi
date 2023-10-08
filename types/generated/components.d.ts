import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutPageServiceSteps extends Schema.Component {
  collectionName: 'components_about_page_service_steps';
  info: {
    displayName: 'service-steps';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    keywords: Attribute.Text;
  };
}

export interface ServiceLayoutFeatures extends Schema.Component {
  collectionName: 'components_service_layout_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    feature: Attribute.String;
  };
}

export interface ServiceLayoutHeroSection extends Schema.Component {
  collectionName: 'components_service_layout_hero_sections';
  info: {
    displayName: 'heroSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    content: Attribute.Text;
  };
}

export interface ServiceLayoutStatistics extends Schema.Component {
  collectionName: 'components_service_layout_statistics';
  info: {
    displayName: 'statistics';
  };
  attributes: {
    number: Attribute.Integer;
    paragraph: Attribute.Text;
  };
}

export interface ServiceLayoutSubService extends Schema.Component {
  collectionName: 'components_subservice_layout_sub_services';
  info: {
    displayName: 'subService';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    price: Attribute.String;
    features: Attribute.Component<'service-layout.features', true>;
    contents: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface ServicePageServiceCta2 extends Schema.Component {
  collectionName: 'components_service_page_service_cta_2s';
  info: {
    displayName: 'ServiceCTA2';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ServicePageServiceCta extends Schema.Component {
  collectionName: 'components_service_page_service_ctas';
  info: {
    displayName: 'serviceCTA';
  };
  attributes: {
    title: Attribute.String;
    yesButton: Attribute.String;
    noButton: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-page.service-steps': AboutPageServiceSteps;
      'seo.seo': SeoSeo;
      'service-layout.features': ServiceLayoutFeatures;
      'service-layout.hero-section': ServiceLayoutHeroSection;
      'service-layout.statistics': ServiceLayoutStatistics;
      'service-layout.sub-service': ServiceLayoutSubService;
      'service-page.service-cta-2': ServicePageServiceCta2;
      'service-page.service-cta': ServicePageServiceCta;
    }
  }
}
