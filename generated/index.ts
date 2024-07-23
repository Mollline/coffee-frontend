// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: PriceInput;
  size: Size;
};

export type CreatePromotionCodeInput = {
  code: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  expirationDate: Scalars['String']['input'];
};

export type CreatePromotionInput = {
  description: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  favorites?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  paymentInfo?: InputMaybe<PaymentInfoInput>;
};

export type EditCategoryInput = {
  name: Scalars['String']['input'];
};

export type EditProductInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<PriceInput>;
  size?: InputMaybe<Size>;
};

export type EditPromotionCodeInput = {
  code: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  expirationDate: Scalars['String']['input'];
};

export type EditPromotionInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  favorites?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  paymentInfo?: InputMaybe<PaymentInfoInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createOrder: Order;
  createProduct?: Maybe<Product>;
  createPromotion?: Maybe<Promotion>;
  createPromotionCode?: Maybe<PromotionCode>;
  createUser?: Maybe<User>;
  deleteCategory?: Maybe<Category>;
  deleteOrder: Order;
  deleteProduct?: Maybe<Product>;
  deletePromotion?: Maybe<Promotion>;
  deletePromotionCode?: Maybe<PromotionCode>;
  deleteUser?: Maybe<User>;
  editCategory?: Maybe<Category>;
  editOrder: Order;
  editProduct?: Maybe<Product>;
  editPromotion?: Maybe<Promotion>;
  editPromotionCode?: Maybe<PromotionCode>;
  editUser?: Maybe<User>;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreatePromotionArgs = {
  input: CreatePromotionInput;
};


export type MutationCreatePromotionCodeArgs = {
  input: CreatePromotionCodeInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePromotionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePromotionCodeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditCategoryArgs = {
  id: Scalars['ID']['input'];
  input: EditCategoryInput;
};


export type MutationEditOrderArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<OrderInput>;
};


export type MutationEditProductArgs = {
  id: Scalars['ID']['input'];
  input: EditProductInput;
};


export type MutationEditPromotionArgs = {
  id: Scalars['ID']['input'];
  input: EditPromotionInput;
};


export type MutationEditPromotionCodeArgs = {
  id: Scalars['ID']['input'];
  input: EditPromotionCodeInput;
};


export type MutationEditUserArgs = {
  id: Scalars['ID']['input'];
  input: EditUserInput;
};

export type Order = {
  __typename?: 'Order';
  date: Scalars['String']['output'];
  id: Scalars['String']['output'];
  milkAmount: Scalars['Int']['output'];
  products: Array<OrderProduct>;
  promotionCode?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  user: Scalars['String']['output'];
};

export type OrderInput = {
  milkAmount: Scalars['Int']['input'];
  products?: InputMaybe<Array<OrderProductInput>>;
  promotionCode?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  user: Scalars['String']['input'];
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  size: Scalars['String']['output'];
};

export type OrderProductInput = {
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  size: Scalars['String']['input'];
};

export type PaymentInfo = {
  __typename?: 'PaymentInfo';
  cardHolder: Scalars['String']['output'];
  cardNumber: Scalars['String']['output'];
  cvv: Scalars['String']['output'];
  expirationDate: Scalars['String']['output'];
};

export type PaymentInfoInput = {
  cardHolder: Scalars['String']['input'];
  cardNumber: Scalars['String']['input'];
  cvv: Scalars['String']['input'];
  expirationDate: Scalars['String']['input'];
};

export type Price = {
  __typename?: 'Price';
  large?: Maybe<Scalars['Float']['output']>;
  medium?: Maybe<Scalars['Float']['output']>;
  small?: Maybe<Scalars['Float']['output']>;
};

export type PriceInput = {
  large?: InputMaybe<Scalars['Float']['input']>;
  medium?: InputMaybe<Scalars['Float']['input']>;
  small?: InputMaybe<Scalars['Float']['input']>;
};

export type Product = {
  __typename?: 'Product';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Price;
  size: Size;
};

export type Promotion = {
  __typename?: 'Promotion';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  productId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PromotionCode = {
  __typename?: 'PromotionCode';
  code: Scalars['String']['output'];
  discount: Scalars['Float']['output'];
  expirationDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllCategories?: Maybe<Array<Category>>;
  getAllOrders?: Maybe<Array<Order>>;
  getAllProducts?: Maybe<Array<Maybe<Product>>>;
  getAllPromotionCodes?: Maybe<Array<PromotionCode>>;
  getAllPromotions?: Maybe<Array<Promotion>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
};

export enum Size {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  paymentInfo?: Maybe<PaymentInfo>;
};

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories?: Array<{ __typename?: 'Category', id: string, name: string }> | null };

export type EditCategoryMutationVariables = Exact<{
  editCategoryId: Scalars['ID']['input'];
  input: EditCategoryInput;
}>;


