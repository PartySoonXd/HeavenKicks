import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqComponentFaq extends Schema.Component {
  collectionName: 'components_faq_component_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    question: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    answer: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1500;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq-component.faq': FaqComponentFaq;
    }
  }
}
