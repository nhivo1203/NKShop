import React, { useEffect, useState } from "react";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Orders from "./Orders";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../Redux/Actions/OrderActions";

const OrderMain = () => {
  const [filter, setFilter] = useState(true);
  const orderList = useSelector((state) => state.orderList);
  let { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders(filter));
    }
  }, [dispatch, userInfo, filter]);

  console.log(orders);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Orders</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            {/* <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div> */}
            <div className="col-lg-2 col-6 col-md-3">
              <select
                className="form-select"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              >
                <option value="ORDER_IS_PAID">Order is Paid</option>
                <option value="ORDER_NOT_PAID">Order not Paid</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Orders orders={orders} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