export type EditCategoryMutation = { __typename?: 'Mutation', editCategory?: { __typename?: 'Category', id: string, name: string } | null };

export type DeleteCategoryMutationVariables = Exact<{
  deleteCategoryId: Scalars['ID']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory?: { __typename?: 'Category', name: string, id: string } | null };

export type CreateCategoryMutationVariables = Exact<{
  input: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory?: { __typename?: 'Category', name: string, id: string } | null };

export type GetAllOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOrdersQuery = { __typename?: 'Query', getAllOrders?: Array<{ __typename?: 'Order', id: string, user: string, date: string, state: string, milkAmount: number, promotionCode?: string | null, products: Array<{ __typename?: 'OrderProduct', productId: string, size: string, quantity: number }> }> | null };

export type EditOrderMutationVariables = Exact<{
  editOrderId: Scalars['String']['input'];
}>;


export type EditOrderMutation = { __typename?: 'Mutation', editOrder: { __typename?: 'Order', id: string, user: string, date: string, state: string, milkAmount: number, promotionCode?: string | null, products: Array<{ __typename?: 'OrderProduct', productId: string, size: string, quantity: number }> } };

export type DeleteOrderMutationVariables = Exact<{
  deleteOrderId: Scalars['String']['input'];
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', deleteOrder: { __typename?: 'Order', id: string, user: string, date: string, state: string, milkAmount: number, promotionCode?: string | null, products: Array<{ __typename?: 'OrderProduct', productId: string, size: string, quantity: number }> } };

export type CreateOrderMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string, user: string, date: string, state: string, milkAmount: number, promotionCode?: string | null, products: Array<{ __typename?: 'OrderProduct', productId: string, size: string, quantity: number }> } };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProducts?: Array<{ __typename?: 'Product', id: string, imageUrl: string, name: string, description: string, category: string, size: Size, price: { __typename?: 'Price', small?: number | null, medium?: number | null, large?: number | null } } | null> | null };

export type EditProductMutationVariables = Exact<{
  editProductId: Scalars['ID']['input'];
  input: EditProductInput;
}>;


export type EditProductMutation = { __typename?: 'Mutation', editProduct?: { __typename?: 'Product', id: string, imageUrl: string, name: string, description: string, category: string, size: Size, price: { __typename?: 'Price', small?: number | null, medium?: number | null, large?: number | null } } | null };

export type DeleteProductMutationVariables = Exact<{
  deleteProductId: Scalars['ID']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: { __typename?: 'Product', id: string, imageUrl: string, name: string, description: string, category: string, size: Size, price: { __typename?: 'Price', small?: number | null, medium?: number | null, large?: number | null } } | null };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', id: string, imageUrl: string, name: string, description: string, category: string, size: Size, price: { __typename?: 'Price', small?: number | null, medium?: number | null, large?: number | null } } | null };

export type GetAllPromotionCodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPromotionCodesQuery = { __typename?: 'Query', getAllPromotionCodes?: Array<{ __typename?: 'PromotionCode', id: string, code: string, discount: number, expirationDate: string }> | null };

export type EditPromotionCodeMutationVariables = Exact<{
  editPromotionCodeId: Scalars['ID']['input'];
  input: EditPromotionCodeInput;
}>;


export type EditPromotionCodeMutation = { __typename?: 'Mutation', editPromotionCode?: { __typename?: 'PromotionCode', id: string, code: string, discount: number, expirationDate: string } | null };

export type DeletePromotionCodeMutationVariables = Exact<{
  deletePromotionCodeId: Scalars['ID']['input'];
}>;


export type DeletePromotionCodeMutation = { __typename?: 'Mutation', deletePromotionCode?: { __typename?: 'PromotionCode', id: string, code: string, discount: number, expirationDate: string } | null };

export type CreatePromotionCodeMutationVariables = Exact<{
  input: CreatePromotionCodeInput;
}>;


export type CreatePromotionCodeMutation = { __typename?: 'Mutation', createPromotionCode?: { __typename?: 'PromotionCode', id: string, code: string, discount: number, expirationDate: string } | null };

export type GetAllPromotionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPromotionsQuery = { __typename?: 'Query', getAllPromotions?: Array<{ __typename?: 'Promotion', title: string, productId: string, id: string, description: string }> | null };

export type EditPromotionMutationVariables = Exact<{
  editPromotionId: Scalars['ID']['input'];
  input: EditPromotionInput;
}>;


export type EditPromotionMutation = { __typename?: 'Mutation', editPromotion?: { __typename?: 'Promotion', id: string, productId: string, title: string, description: string } | null };

export type DeletePromotionMutationVariables = Exact<{
  deletePromotionId: Scalars['ID']['input'];
}>;


