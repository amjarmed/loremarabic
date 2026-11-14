export declare const alphabets: string[];
export declare const naturalEnglish: string;
export declare const naturalArabic: string;
export declare const loremIpsum: string;

export declare function word(): string;
export declare function paragraph(max?: number): string;

export interface PostObject {
  title: string;
  date: string;
  intro: string;
  content: string;
  thumb: string;
}

export interface PostFunction extends PostObject {
  (): PostObject;
}

export declare const post: PostFunction;

declare const ArabicLorem: {
  alphabets: string[];
  word: typeof word;
  paragraph: typeof paragraph;
  post: PostFunction;
  naturalEnglish: string;
  naturalArabic: string;
  loremIpsum: string;
};

export default ArabicLorem;
