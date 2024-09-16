import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


// First, create the thunk
export const fetchUserById = createAsyncThunk(
    'posts/getPosts',
    async ( post, { rejectWithValue }) => {
        try {
            const response = await fetch(
              'https://fakestoreapi.com/products'
             
            )
            const data = await response.json()
            return data
          } catch (err) {
            // You can choose to use the message attached to err or write a custom error
            return rejectWithValue('Opps there seems to be an error')
          }
    },
  )

  // cart itm
  // export const cartItms=createAsyncThunk('cartItms',async(prod,{rejectWithValue})=>{

  //   const response= await fetch(
  //     'https://fakestoreapi.com/products',
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(prod),
  //     }
           
  //   )

  //   try {
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     return rejectWithValue(error);
  //   }
 
  // })
  

const initialState = {
    itm: [],
    loading: false,
    error:null,
    cartItm:[]
  }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const existingItem = state.cartItm.find((itm) => itm.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItm.push({ ...action.payload, qty: 1 });
      }
    },

    delItm:(state,action)=>{
      state.cartItm = state.cartItm.filter((itm)=>itm.id!==action.payload)
    },
    decremtItm:(state,action)=>{
      const itemIndex=state.cartItm.findIndex((itm)=>itm.id ===action.payload.id)
      console.log('item check', itemIndex);
  
      // Check if the item exists and has a quantity greater than 1 before decrementing
      if (itemIndex >= 0 && state.cartItm[itemIndex].qty > 1) {
        state.cartItm[itemIndex].qty -= 1;
      } else if (itemIndex >= 0 && state.cartItm[itemIndex].qty === 1) {
        // If the item quantity is 1, you might want to remove it from the cart instead
        state.cartItm.splice(itemIndex, 1);
      }
    },
    incrmnttItm:(state,action)=>{
      const itemIndex=state.cartItm.findIndex((itm)=>itm.id ===action.payload.id)
      console.log('itmcheck',itemIndex)
      if (itemIndex >= 0) {
        state.cartItm[itemIndex].qty += 1;
      }
    },
emptyCart:(state,action)=>{
  state.cartItm=[]
}

   
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.pending, (state) => {
      // Add user to the state array
      state.loading = true
    })
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false
      state.itm=action.payload
    })
    builder.addCase(fetchUserById.rejected, (state, action) => {
      // Add user to the state array
      state.loading = false
      state.error=action.payload
    })

    // builder.addCase(cartItms.pending, (state) => {
     
    //   state.loading = true
    // })
    // builder.addCase(cartItms.fulfilled, (state, action) => {
  
    //   state.loading = false
    //   const existingItem = state.cartItm.find((itm) => itm.id === action.payload.id);
    //   if (existingItem) {
    //     existingItem.qty += 1;
    //   } else {
    //     state.cartItm.push({ ...action.payload, qty: 1 });
    //   }
      
    // })
    // builder.addCase(cartItms.rejected, (state, action) => {
     
    //   state.loading = false
    //   state.error=action.payload
    // })
  },
})

// Action creators are generated for each case reducer function
export const {addCart,delItm,decremtItm,incrmnttItm,emptyCart } = cartSlice.actions

export default cartSlice.reducer