export type DeletePromotionMutation = { __typename?: 'Mutation', deletePromotion?: { __typename?: 'Promotion', id: string, productId: string, title: string, description: string } | null };

export type CreatePromotionMutationVariables = Exact<{
  input: CreatePromotionInput;
}>;


export type CreatePromotionMutation = { __typename?: 'Mutation', createPromotion?: { __typename?: 'Promotion', id: string, productId: string, title: string, description: string } | null };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers?: Array<{ __typename?: 'User', password: string, id: string, favorites?: Array<string | null> | null, fullName: string, email: string, avatar?: string | null, address?: string | null, paymentInfo?: { __typename?: 'PaymentInfo', cardNumber: string, cardHolder: string, cvv: string, expirationDate: string } | null } | null> | null };

export type EditUserMutationVariables = Exact<{
  editUserId: Scalars['ID']['input'];
  input: EditUserInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser?: { __typename?: 'User', password: string, id: string, fullName: string, favorites?: Array<string | null> | null, email: string, avatar?: string | null, address?: string | null, paymentInfo?: { __typename?: 'PaymentInfo', cardHolder: string, cardNumber: string, cvv: string, expirationDate: string } | null } | null };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', password: string, id: string, favorites?: Array<string | null> | null, email: string, avatar?: string | null, address?: string | null, fullName: string, paymentInfo?: { __typename?: 'PaymentInfo', cardHolder: string, cardNumber: string, cvv: string, expirationDate: string } | null } | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', password: string, fullName: string, favorites?: Array<string | null> | null, id: string, email: string, avatar?: string | null, address?: string | null, paymentInfo?: { __typename?: 'PaymentInfo', cardHolder: string, cardNumber: string, cvv: string, expirationDate: string } | null } | null };


export const GetAllCategoriesDocument = gql`
    query GetAllCategories {
  getAllCategories {
    id
    name
  }
}
    `;
export type GetAllCategoriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>
    } & TChildProps;
export function withGetAllCategories<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllCategoriesQuery,
  GetAllCategoriesQueryVariables,
  GetAllCategoriesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllCategoriesQuery, GetAllCategoriesQueryVariables, GetAllCategoriesProps<TChildProps, TDataName>>(GetAllCategoriesDocument, {
      alias: 'getAllCategories',
      ...operationOptions
    });
};

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
      }
export function useGetAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export function useGetAllCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetAllCategoriesSuspenseQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const EditCategoryDocument = gql`
    mutation EditCategory($editCategoryId: ID!, $input: EditCategoryInput!) {
  editCategory(id: $editCategoryId, input: $input) {
    id
    name
  }
}
    `;
export type EditCategoryMutationFn = Apollo.MutationFunction<EditCategoryMutation, EditCategoryMutationVariables>;
export type EditCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditCategoryMutation, EditCategoryMutationVariables>
    } & TChildProps;
export function withEditCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditCategoryMutation,
  EditCategoryMutationVariables,
  EditCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditCategoryMutation, EditCategoryMutationVariables, EditCategoryProps<TChildProps, TDataName>>(EditCategoryDocument, {
      alias: 'editCategory',
      ...operationOptions
    });
};

