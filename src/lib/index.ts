import { FormikProps } from "formik";
import React from "react";

export interface Article {
  article_id: number;
  title: string;
  article: string;
  description: string;
  user_name: string;
  user_image: string;
  comments: string | null;
  date: string;
  content_image: string;
  category: string;
  member_only: boolean;
}

export interface Endpoint {
  url: string;
  key: unknown;
}

export interface InitialValue {
  title: string;
  story: string;
}

export interface TiptapConfigureProps<T> {
  formik: FormikProps<T>;
  historyArticle: string | null;
}

export interface ToolTipType {
  Trigger: React.ReactNode;
  Content: React.ReactNode;
  primary?: boolean;
}

export interface ImageUploadProps {
  setImage: (field: string, value: any, shouldValidate?: boolean) => void;
}

export interface CardFetureProps {
  id?: number;
  date: string;
  member_only: boolean;
  url: string;
}

export interface CommentData {
  user_name: string;
  article_id: number;
  comment: string;
  image: string;
  create_at?: string | null | undefined;
}

export interface CommentFildeProps {
  id: string | string[] | undefined;
  mutate: any;
  isSuccess: boolean;
}

export type Profil = {
  img: any;
  user_name: any;
};

export interface CardArticleProps {
  articles: Article[];
}
