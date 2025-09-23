/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Features = {
  __typename?: 'Features';
  geometry: Geometry;
  properties: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Geometry = {
  __typename?: 'Geometry';
  coordinates: Array<Array<Scalars['Float']['output']>>;
  type: Scalars['String']['output'];
};

export type ItemsInput = {
  altitude: Scalars['Float']['input'];
  distanceFromPrevious: Scalars['Float']['input'];
  elevationGainFromPrevious: Scalars['Float']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  timestamp: Scalars['String']['input'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  createWalk?: Maybe<Walk>;
  createsWalk?: Maybe<Array<Maybe<Walk>>>;
};


export type MutationRootCreateWalkArgs = {
  walk?: InputMaybe<WalkInput>;
};


export type MutationRootCreatesWalkArgs = {
  walks?: InputMaybe<Array<InputMaybe<WalkInput>>>;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  users?: Maybe<Array<Maybe<Users>>>;
  walks?: Maybe<Array<Maybe<Walk>>>;
};

export type Users = {
  __typename?: 'Users';
  _id: Scalars['ID']['output'];
  age?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Walk = {
  __typename?: 'Walk';
  date: Scalars['String']['output'];
  distances: Array<Scalars['Float']['output']>;
  elevationsGain: Array<Scalars['Float']['output']>;
  geoJson: WalkGeoJson;
  id: Scalars['ID']['output'];
  jsonFilename: Scalars['String']['output'];
  totalDistance: Scalars['Float']['output'];
  totalElevationGain: Scalars['Float']['output'];
};

export type WalkGeoJson = {
  __typename?: 'WalkGeoJSON';
  features: Array<Features>;
  type: Scalars['String']['output'];
};

export type WalkInput = {
  date: Scalars['String']['input'];
  distance: Scalars['Float']['input'];
  elevationGain: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
  items: Array<ItemsInput>;
  jsonFilename: Scalars['String']['input'];
};

export type WalksQueryVariables = Exact<{ [key: string]: never; }>;


export type WalksQuery = { __typename?: 'QueryRoot', walks?: Array<{ __typename?: 'Walk', id: string } | null> | null };


export const WalksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"walks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<WalksQuery, WalksQueryVariables>;