/**
 * __useEditCategoryMutation__
 *
 * To run a mutation, you first call `useEditCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCategoryMutation, { data, loading, error }] = useEditCategoryMutation({
 *   variables: {
 *      editCategoryId: // value for 'editCategoryId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditCategoryMutation(baseOptions?: Apollo.MutationHookOptions<EditCategoryMutation, EditCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCategoryMutation, EditCategoryMutationVariables>(EditCategoryDocument, options);
      }
export type EditCategoryMutationHookResult = ReturnType<typeof useEditCategoryMutation>;
export type EditCategoryMutationResult = Apollo.MutationResult<EditCategoryMutation>;
export type EditCategoryMutationOptions = Apollo.BaseMutationOptions<EditCategoryMutation, EditCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($deleteCategoryId: ID!) {
  deleteCategory(id: $deleteCategoryId) {
    name
    id
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export type DeleteCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>
    } & TChildProps;
export function withDeleteCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables,
  DeleteCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteCategoryMutation, DeleteCategoryMutationVariables, DeleteCategoryProps<TChildProps, TDataName>>(DeleteCategoryDocument, {
      alias: 'deleteCategory',
      ...operationOptions
    });
};

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      deleteCategoryId: // value for 'deleteCategoryId'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    name
    id
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;
export type CreateCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>
    } & TChildProps;
export function withCreateCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCategoryMutation,
  CreateCategoryMutationVariables,
  CreateCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCategoryMutation, CreateCategoryMutationVariables, CreateCategoryProps<TChildProps, TDataName>>(CreateCategoryDocument, {
      alias: 'createCategory',
      ...operationOptions
    });
};

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const GetAllOrdersDocument = gql`
    query GetAllOrders {
  getAllOrders {
    id
    products {
      productId
      size
      quantity
    }
    user
    date
    state
    milkAmount
    promotionCode
  }
}
    `;
export type GetAllOrdersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllOrdersQuery, GetAllOrdersQueryVariables>
    } & TChildProps;
export function withGetAllOrders<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllOrdersQuery,
  GetAllOrdersQueryVariables,
  GetAllOrdersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllOrdersQuery, GetAllOrdersQueryVariables, GetAllOrdersProps<TChildProps, TDataName>>(GetAllOrdersDocument, {
      alias: 'getAllOrders',
      ...operationOptions
    });
};

/**
 * __useGetAllOrdersQuery__
 *
 * To run a query within a React component, call `useGetAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllOrdersQuery, GetAllOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllOrdersQuery, GetAllOrdersQueryVariables>(GetAllOrdersDocument, options);
      }
export function useGetAllOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllOrdersQuery, GetAllOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllOrdersQuery, GetAllOrdersQueryVariables>(GetAllOrdersDocument, options);
        }
export function useGetAllOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllOrdersQuery, GetAllOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllOrdersQuery, GetAllOrdersQueryVariables>(GetAllOrdersDocument, options);
        }
export type GetAllOrdersQueryHookResult = ReturnType<typeof useGetAllOrdersQuery>;
export type GetAllOrdersLazyQueryHookResult = ReturnType<typeof useGetAllOrdersLazyQuery>;
export type GetAllOrdersSuspenseQueryHookResult = ReturnType<typeof useGetAllOrdersSuspenseQuery>;
export type GetAllOrdersQueryResult = Apollo.QueryResult<GetAllOrdersQuery, GetAllOrdersQueryVariables>;
export const EditOrderDocument = gql`
    mutation EditOrder($editOrderId: String!) {
  editOrder(id: $editOrderId) {
    id
    user
    date
    state
    milkAmount
    promotionCode
    products {
      productId
      size
      quantity
    }
  }
}
    `;
export type EditOrderMutationFn = Apollo.MutationFunction<EditOrderMutation, EditOrderMutationVariables>;
export type EditOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditOrderMutation, EditOrderMutationVariables>
    } & TChildProps;
export function withEditOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditOrderMutation,
  EditOrderMutationVariables,
  EditOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditOrderMutation, EditOrderMutationVariables, EditOrderProps<TChildProps, TDataName>>(EditOrderDocument, {
      alias: 'editOrder',
      ...operationOptions
    });
};

/**
 * __useEditOrderMutation__
 *
 * To run a mutation, you first call `useEditOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editOrderMutation, { data, loading, error }] = useEditOrderMutation({
 *   variables: {
 *      editOrderId: // value for 'editOrderId'
 *   },
 * });
 */
export function useEditOrderMutation(baseOptions?: Apollo.MutationHookOptions<EditOrderMutation, EditOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditOrderMutation, EditOrderMutationVariables>(EditOrderDocument, options);
      }
export type EditOrderMutationHookResult = ReturnType<typeof useEditOrderMutation>;
export type EditOrderMutationResult = Apollo.MutationResult<EditOrderMutation>;
export type EditOrderMutationOptions = Apollo.BaseMutationOptions<EditOrderMutation, EditOrderMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($deleteOrderId: String!) {
  deleteOrder(id: $deleteOrderId) {
    id
    products {
      productId
      size
      quantity
    }
    user
    date
    state
    milkAmount
    promotionCode
  }
}
    `;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;
export type DeleteOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>
    } & TChildProps;
export function withDeleteOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteOrderMutation,
  DeleteOrderMutationVariables,
  DeleteOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteOrderMutation, DeleteOrderMutationVariables, DeleteOrderProps<TChildProps, TDataName>>(DeleteOrderDocument, {
      alias: 'deleteOrder',
      ...operationOptions
    });
};

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      deleteOrderId: // value for 'deleteOrderId'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder {
  createOrder {
    id
    products {
      productId
      size
      quantity
    }
    user
    date
    state
    milkAmount
    promotionCode
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;
export type CreateOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>
    } & TChildProps;
export function withCreateOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOrderMutation,
  CreateOrderMutationVariables,
  CreateOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOrderMutation, CreateOrderMutationVariables, CreateOrderProps<TChildProps, TDataName>>(CreateOrderDocument, {
      alias: 'createOrder',
      ...operationOptions
    });
};

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts {
  getAllProducts {
    id
    imageUrl
    name
    price {
      small
      medium
      large
    }
    description
    category
    size
  }
}
    `;
export type GetAllProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllProductsQuery, GetAllProductsQueryVariables>
    } & TChildProps;
