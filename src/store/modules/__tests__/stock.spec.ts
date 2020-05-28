import { getters, mutations } from '@/store/modules/stock'

describe('stock module in vuesx store', () => {
  let state: any
  beforeEach(() => {
    state = {
      SELECTED_STOCK: [],
      TOTAL_SELECTED_STOCK: 0,
      ALL_STOCK: []
    }
  })
  describe('getters', () => {
    it('should return all stock', () => {
      expect(getters.getAllStock(state)).toEqual([])
      expect(getters.getAllStock(state)).toBeTruthy()
    })
    it('should return selecter stock', () => {
      expect(getters.getAllCurrentlySelectedStock(state)).toEqual([])
      expect(getters.getAllCurrentlySelectedStock(state)).toBeTruthy()
    })
  })

  describe('mutations', () => {
    it('should an item to ALL_STOCK property', () => {
      state.ALL_STOCK = []
      mutations.SET_TOTAL_STOCK(state, [{ name: 'New Product' }])
      expect(state.ALL_STOCK.length).toBe(1)
    })
    it('should an item to SELECTED_STOCK property', () => {
      mutations.ADD_TO_CART(state, { item: { id: 1, name: 'New product' }, qty: 1 })
      expect(state.SELECTED_STOCK.length).toBe(1)
    })
    it('should update stock in previously added item', () => {
      state.SELECTED_STOCK = [{ id: 1, quantity: 1 }, { id: 2, quantity: 2 }]
      mutations.ADD_TO_CART(state, { item: { id: 1, name: 'New product' }, qty: 2 })
      expect(state.SELECTED_STOCK[0].quantity).toBe(3)
    })
    it('should increase the quantity of selected item', () => {
      state.SELECTED_STOCK = [{ id: 1, quantity: 4 }, { id: 2, quantity: 2 }]
      mutations.ADD_ONE_TO_COUNT(state, { item: { id: 1, name: 'New product' }, qty: 5 })
      expect(state.SELECTED_STOCK[0].quantity).toEqual(5)
    })
    it('should remove an item from SELECTED_STOCK property', () => {
      state.SELECTED_STOCK = [{ id: 1 }, { id: 2 }]
      mutations.REMOVE_FROM_CART(state, { id: 1 })
      expect(state.SELECTED_STOCK.length).toEqual(1)
    })
  })
})
