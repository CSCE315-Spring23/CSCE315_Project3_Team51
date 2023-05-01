MANAGER SIDE
------------


# getMostUsedItems
Route: [/most_used_items]
Input: None
Output: Array of JSONs
    - ingredient_name (string)
    - amt_used (integer)

# getSellsTogether
Route: [/get_sells_together]
Input: None
Output: Array of JSONs
    - item_1 (string)
    - item_2 (string)
    - times_sold (integer)

# restockReport
Route: [/restock_report]
Input: None
Output: Array of JSONs
    - ingredient_name (string)
    - quantity (string in format of `{integer} {units}` ex. `84 slices`)
    - min_q (string, same as above)

# salesReport
Route: [/sales_report]
Input: None
Output: Array of JSONs
    - item_name (string)
    - total_sales (double)

# excessReport NOTE: NOT FINISHED YET
Route: [/excess_report]
Input: None
Output: Array of JSONs
    - ingredient_name (string)
    - amt_sold (integer)

# xReport
Route: [/x_report]
Input: None
Output: Array of JSONs
    - item_name (string)
    - times_ordered (integer)

# zReport
Route: [/z_report]
Input: None
Output: Array of JSONs
    - item_name (string)
    - total_sales (double)

# editItem
Route: [/edit_item]
Input: 
    - item (string or number)
    - newName (optional, string)
    - newPrice (optional, double)
    - newCategory (optional, string)
    - newIngredients (optional, array of strings)
Output: None

# addItem
Route: [/add_item]
Input:
    - name (string)
    - price (double)
    - category (string)
    - ingredients (array of strings)
Output: None

# removeItem
Route: [/remove_item]
Input: 
    - item (string or number)
Output: None

# getInventory
Route: [/get_inventory]
Input: None
Output: Array of JSONs
    - ingredient_name (string)
    - units (string)
    - quantity (integer)
    - prev_q1 (integer)
    - prev_q2 (integer)
    ...
    - prev_q7 (integer)
    - min_q (integer)

# editInventory
Route: [/edit_inventory]
Input: 
    - ingredient (string)
    - newQuantity (optional, integer)
    - minQuantity (optional, integer)
Output: None

# signalNewDay
# Shifts all quantities in inventory_data over a column
Route: [/new_day]
Input: None
Output: None

# employeeInfo
Route: [/employee_info]
Input: 
    - id (integer)
Output: Single JSON
    - employee_id (integer)
    - employee_name (string)
    - employee_type (string)
    - hours_worked (integer)
    - is_manager (boolean)

# getSales
Route: [/get_sales]
Input: None
Output: Single JSON
    - total_sales (double)



SERVER/CUSTOMER/MENU SIDE
-------------------------


# lastOrderNumber
# Gets the largest order number. If making a new order, add one
Route: [/last_order_number]
Input: None
Output: Single JSON
    - last_number (integer)

# createOrder
# Creates a new order with the given information and returns its unique order number
Route: [/create_order]
Input: 
    - itemsOrdered (array of integers referring to menu item number)
    - totalPrice (double)
    - modifications (optional, array of strings with format `{index of item in items_ordered}{either + or -}{ingredient name}` ex. `0+ketchup` means add ketchup to the first item in the order)
    - orderTaker (optional, integer)
    - tip (optional, double)
Output: Single JSON
    - order_number (integer)

# updateInventory
# Updates the inventory based on the contents of a given order. Call this after an order is submitted
Route: [/update_inventory]
Input: 
    - orderNum (integer)
Output: None

# getMenu
Route: [/get_menu]
Input: None
Output: Array of JSONs (ordered by item number)
    - item_number (integer)
    - item_name (string)
    - price (double) 
    - category (string)
    - ingredients (array of strings with format `{number} {ingredient name}`)

# getIngredients
Route: [/get_ingredients]
Input: 
    - item (integer or string)
Output: Single JSON
    - ingredients (array of strings with format `{number} {ingredient name}`)

# getCategoryItems
# Gets all menu items with the matching category
Route: [/get_category_items]
Input: 
    - category (string)
Output: Array of JSONs
    - item_number (integer)
    - item_name (string)
    - price (double)
    - category (string)
    - ingredients (array of strings with format `{number} {ingredient name}`)

# getOrders
Route: [/get_orders]
Input: None
Output: Array of JSONs
    - order_number (integer)
    - total_price (double)
    - tip (double)
    - order_taker (integer)
    - items_ordered (array of integers referring to menu item number)
    - modifications (array of strings with format `{index of item in items_ordered}{either + or -}{ingredient name}` ex. `0+ketchup` means add ketchup to the first item in the order)
    - order_status (string, will say `In Progress` before order is submitted and `Served` after order is submitted)
    - current_day (boolean, true by default, set to false when signalNewDay is called)
    - order_time (timestamp, refer to psql timestamp for format)

# getOrderByNum
Route: [/get_order_by_num]
Input: 
    - orderNum (integer)
Output: Single JSON
    - See above for output format



LOGIN PAGE
----------


# isEmployee
# Will throw error if employee is not found, otherwise returns their name
Route: [/is_employee]
Input: 
    - id (integer)
Output: Single JSON 
    - employee_name (string)

# isManager
# Will throw error if employee is not found, otherwise returns name and manager status
Route: [/is_manager]
Input: 
    - id (integer)
Output: Single JSON
    - is_manager (boolean)
    - employee_name (string)