export function withGetAllProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllProductsQuery,
  GetAllProductsQueryVariables,
  GetAllProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllProductsQuery, GetAllProductsQueryVariables, GetAllProductsProps<TChildProps, TDataName>>(GetAllProductsDocument, {
      alias: 'getAllProducts',
      ...operationOptions
    });
};

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export function useGetAllProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsSuspenseQueryHookResult = ReturnType<typeof useGetAllProductsSuspenseQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const EditProductDocument = gql`
    mutation EditProduct($editProductId: ID!, $input: EditProductInput!) {
  editProduct(id: $editProductId, input: $input) {
    id
    imageUrl
    name
    price {
      small
      medium
      large
    }
    description
    category
    size
  }
}
    `;
export type EditProductMutationFn = Apollo.MutationFunction<EditProductMutation, EditProductMutationVariables>;
export type EditProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditProductMutation, EditProductMutationVariables>
    } & TChildProps;
export function withEditProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditProductMutation,
  EditProductMutationVariables,
  EditProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditProductMutation, EditProductMutationVariables, EditProductProps<TChildProps, TDataName>>(EditProductDocument, {
      alias: 'editProduct',
      ...operationOptions
    });
};

/**
 * __useEditProductMutation__
 *
 * To run a mutation, you first call `useEditProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProductMutation, { data, loading, error }] = useEditProductMutation({
 *   variables: {
 *      editProductId: // value for 'editProductId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditProductMutation(baseOptions?: Apollo.MutationHookOptions<EditProductMutation, EditProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProductMutation, EditProductMutationVariables>(EditProductDocument, options);
      }
export type EditProductMutationHookResult = ReturnType<typeof useEditProductMutation>;
export type EditProductMutationResult = Apollo.MutationResult<EditProductMutation>;
export type EditProductMutationOptions = Apollo.BaseMutationOptions<EditProductMutation, EditProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId) {
    id
    imageUrl
    name
    price {
      small
      medium
      large
    }
    description
    category
    size
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;
export type DeleteProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>
    } & TChildProps;
export function withDeleteProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteProductMutation,
  DeleteProductMutationVariables,
  DeleteProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteProductMutation, DeleteProductMutationVariables, DeleteProductProps<TChildProps, TDataName>>(DeleteProductDocument, {
      alias: 'deleteProduct',
      ...operationOptions
    });
};

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      deleteProductId: // value for 'deleteProductId'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    imageUrl
    name
    price {
      small
      medium
      large
    }
    description
    category
    size
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;
export type CreateProductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>
    } & TChildProps;
export function withCreateProduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateProductMutation,
  CreateProductMutationVariables,
  CreateProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateProductMutation, CreateProductMutationVariables, CreateProductProps<TChildProps, TDataName>>(CreateProductDocument, {
      alias: 'createProduct',
      ...operationOptions
    });
};

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const GetAllPromotionCodesDocument = gql`
    query GetAllPromotionCodes {
  getAllPromotionCodes {
    id
    code
    discount
    expirationDate
  }
}
    `;
export type GetAllPromotionCodesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllPromotionCodesQuery, GetAllPromotionCodesQueryVariables>
    } & TChildProps;
export function withGetAllPromotionCodes<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllPromotionCodesQuery,
  GetAllPromotionCodesQueryVariables,
  GetAllPromotionCodesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllPromotionCodesQuery, GetAllPromotionCodesQueryVariables, GetAllPromotionCodesProps<TChildProps, TDataName>>(GetAllPromotionCodesDocument, {
      alias: 'getAllPromotionCodes',
      ...operationOptions
    });
};

/**
 * __useGetAllPromotionCodesQuery__
 *
 * To run a query within a React component, call `useGetAllPromotionCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPromotionCodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPromotionCodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPromotionCodesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPromotionCodesQuery, GetAllPromotionCodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPromotionCodesQuery, GetAllPromotionCodesQueryVariables>(GetAllPromotionCodesDocument, options);
      }
export function useGetAllPromotionCodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPromotionCodesQuery, GetAllPromotionCodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPromotionCodesQuery, GetAllPromotionCodesQueryVariables>(GetAllPromotionCodesDocument, options);
        }
export function useGetAllPromotionCodesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPromotionCodesQuery, GetAllPromotionCodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPromotionCodesQuery, GetAllPromotionCodesQueryVariables>(GetAllPromotionCodesDocument, options);
        }
export type GetAllPromotionCodesQueryHookResult = ReturnType<typeof useGetAllPromotionCodesQuery>;
export type GetAllPromotionCodesLazyQueryHookResult = ReturnType<typeof useGetAllPromotionCodesLazyQuery>;
export type GetAllPromotionCodesSuspenseQueryHookResult = ReturnType<typeof useGetAllPromotionCodesSuspenseQuery>;
export type GetAllPromotionCodesQueryResult = Apollo.QueryResult<GetAllPromotionCodesQuery, GetAllPromotionCodesQueryVariables>;
export const EditPromotionCodeDocument = gql`
    mutation EditPromotionCode($editPromotionCodeId: ID!, $input: EditPromotionCodeInput!) {
  editPromotionCode(id: $editPromotionCodeId, input: $input) {
    id
    code
    discount
    expirationDate
  }
}
    `;
export type EditPromotionCodeMutationFn = Apollo.MutationFunction<EditPromotionCodeMutation, EditPromotionCodeMutationVariables>;
export type EditPromotionCodeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditPromotionCodeMutation, EditPromotionCodeMutationVariables>
    } & TChildProps;
export function withEditPromotionCode<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditPromotionCodeMutation,
  EditPromotionCodeMutationVariables,
  EditPromotionCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditPromotionCodeMutation, EditPromotionCodeMutationVariables, EditPromotionCodeProps<TChildProps, TDataName>>(EditPromotionCodeDocument, {
      alias: 'editPromotionCode',
      ...operationOptions
    });
};

/**
 * __useEditPromotionCodeMutation__
 *
 * To run a mutation, you first call `useEditPromotionCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPromotionCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPromotionCodeMutation, { data, loading, error }] = useEditPromotionCodeMutation({
 *   variables: {
 *      editPromotionCodeId: // value for 'editPromotionCodeId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditPromotionCodeMutation(baseOptions?: Apollo.MutationHookOptions<EditPromotionCodeMutation, EditPromotionCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPromotionCodeMutation, EditPromotionCodeMutationVariables>(EditPromotionCodeDocument, options);
      }
export type EditPromotionCodeMutationHookResult = ReturnType<typeof useEditPromotionCodeMutation>;
export type EditPromotionCodeMutationResult = Apollo.MutationResult<EditPromotionCodeMutation>;
export type EditPromotionCodeMutationOptions = Apollo.BaseMutationOptions<EditPromotionCodeMutation, EditPromotionCodeMutationVariables>;
export const DeletePromotionCodeDocument = gql`
    mutation DeletePromotionCode($deletePromotionCodeId: ID!) {
  deletePromotionCode(id: $deletePromotionCodeId) {
    id
    code
    discount
    expirationDate
  }
}
    `;
export type DeletePromotionCodeMutationFn = Apollo.MutationFunction<DeletePromotionCodeMutation, DeletePromotionCodeMutationVariables>;
export type DeletePromotionCodeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeletePromotionCodeMutation, DeletePromotionCodeMutationVariables>
    } & TChildProps;
export function withDeletePromotionCode<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeletePromotionCodeMutation,
  DeletePromotionCodeMutationVariables,
  DeletePromotionCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeletePromotionCodeMutation, DeletePromotionCodeMutationVariables, DeletePromotionCodeProps<TChildProps, TDataName>>(DeletePromotionCodeDocument, {
      alias: 'deletePromotionCode',
      ...operationOptions
    });
};

/**
 * __useDeletePromotionCodeMutation__
 *
 * To run a mutation, you first call `useDeletePromotionCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePromotionCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePromotionCodeMutation, { data, loading, error }] = useDeletePromotionCodeMutation({
 *   variables: {
 *      deletePromotionCodeId: // value for 'deletePromotionCodeId'
 *   },
 * });
 */
