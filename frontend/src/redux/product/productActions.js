import axios from 'axios'
import ProductTypes from './productTypes'

export const startFetching = () => ({
  type: ProductTypes.PRODUCT_LIST_REQUEST,
})

export const successFetching = (products) => ({
  type: ProductTypes.PRODUCT_LIST_SUCCESS,
  payload: products,
})

export const failFetching = (err) => ({
  type: ProductTypes.PRODUCT_LIST_FAIL,
  payload:
    err.response && err.response.data.message
      ? err.response.data.message
      : err.message,
})

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(startFetching())

    const { data } = await axios.get('/api/products')
    dispatch(successFetching(data))
  } catch (error) {
    dispatch(failFetching(error))
  }
}

export const listProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ProductTypes.PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
      type: ProductTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: ProductTypes.PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    })
  }
}
