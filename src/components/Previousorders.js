import React, { useState } from 'react';

const orders = [
  {
    pending: true,
    completed: false,
    orderdate: "2021-06-24T03:54:13.146Z",
    mode: "cash",
    cakes: [
      {
        quantity: 1,
        image: "https://res.cloudinary.com/ashudev/image/upload/v1623225127/ok6edwgmidrpaojiexg8.jpg",
        createdat: "2021-06-19T15:11:15.261Z",
        _id: "60ce217f8706680022e76929",
        cakeid: "1623225131311",
        name: "Choco Lava Cake",
        price: 700,
        weight: 1,
        email: "ashu.lekhi0540@gmail.com",
        __v: 0
      },
      {
        quantity: 4,
        image: "https://res.cloudinary.com/ashudev/image/upload/v1623644400/vtvpkqbbcwrycpdnwnjg.jpg",
        createdat: "2021-06-21T08:34:28.307Z",
        _id: "60d0aeeeccedc10022d80304",
        cakeid: "1623644459435",
        name: "Rainbow Cake",
        price: 3400,
        weight: 1,
        email: "ashu.lekhi0540@gmail.com",
        __v: 0
      },
      {
        quantity: 2,
        image: "https://res.cloudinary.com/ashudev/image/upload/v1623664761/ttojutwzo4wgzpwxg4am.jpg",
        createdat: "2021-06-21T08:34:28.307Z",
        _id: "60d0ae3dccedc10022d80302",
        cakeid: "1623664852906",
        name: "choclate cake",
        price: 1000,
        weight: 2,
        email: "ashu.lekhi0540@gmail.com",
        __v: 0
      },
      {
        quantity: 1,
        image: "https://res.cloudinary.com/ashudev/image/upload/v1623756748/xom4ntymid6yd8mbcxf7.jpg",
        createdat: "2021-06-17T03:05:53.096Z",
        _id: "60cb3c9ba66601002202ffb1",
        cakeid: "1623756795302",
        name: "Fruit cake",
        price: 645,
        weight: 1,
        email: "ashu.lekhi0540@gmail.com",
        __v: 0
      }
    ],
    _id: "60d402c9dfd42100222e9eb5",
    price: 5745,
    address: "Paschim Vihar",
    phone: "9654235010",
    city: "New Delhi",
    pincode: 110063,
    name: "Ashu LEkhi",
    email: "ashu.lekhi0540@gmail.com",
    orderid: 1624507081984,
    __v: 0
  },
  {
    pending: true,
    completed: false,
    orderdate: "2021-06-24T03:54:13.146Z",
    mode: "cash",
    cakes: [
      {
        quantity: 1,
        image: "https://res.cloudinary.com/ashudev/image/upload/v1623225127/ok6edwgmidrpaojiexg8.jpg",
        createdat: "2021-06-19T15:11:15.261Z",
        _id: "60ce217f8706680022e76929",
        cakeid: "1623225131311",
        name: "Choco Lava Cake",
        price: 700,
        weight: 1,
        email: "ashu.lekhi0540@gmail.com",
        __v: 0
      },
      {
        quantity: 4,
        image: "https://res.cloudinary.com/ashudev/image/upload/v1623644400/vtvpkqbbcwrycpdnwnjg.jpg",
        createdat: "2021-06-21T08:34:28.307Z",
        _id: "60d0aeeeccedc10022d80304",
        cakeid: "1623644459435",
        name: "Rainbow Cake",
        price: 3400,
        weight: 1,
        email: "ashu.lekhi0540@gmail.com",
        __v: 0
      }
    ]
  }
];

export default () => {
  const [activeOrder, setActiveOrder] = useState(null);

  const toggleOrder = (index) => {
    if (activeOrder === index) {
      setActiveOrder(null);
    } else {
      setActiveOrder(index);
    }
  };

  return (
    <div className="container my-5">
      <h2>Previous Orders</h2>
      <div className="accordion" id="ordersAccordion">
        {orders.map((order, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${activeOrder === index ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggleOrder(index)}
              >
                Order ID: {order.orderid} (Date: {new Date(order.orderdate).toLocaleDateString()})
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${activeOrder === index ? 'show' : ''}`}
            >
              <div className="accordion-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Cake ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Weight</th>
                      <th scope="col">Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.cakes.map((cake, cakeIndex) => (
                      <tr key={cakeIndex}>
                        <td>{cake.cakeid}</td>
                        <td>{cake.name}</td>
                        <td>{cake.quantity}</td>
                        <td>{cake.price}</td>
                        <td>{cake.weight}</td>
                        <td><img src={cake.image} alt={cake.name} width="50" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