export function useDeletePromotionCodeMutation(baseOptions?: Apollo.MutationHookOptions<DeletePromotionCodeMutation, DeletePromotionCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePromotionCodeMutation, DeletePromotionCodeMutationVariables>(DeletePromotionCodeDocument, options);
      }
export type DeletePromotionCodeMutationHookResult = ReturnType<typeof useDeletePromotionCodeMutation>;
export type DeletePromotionCodeMutationResult = Apollo.MutationResult<DeletePromotionCodeMutation>;
export type DeletePromotionCodeMutationOptions = Apollo.BaseMutationOptions<DeletePromotionCodeMutation, DeletePromotionCodeMutationVariables>;
export const CreatePromotionCodeDocument = gql`
    mutation CreatePromotionCode($input: CreatePromotionCodeInput!) {
  createPromotionCode(input: $input) {
    id
    code
    discount
    expirationDate
  }
}
    `;
export type CreatePromotionCodeMutationFn = Apollo.MutationFunction<CreatePromotionCodeMutation, CreatePromotionCodeMutationVariables>;
export type CreatePromotionCodeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreatePromotionCodeMutation, CreatePromotionCodeMutationVariables>
    } & TChildProps;
export function withCreatePromotionCode<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePromotionCodeMutation,
  CreatePromotionCodeMutationVariables,
  CreatePromotionCodeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePromotionCodeMutation, CreatePromotionCodeMutationVariables, CreatePromotionCodeProps<TChildProps, TDataName>>(CreatePromotionCodeDocument, {
      alias: 'createPromotionCode',
      ...operationOptions
    });
};

