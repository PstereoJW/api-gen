declare namespace runtime {
	
	interface QueryItemsResp {
		errMsg?: string; 
		itemList?: QueryItemsResp.Item[]; 
		itemList1?: QueryItemsResp.Item2[]; 
	}
	namespace QueryItemsResp {
		
		interface Item {
			e?: demo.MyEnum; 
			item3?: QueryItemsResp.Item.Item3[]; 
			itemId?: string; 
		}
		namespace Item {
			
			interface Item3 {
				item4?: QueryItemsResp.Item.Item3.Item4[]; 
				item2?: QueryItemsResp.Item2[]; 
			}
			namespace Item3 {
				
				interface Item4 {
					item2?: QueryItemsResp.Item2[]; 
					e?: demo.MyEnum; 
				}
			}
		}
		
		interface Item2 {
			item4?: QueryItemsResp.Item2.Item4[]; 
			itemId?: string; 
		}
		namespace Item2 {
			
			interface Item4 {
				item?: QueryItemsResp.Item[]; 
			}
		}
	}
}
