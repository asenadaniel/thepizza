function CartPage() {
  return (
    <div className="p-4 lg:px:20 xl:px-40">
      <table className="w-full">
        <thead>
          <tr className=" text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base odd:bg-red-50">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">20.10.2023</td>
            <td className="py-6 px-1">90.90</td>
            <td className="hidden md:block py-6 px-1">
              Burger (2), Pizza , Coke (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)....</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-200">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">20.10.2023</td>
            <td className="py-6 px-1">90.90</td>
            <td className="hidden md:block py-6 px-1">
              Burger (2), Pizza , Coke (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)....</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-200">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">20.10.2023</td>
            <td className="py-6 px-1">90.90</td>
            <td className="hidden md:block py-6 px-1">
              Burger (2), Pizza , Coke (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)....</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartPage;