/**
 * __useCreatePromotionCodeMutation__
 *
 * To run a mutation, you first call `useCreatePromotionCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePromotionCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPromotionCodeMutation, { data, loading, error }] = useCreatePromotionCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePromotionCodeMutation(baseOptions?: Apollo.MutationHookOptions<CreatePromotionCodeMutation, CreatePromotionCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePromotionCodeMutation, CreatePromotionCodeMutationVariables>(CreatePromotionCodeDocument, options);
      }
export type CreatePromotionCodeMutationHookResult = ReturnType<typeof useCreatePromotionCodeMutation>;
export type CreatePromotionCodeMutationResult = Apollo.MutationResult<CreatePromotionCodeMutation>;
export type CreatePromotionCodeMutationOptions = Apollo.BaseMutationOptions<CreatePromotionCodeMutation, CreatePromotionCodeMutationVariables>;
export const GetAllPromotionsDocument = gql`
    query GetAllPromotions {
  getAllPromotions {
    title
    productId
    id
    description
  }
}
    `;
export type GetAllPromotionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllPromotionsQuery, GetAllPromotionsQueryVariables>
    } & TChildProps;
export function withGetAllPromotions<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllPromotionsQuery,
  GetAllPromotionsQueryVariables,
  GetAllPromotionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllPromotionsQuery, GetAllPromotionsQueryVariables, GetAllPromotionsProps<TChildProps, TDataName>>(GetAllPromotionsDocument, {
      alias: 'getAllPromotions',
      ...operationOptions
    });
};

/**
 * __useGetAllPromotionsQuery__
 *
 * To run a query within a React component, call `useGetAllPromotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPromotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPromotionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPromotionsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPromotionsQuery, GetAllPromotionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPromotionsQuery, GetAllPromotionsQueryVariables>(GetAllPromotionsDocument, options);
      }
export function useGetAllPromotionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPromotionsQuery, GetAllPromotionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPromotionsQuery, GetAllPromotionsQueryVariables>(GetAllPromotionsDocument, options);
        }
export function useGetAllPromotionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPromotionsQuery, GetAllPromotionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPromotionsQuery, GetAllPromotionsQueryVariables>(GetAllPromotionsDocument, options);
        }
export type GetAllPromotionsQueryHookResult = ReturnType<typeof useGetAllPromotionsQuery>;
export type GetAllPromotionsLazyQueryHookResult = ReturnType<typeof useGetAllPromotionsLazyQuery>;
export type GetAllPromotionsSuspenseQueryHookResult = ReturnType<typeof useGetAllPromotionsSuspenseQuery>;
export type GetAllPromotionsQueryResult = Apollo.QueryResult<GetAllPromotionsQuery, GetAllPromotionsQueryVariables>;
export const EditPromotionDocument = gql`
    mutation EditPromotion($editPromotionId: ID!, $input: EditPromotionInput!) {
  editPromotion(id: $editPromotionId, input: $input) {
    id
    productId
    title
    description
  }
}
    `;
export type EditPromotionMutationFn = Apollo.MutationFunction<EditPromotionMutation, EditPromotionMutationVariables>;
export type EditPromotionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditPromotionMutation, EditPromotionMutationVariables>
    } & TChildProps;
export function withEditPromotion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditPromotionMutation,
  EditPromotionMutationVariables,
  EditPromotionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditPromotionMutation, EditPromotionMutationVariables, EditPromotionProps<TChildProps, TDataName>>(EditPromotionDocument, {
      alias: 'editPromotion',
      ...operationOptions
    });
};

/**
 * __useEditPromotionMutation__
 *
 * To run a mutation, you first call `useEditPromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPromotionMutation, { data, loading, error }] = useEditPromotionMutation({
 *   variables: {
 *      editPromotionId: // value for 'editPromotionId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditPromotionMutation(baseOptions?: Apollo.MutationHookOptions<EditPromotionMutation, EditPromotionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPromotionMutation, EditPromotionMutationVariables>(EditPromotionDocument, options);
      }
export type EditPromotionMutationHookResult = ReturnType<typeof useEditPromotionMutation>;
export type EditPromotionMutationResult = Apollo.MutationResult<EditPromotionMutation>;
export type EditPromotionMutationOptions = Apollo.BaseMutationOptions<EditPromotionMutation, EditPromotionMutationVariables>;
export const DeletePromotionDocument = gql`
    mutation DeletePromotion($deletePromotionId: ID!) {
  deletePromotion(id: $deletePromotionId) {
    id
    productId
    title
    description
  }
}
    `;
export type DeletePromotionMutationFn = Apollo.MutationFunction<DeletePromotionMutation, DeletePromotionMutationVariables>;
export type DeletePromotionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeletePromotionMutation, DeletePromotionMutationVariables>
    } & TChildProps;
export function withDeletePromotion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeletePromotionMutation,
  DeletePromotionMutationVariables,
  DeletePromotionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeletePromotionMutation, DeletePromotionMutationVariables, DeletePromotionProps<TChildProps, TDataName>>(DeletePromotionDocument, {
      alias: 'deletePromotion',
      ...operationOptions
    });
};

/**
 * __useDeletePromotionMutation__
 *
 * To run a mutation, you first call `useDeletePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePromotionMutation, { data, loading, error }] = useDeletePromotionMutation({
 *   variables: {
 *      deletePromotionId: // value for 'deletePromotionId'
 *   },
 * });
 */
