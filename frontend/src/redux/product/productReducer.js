import ProductTypes from './productTypes'

const INITIAL_STATE = {
  products: [],
  loading: false,
  err: null,
}

export const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case ProductTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }
    case ProductTypes.PRODUCT_LIST_FAIL:
      return {
        ...state,
        err: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { review: [] } },
  action
) => {
  switch (action.type) {
    case ProductTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case ProductTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      }
    case ProductTypes.PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        err: action.payload,
      }

    default:
      return state
  }
}
