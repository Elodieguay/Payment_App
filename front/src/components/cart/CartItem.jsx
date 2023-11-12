import React from 'react';
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const CartItem = ({ item, handleQuantity, deleteItem }) => {
  return (
    <div key={item.id} className="mt-8 border-t border-gray-400 pt-8">
      <ul className="space-y-4">
        <li className="flex items-center gap-4">
          <div>
            <h3 className=" text-sm sm:text-base  text-gray-900">{item.name}</h3>
          </div>
          <div className='flex items-center max-sm:text-sm max-sm:px-5'>
            <IoIosRemove onClick={() => handleQuantity("dec", item.id)} />
            <p>{item.quantity}</p>
            <IoIosAdd onClick={() => handleQuantity("inc", item.id)} />
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 font-medium sm:text-base text-sm">
            <p>{item.price}€</p>
            <p className='flex items-center max-sm:text-sm'>
              <RxCross1 className="text-gray-600 transition hover:text-red-600 "
                onClick={() => deleteItem(item.id)}
              /> Supprimer
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;