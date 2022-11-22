/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyProducts?: Maybe<DeleteManyPayload>;
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneUser?: Maybe<User>;
  insertManyProducts?: Maybe<InsertManyPayload>;
  insertManyUsers?: Maybe<InsertManyPayload>;
  insertOneProduct?: Maybe<Product>;
  insertOneUser?: Maybe<User>;
  replaceOneProduct?: Maybe<Product>;
  replaceOneUser?: Maybe<User>;
  updateManyProducts?: Maybe<UpdateManyPayload>;
  updateManyUsers?: Maybe<UpdateManyPayload>;
  updateOneProduct?: Maybe<Product>;
  updateOneUser?: Maybe<User>;
  upsertOneProduct?: Maybe<Product>;
  upsertOneUser?: Maybe<User>;
};


export type MutationDeleteManyProductsArgs = {
  query?: InputMaybe<ProductQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: InputMaybe<UserQueryInput>;
};


export type MutationDeleteOneProductArgs = {
  query: ProductQueryInput;
};


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};


export type MutationInsertManyProductsArgs = {
  data: Array<ProductInsertInput>;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertOneProductArgs = {
  data: ProductInsertInput;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationReplaceOneProductArgs = {
  data: ProductInsertInput;
  query?: InputMaybe<ProductQueryInput>;
};


export type MutationReplaceOneUserArgs = {
  data: UserInsertInput;
  query?: InputMaybe<UserQueryInput>;
};


export type MutationUpdateManyProductsArgs = {
  query?: InputMaybe<ProductQueryInput>;
  set: ProductUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  query?: InputMaybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateOneProductArgs = {
  query?: InputMaybe<ProductQueryInput>;
  set: ProductUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: InputMaybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpsertOneProductArgs = {
  data: ProductInsertInput;
  query?: InputMaybe<ProductQueryInput>;
};


export type MutationUpsertOneUserArgs = {
  data: UserInsertInput;
  query?: InputMaybe<UserQueryInput>;
};

export type Product = {
  __typename?: 'Product';
  _id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductQueryInput = {
  AND?: InputMaybe<Array<ProductQueryInput>>;
  OR?: InputMaybe<Array<ProductQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ProductSortByInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type ProductUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  product?: Maybe<Product>;
  products: Array<Maybe<Product>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryProductArgs = {
  query?: InputMaybe<ProductQueryInput>;
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ProductQueryInput>;
  sortBy?: InputMaybe<ProductSortByInput>;
};


export type QueryUserArgs = {
  query?: InputMaybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<UserQueryInput>;
  sortBy?: InputMaybe<UserSortByInput>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type UserInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type UserQueryInput = {
  AND?: InputMaybe<Array<UserQueryInput>>;
  OR?: InputMaybe<Array<UserQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid?: InputMaybe<Scalars['String']>;
  uid_exists?: InputMaybe<Scalars['Boolean']>;
  uid_gt?: InputMaybe<Scalars['String']>;
  uid_gte?: InputMaybe<Scalars['String']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_lt?: InputMaybe<Scalars['String']>;
  uid_lte?: InputMaybe<Scalars['String']>;
  uid_ne?: InputMaybe<Scalars['String']>;
  uid_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum UserSortByInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UidAsc = 'UID_ASC',
  UidDesc = 'UID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UserUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', _id?: any | null, name?: string | null } | null> };


export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;