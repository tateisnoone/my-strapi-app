import type { Schema, Struct } from '@strapi/strapi';

export interface MediaGallery extends Struct.ComponentSchema {
  collectionName: 'components_media_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    Pictures: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface MediaTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_media_text_blocks';
  info: {
    displayName: 'text-block';
    icon: 'quote';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'media.gallery': MediaGallery;
      'media.text-block': MediaTextBlock;
    }
  }
}
