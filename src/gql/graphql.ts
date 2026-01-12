/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
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
  user?: Maybe<Users>;
  users?: Maybe<Array<Maybe<Users>>>;
  walk?: Maybe<Walk>;
  walks?: Maybe<Array<Maybe<Walk>>>;
};


export type QueryRootUserArgs = {
  name: Scalars['String']['input'];
};


export type QueryRootWalkArgs = {
  id: Scalars['ID']['input'];
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
  svg: Scalars['String']['output'];
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

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'QueryRoot', users?: Array<{ __typename?: 'Users', name: string } | null> | null };

export type ByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type ByNameQuery = { __typename?: 'QueryRoot', user?: { __typename?: 'Users', _id: string, name: string, email?: string | null, age?: number | null } | null };


export const AllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllUsersQuery, AllUsersQueryVariables>;
export const ByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"age"}}]}}]}}]} as unknown as DocumentNode<ByNameQuery, ByNameQueryVariables>;