export function useDeletePromotionMutation(baseOptions?: Apollo.MutationHookOptions<DeletePromotionMutation, DeletePromotionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePromotionMutation, DeletePromotionMutationVariables>(DeletePromotionDocument, options);
      }
export type DeletePromotionMutationHookResult = ReturnType<typeof useDeletePromotionMutation>;
export type DeletePromotionMutationResult = Apollo.MutationResult<DeletePromotionMutation>;
export type DeletePromotionMutationOptions = Apollo.BaseMutationOptions<DeletePromotionMutation, DeletePromotionMutationVariables>;
export const CreatePromotionDocument = gql`
    mutation CreatePromotion($input: CreatePromotionInput!) {
  createPromotion(input: $input) {
    id
    productId
    title
    description
  }
}
    `;
export type CreatePromotionMutationFn = Apollo.MutationFunction<CreatePromotionMutation, CreatePromotionMutationVariables>;
export type CreatePromotionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreatePromotionMutation, CreatePromotionMutationVariables>
    } & TChildProps;
export function withCreatePromotion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreatePromotionMutation,
  CreatePromotionMutationVariables,
  CreatePromotionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreatePromotionMutation, CreatePromotionMutationVariables, CreatePromotionProps<TChildProps, TDataName>>(CreatePromotionDocument, {
      alias: 'createPromotion',
      ...operationOptions
    });
};

/**
 * __useCreatePromotionMutation__
 *
 * To run a mutation, you first call `useCreatePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPromotionMutation, { data, loading, error }] = useCreatePromotionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePromotionMutation(baseOptions?: Apollo.MutationHookOptions<CreatePromotionMutation, CreatePromotionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePromotionMutation, CreatePromotionMutationVariables>(CreatePromotionDocument, options);
      }
export type CreatePromotionMutationHookResult = ReturnType<typeof useCreatePromotionMutation>;
export type CreatePromotionMutationResult = Apollo.MutationResult<CreatePromotionMutation>;
export type CreatePromotionMutationOptions = Apollo.BaseMutationOptions<CreatePromotionMutation, CreatePromotionMutationVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    paymentInfo {
      cardNumber
      cardHolder
      cvv
      expirationDate
    }
    password
    id
    favorites
    fullName
    email
    avatar
    address
  }
}
    `;
export type GetAllUsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllUsersQuery, GetAllUsersQueryVariables>
    } & TChildProps;
export function withGetAllUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetAllUsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUsersQuery, GetAllUsersQueryVariables, GetAllUsersProps<TChildProps, TDataName>>(GetAllUsersDocument, {
      alias: 'getAllUsers',
      ...operationOptions
    });
};

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const EditUserDocument = gql`
    mutation EditUser($editUserId: ID!, $input: EditUserInput!) {
  editUser(id: $editUserId, input: $input) {
    paymentInfo {
      cardHolder
      cardNumber
      cvv
      expirationDate
    }
    password
    id
    fullName
    favorites
    email
    avatar
    address
  }
}
    `;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;
export type EditUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>
    } & TChildProps;
export function withEditUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditUserMutation,
  EditUserMutationVariables,
  EditUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditUserMutation, EditUserMutationVariables, EditUserProps<TChildProps, TDataName>>(EditUserDocument, {
      alias: 'editUser',
      ...operationOptions
    });
};

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      editUserId: // value for 'editUserId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    paymentInfo {
      cardHolder
      cardNumber
      cvv
      expirationDate
    }
    password
    id
    favorites
    email
    avatar
    address
    fullName
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export type DeleteUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>
    } & TChildProps;
export function withDeleteUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserMutation, DeleteUserMutationVariables, DeleteUserProps<TChildProps, TDataName>>(DeleteUserDocument, {
      alias: 'deleteUser',
      ...operationOptions
    });
};

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      deleteUserId: // value for 'deleteUserId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    paymentInfo {
      cardHolder
      cardNumber
      cvv
      expirationDate
    }
    password
    fullName
    favorites
    id
    email
    avatar
    address
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>
    } & TChildProps;
export function withCreateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps, TDataName>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;